import React from 'react';
import { Link } from '@inertiajs/react';

const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
);
const IconTrash = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z" /></svg>
);
const IconBack = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7M5 12h14" /></svg>
);

export default function PlanForm({ mode, form, onSubmit, backHref }) {
  const { data, setData, errors, processing } = form;

  function updateFeature(index, value) {
    const next = [...data.features];
    next[index] = value;
    setData('features', next);
  }

  function addFeature() {
    setData('features', [...data.features, '']);
  }

  function removeFeature(index) {
    setData('features', data.features.filter((_, i) => i !== index));
  }

  return (
    <div data-h-scope="pricing-plan-form">
      <style>{`
        [data-h-scope="pricing-plan-form"] {
          --bg-deep: #f6faf8; --bg-card: #ffffff; --bg-raised: #eef4f1;
          --accent: #00a667; --accent-dim: rgba(0,166,103,.1); --accent-glow: rgba(0,166,103,.22);
          --border: rgba(0,100,60,.12); --text: #10201b; --muted: #5b7a70; --white: #10201b;
          --danger: #dc4c4c; --danger-dim: rgba(220,76,76,.08);
        }
        [data-h-scope="pricing-plan-form"] .pf-wrap { max-width: 720px; margin: 0 auto; padding: 2.5rem 2rem; font-family: 'DM Sans', sans-serif; color: var(--text); }
        [data-h-scope="pricing-plan-form"] .pf-back {
          color: var(--muted); text-decoration: none; font-size: .82rem; display: inline-flex;
          align-items: center; gap: .4rem; margin-bottom: 1.25rem;
        }
        [data-h-scope="pricing-plan-form"] .pf-back:hover { color: var(--accent); }
        [data-h-scope="pricing-plan-form"] .pf-title {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--white); margin-bottom: .3rem;
        }
        [data-h-scope="pricing-plan-form"] .pf-sub { color: var(--muted); font-size: .85rem; margin-bottom: 1.75rem; }

        [data-h-scope="pricing-plan-form"] .pf-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 1.75rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(16,32,27,.04);
        }
        [data-h-scope="pricing-plan-form"] .pf-card h3 {
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .92rem; color: var(--white);
          margin: 0 0 1.1rem; padding-bottom: .75rem; border-bottom: 1px solid var(--border);
        }

        [data-h-scope="pricing-plan-form"] .pf-field { margin-bottom: 1.1rem; }
        [data-h-scope="pricing-plan-form"] .pf-field:last-child { margin-bottom: 0; }
        [data-h-scope="pricing-plan-form"] .pf-label {
          display: block; font-size: .78rem; font-weight: 600; color: var(--muted); margin-bottom: .4rem;
        }
        [data-h-scope="pricing-plan-form"] .pf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 560px) { [data-h-scope="pricing-plan-form"] .pf-row { grid-template-columns: 1fr; } }

        [data-h-scope="pricing-plan-form"] input[type="text"],
        [data-h-scope="pricing-plan-form"] input[type="number"],
        [data-h-scope="pricing-plan-form"] textarea {
          width: 100%; background: var(--bg-raised); border: 1px solid var(--border);
          color: var(--text); border-radius: 10px; padding: .65rem .9rem; font-size: .88rem;
          font-family: inherit; outline: none; transition: border-color .15s;
        }
        [data-h-scope="pricing-plan-form"] input:focus, [data-h-scope="pricing-plan-form"] textarea:focus { border-color: var(--accent); }
        [data-h-scope="pricing-plan-form"] textarea { resize: vertical; min-height: 80px; }
        [data-h-scope="pricing-plan-form"] .pf-price-input { position: relative; }
        [data-h-scope="pricing-plan-form"] .pf-price-input input { padding-right: 4.2rem; }
        [data-h-scope="pricing-plan-form"] .pf-price-suffix {
          position: absolute; right: .9rem; top: 50%; transform: translateY(-50%);
          font-size: .75rem; color: var(--muted); font-weight: 600; pointer-events: none;
        }

        [data-h-scope="pricing-plan-form"] .pf-error { color: var(--danger); font-size: .75rem; margin-top: .35rem; }

        [data-h-scope="pricing-plan-form"] .pf-feature-row { display: flex; gap: .5rem; margin-bottom: .55rem; align-items: center; }
        [data-h-scope="pricing-plan-form"] .pf-feature-row input { flex: 1; }
        [data-h-scope="pricing-plan-form"] .pf-feature-remove {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--border);
          background: var(--bg-raised); color: var(--muted); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .15s;
        }
        [data-h-scope="pricing-plan-form"] .pf-feature-remove:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-dim); }
        [data-h-scope="pricing-plan-form"] .pf-add-feature {
          display: inline-flex; align-items: center; gap: .4rem; background: none; border: 1px dashed var(--border);
          color: var(--accent); font-size: .82rem; font-weight: 600; border-radius: 8px; padding: .5rem .85rem;
          cursor: pointer; margin-top: .25rem; transition: all .15s; width: 100%; justify-content: center;
        }
        [data-h-scope="pricing-plan-form"] .pf-add-feature:hover { background: var(--accent-dim); border-color: var(--accent); }
        [data-h-scope="pricing-plan-form"] .pf-empty-features { font-size: .8rem; color: var(--muted); margin-bottom: .75rem; }

        [data-h-scope="pricing-plan-form"] .pf-toggle-row {
          display: flex; align-items: center; justify-content: space-between; padding: .85rem 0;
          border-bottom: 1px solid var(--border);
        }
        [data-h-scope="pricing-plan-form"] .pf-toggle-row:last-child { border-bottom: none; }
        [data-h-scope="pricing-plan-form"] .pf-toggle-label { font-size: .85rem; font-weight: 600; color: var(--text); }
        [data-h-scope="pricing-plan-form"] .pf-toggle-hint { font-size: .75rem; color: var(--muted); margin-top: .15rem; }
        [data-h-scope="pricing-plan-form"] .pf-switch {
          width: 42px; height: 24px; border-radius: 50px; border: none; cursor: pointer; position: relative;
          background: var(--border); transition: background .2s; flex-shrink: 0;
        }
        [data-h-scope="pricing-plan-form"] .pf-switch.on { background: var(--accent); }
        [data-h-scope="pricing-plan-form"] .pf-switch span {
          position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%;
          background: #fff; transition: transform .2s; box-shadow: 0 1px 2px rgba(0,0,0,.15);
        }
        [data-h-scope="pricing-plan-form"] .pf-switch.on span { transform: translateX(18px); }

        [data-h-scope="pricing-plan-form"] .pf-actions { display: flex; gap: .75rem; margin-top: 1.75rem; }
        [data-h-scope="pricing-plan-form"] .pf-submit {
          background: var(--accent); color: #ffffff; border: none; font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: .88rem; padding: .8rem 1.6rem; border-radius: 10px; cursor: pointer;
          box-shadow: 0 0 20px var(--accent-glow); transition: transform .15s;
        }
        [data-h-scope="pricing-plan-form"] .pf-submit:hover { transform: translateY(-1px); }
        [data-h-scope="pricing-plan-form"] .pf-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }
        [data-h-scope="pricing-plan-form"] .pf-cancel {
          background: var(--bg-raised); color: var(--text); border: 1px solid var(--border);
          font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem; padding: .8rem 1.4rem;
          border-radius: 10px; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center;
        }
        [data-h-scope="pricing-plan-form"] .pf-cancel:hover { border-color: var(--muted); }
      `}</style>

      <div className="pf-wrap">
        <Link href={backHref} className="pf-back"><IconBack /> Back to Pricing Plans</Link>
        <div className="pf-title">{mode === 'edit' ? 'Edit Pricing Plan' : 'New Pricing Plan'}</div>
        <div className="pf-sub">
          {mode === 'edit' ? 'Update plan details, pricing, and features.' : 'Set up a new plan for the pricing page.'}
        </div>

        <form onSubmit={onSubmit}>
          <div className="pf-card">
            <h3>Plan Details</h3>
            <div className="pf-field">
              <label className="pf-label">Plan Name</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                placeholder="e.g. Professional"
              />
              {errors.name && <div className="pf-error">{errors.name}</div>}
            </div>
            <div className="pf-field">
              <label className="pf-label">Description</label>
              <textarea
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                placeholder="A short line describing who this plan is for..."
              />
              {errors.description && <div className="pf-error">{errors.description}</div>}
            </div>
          </div>

          <div className="pf-card">
            <h3>Pricing</h3>
            <div className="pf-row">
              <div className="pf-field">
                <label className="pf-label">Monthly Price</label>
                <div className="pf-price-input">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.monthly_price}
                    onChange={(e) => setData('monthly_price', e.target.value)}
                    placeholder="0.00"
                  />
                  <span className="pf-price-suffix">/ mo</span>
                </div>
                {errors.monthly_price && <div className="pf-error">{errors.monthly_price}</div>}
              </div>
              <div className="pf-field">
                <label className="pf-label">Annual Price</label>
                <div className="pf-price-input">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.annual_price}
                    onChange={(e) => setData('annual_price', e.target.value)}
                    placeholder="0.00"
                  />
                  <span className="pf-price-suffix">/ yr</span>
                </div>
                {errors.annual_price && <div className="pf-error">{errors.annual_price}</div>}
              </div>
            </div>
          </div>

          <div className="pf-card">
            <h3>Features</h3>
            {data.features.length === 0 && (
              <div className="pf-empty-features">No features added yet.</div>
            )}
            {data.features.map((feature, index) => (
              <div className="pf-feature-row" key={index}>
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                />
                <button type="button" className="pf-feature-remove" onClick={() => removeFeature(index)}>
                  <IconTrash />
                </button>
              </div>
            ))}
            <button type="button" className="pf-add-feature" onClick={addFeature}>
              <IconPlus /> Add Feature
            </button>
          </div>

          <div className="pf-card">
            <h3>Visibility</h3>
            <div className="pf-toggle-row">
              <div>
                <div className="pf-toggle-label">Featured</div>
                <div className="pf-toggle-hint">Highlight this plan as the recommended choice</div>
              </div>
              <button
                type="button"
                className={`pf-switch${data.is_featured ? ' on' : ''}`}
                onClick={() => setData('is_featured', !data.is_featured)}
                aria-pressed={data.is_featured}
              >
                <span />
              </button>
            </div>
            <div className="pf-toggle-row">
              <div>
                <div className="pf-toggle-label">Active</div>
                <div className="pf-toggle-hint">Show this plan on the public pricing page</div>
              </div>
              <button
                type="button"
                className={`pf-switch${data.is_active ? ' on' : ''}`}
                onClick={() => setData('is_active', !data.is_active)}
                aria-pressed={data.is_active}
              >
                <span />
              </button>
            </div>
          </div>

          <div className="pf-actions">
            <button type="submit" className="pf-submit" disabled={processing}>
              {processing ? 'Saving...' : mode === 'edit' ? 'Save Changes' : 'Create Plan'}
            </button>
            <Link href={backHref} className="pf-cancel">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
