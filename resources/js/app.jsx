import React from 'react';

import '../css/app.css';
import './bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { route } from 'ziggy-js';

import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { ThemeProvider } from './Components/ThemeContext';


window.route = route;

AOS.init();
window.toastr = toastr;


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),

    setup({ el, App, props }) {

        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>
        );
    },

    progress: {
        color: '#4B5563',
    },
});