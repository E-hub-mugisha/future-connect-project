import React from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
);
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z" /></svg>
);
const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6Z" /></svg>
);
const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

export default function Index({ plans }) {
  const { flash } = usePage().props;

  function destroy(plan) {
    if (!confirm(`Delete "${plan.name}"? This cannot be undone.`)) return;
    router.delete(route('admin.pricing-plans.destroy', plan.id), { preserveScroll: true });
  }

  function formatPrice(value) {
    if (value === null || value === undefined || value === '') return null;
    return Number(value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  }

  return (
    <div data-h-scope="pricing-plans-index">
      <Head title="Pricing Plans" />
      <style>{`
        [data-h-scope="pricing-plans-index"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
          --danger: #dc4c4c; --danger-dim: rgba(220,76,76,.08);
        }
        [data-h-scope="pricing-plans-index"] .pi-wrap { max-width: 1200px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="pricing-plans-index"] .pi-header {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem;
        }
        [data-h-scope="pricing-plans-index"] .pi-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.5rem; color: var(--white); }
        [data-h-scope="pricing-plans-index"] .pi-sub { color: var(--muted); font-size: .85rem; margin-top: .3rem; }
        [data-h-scope="pricing-plans-index"] .pi-new {
          display: inline-flex; align-items: center; gap: .45rem; background: var(--accent); color: #ffffff;
          border: none; font-family: 'Syne', sans-serif; font-weight: 800; font-size: .85rem;
          padding: .7rem 1.2rem; border-radius: 10px; text-decoration: none; box-shadow: 0 0 20px var(--accent-glow);
          transition: transform .15s;
        }
        [data-h-scope="pricing-plans-index"] .pi-new:hover { transform: translateY(-1px); }

        [data-h-scope="pricing-plans-index"] .pi-flash {
          background: var(--accent-dim); border: 1px solid rgba(0,166,103,.3); color: var(--accent);
          border-radius: 10px; padding: .85rem 1.1rem; font-size: .85rem; margin-bottom: 1.5rem;
        }

        [data-h-scope="pricing-plans-index"] .pi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }

        [data-h-scope="pricing-plans-index"] .pi-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(16,32,27,.04); display: flex; flex-direction: column; position: relative;
        }
        [data-h-scope="pricing-plans-index"] .pi-card.featured { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent), 0 8px 24px var(--accent-glow); }
        [data-h-scope="pricing-plans-index"] .pi-card.inactive { opacity: .6; }

        [data-h-scope="pricing-plans-index"] .pi-badges { position: absolute; top: 1.25rem; right: 1.25rem; display: flex; gap: .35rem; }
        [data-h-scope="pricing-plans-index"] .pi-badge {
          display: inline-flex; align-items: center; gap: .3rem; padding: .25rem .6rem; border-radius: 50px;
          font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .03em;
        }
        [data-h-scope="pricing-plans-index"] .pi-badge.featured { background: var(--accent-dim); color: var(--accent); }
        [data-h-scope="pricing-plans-index"] .pi-badge.inactive { background: var(--danger-dim); color: var(--danger); }

        [data-h-scope="pricing-plans-index"] .pi-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.15rem; color: var(--white); margin-bottom: .35rem; padding-right: 4rem; }
        [data-h-scope="pricing-plans-index"] .pi-desc { font-size: .82rem; color: var(--muted); margin-bottom: 1.1rem; min-height: 1.2rem; }

        [data-h-scope="pricing-plans-index"] .pi-prices { display: flex; gap: 1.25rem; margin-bottom: 1.1rem; padding-bottom: 1.1rem; border-bottom: 1px solid var(--border); }
        [data-h-scope="pricing-plans-index"] .pi-price-block .pi-price-label { font-size: .68rem; text-transform: uppercase; letter-spacing: .04em; color: var(--muted); margin-bottom: .15rem; }
        [data-h-scope="pricing-plans-index"] .pi-price-block .pi-price-value { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.05rem; color: var(--white); }
        [data-h-scope="pricing-plans-index"] .pi-price-block .pi-price-value.empty { color: var(--muted); font-weight: 600; font-size: .85rem; }

        [data-h-scope="pricing-plans-index"] .pi-features { list-style: none; margin: 0 0 1.25rem; padding: 0; flex: 1; }
        [data-h-scope="pricing-plans-index"] .pi-features li { display: flex; align-items: flex-start; gap: .5rem; font-size: .8rem; color: var(--text); padding: .3rem 0; }
        [data-h-scope="pricing-plans-index"] .pi-features li svg { color: var(--accent); margin-top: .15rem; flex-shrink: 0; }
        [data-h-scope="pricing-plans-index"] .pi-no-features { font-size: .8rem; color: var(--muted); margin-bottom: 1.25rem; }

        [data-h-scope="pricing-plans-index"] .pi-actions { display: flex; gap: .5rem; margin-top: auto; }
        [data-h-scope="pricing-plans-index"] .pi-btn {
          flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: .4rem;
          background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .78rem; padding: .55rem;
          border-radius: 8px; cursor: pointer; text-decoration: none; transition: all .15s;
        }
        [data-h-scope="pricing-plans-index"] .pi-btn:hover { border-color: var(--accent); color: var(--accent); }
        [data-h-scope="pricing-plans-index"] .pi-btn.danger:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-dim); }

        [data-h-scope="pricing-plans-index"] .pi-empty {
          background: var(--bg-card); border: 1px dashed var(--border); border-radius: 16px;
          padding: 3rem 2rem; text-align: center; color: var(--muted); font-size: .88rem;
        }
      `}</style>

      <div className="pi-wrap">
        <div className="pi-header">
          <div>
            <div className="pi-title">Pricing Plans</div>
            <div className="pi-sub">{plans.length} plan{plans.length === 1 ? '' : 's'} configured</div>
          </div>
          <Link href={route('admin.pricing-plans.create')} className="pi-new">
            <IconPlus /> New Plan
          </Link>
        </div>

        {flash?.success && <div className="pi-flash">{flash.success}</div>}

        {plans.length === 0 ? (
          <div className="pi-empty">No pricing plans yet. Create your first plan to get started.</div>
        ) : (
          <div className="pi-grid">
            {plans.map((plan) => (
              <div className={`pi-card${plan.is_featured ? ' featured' : ''}${!plan.is_active ? ' inactive' : ''}`} key={plan.id}>
                <div className="pi-badges">
                  {plan.is_featured && <span className="pi-badge featured"><IconStar /> Featured</span>}
                  {!plan.is_active && <span className="pi-badge inactive">Inactive</span>}
                </div>

                <div className="pi-name">{plan.name}</div>
                <div className="pi-desc">{plan.description || 'No description'}</div>

                <div className="pi-prices">
                  <div className="pi-price-block">
                    <div className="pi-price-label">Monthly</div>
                    {formatPrice(plan.monthly_price) ? (
                      <div className="pi-price-value">{formatPrice(plan.monthly_price)} RWF</div>
                    ) : (
                      <div className="pi-price-value empty">Not set</div>
                    )}
                  </div>
                  <div className="pi-price-block">
                    <div className="pi-price-label">Annual</div>
                    {formatPrice(plan.annual_price) ? (
                      <div className="pi-price-value">{formatPrice(plan.annual_price)} RWF</div>
                    ) : (
                      <div className="pi-price-value empty">Not set</div>
                    )}
                  </div>
                </div>

                {plan.features.length > 0 ? (
                  <ul className="pi-features">
                    {plan.features.slice(0, 5).map((feature, i) => (
                      <li key={i}><IconCheck />{feature}</li>
                    ))}
                    {plan.features.length > 5 && (
                      <li style={{ color: 'var(--muted)' }}>+{plan.features.length - 5} more</li>
                    )}
                  </ul>
                ) : (
                  <div className="pi-no-features">No features listed</div>
                )}

                <div className="pi-actions">
                  <Link href={route('admin.pricing-plans.edit', plan.id)} className="pi-btn">
                    <IconEdit /> Edit
                  </Link>
                  <button className="pi-btn danger" onClick={() => destroy(plan)}>
                    <IconTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Index.layout = (page) => <AppLayout children={page} title="Pricing Plans" />;
