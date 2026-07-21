import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext(null);

const STORAGE_KEY = 'app-theme'; // was 'terra-theme' in the Blade version

function getSystemTheme() {
    if (typeof window === 'undefined' || !window.matchMedia) return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme() {
    if (typeof window === 'undefined') return null;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
}

/**
 * Theme behavior:
 * - On first visit (nothing saved yet), the theme follows the browser/OS
 *   setting, and keeps following it live if the user changes their OS theme.
 * - As soon as the user explicitly switches the theme in the app, that
 *   choice is saved and takes over — the app stops following the OS after that.
 */
export function ThemeProvider({ children }) {
    const stored = getStoredTheme();
    const [theme, setTheme] = useState(stored ?? getSystemTheme());
    const [followSystem, setFollowSystem] = useState(stored === null);

    // Apply to <html> + persist only the user's explicit choice
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        if (!followSystem) {
            window.localStorage.setItem(STORAGE_KEY, theme);
        }
    }, [theme, followSystem]);

    // While no explicit preference has been set, keep tracking OS changes live
    useEffect(() => {
        if (!followSystem || !window.matchMedia) return;
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
        mql.addEventListener('change', handleChange);
        return () => mql.removeEventListener('change', handleChange);
    }, [followSystem]);

    const chooseTheme = useCallback((next) => {
        setFollowSystem(false);
        setTheme(next);
    }, []);

    const toggleTheme = useCallback(() => {
        setFollowSystem(false);
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const setLight = useCallback(() => chooseTheme('light'), [chooseTheme]);
    const setDark = useCallback(() => chooseTheme('dark'), [chooseTheme]);

    // Lets the user go back to "match my browser" if you want to expose this
    const useSystemTheme = useCallback(() => {
        window.localStorage.removeItem(STORAGE_KEY);
        setFollowSystem(true);
        setTheme(getSystemTheme());
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDark: theme === 'dark',
                followSystem,
                toggleTheme,
                setLight,
                setDark,
                useSystemTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a <ThemeProvider>');
    }
    return ctx;
}
