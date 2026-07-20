import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

/* ------------------------------------------------------------------ */
/*  Status badge                                                      */
/* ------------------------------------------------------------------ */

const STATUS_BADGE = {
  approved: 'bg-success-subtle text-success-emphasis border border-success-subtle',
  rejected: 'bg-danger-subtle text-danger-emphasis border border-danger-subtle',
  pending: 'bg-warning-subtle text-warning-emphasis border border-warning-subtle',
};

function StatusBadge({ status }) {
  const cls = STATUS_BADGE[status] ?? STATUS_BADGE.pending;
  return (
    <span className={`badge rounded-pill fw-medium px-3 py-2 text-capitalize ${cls}`}>
      <span
        className="d-inline-block rounded-circle me-1"
        style={{ width: 6, height: 6, backgroundColor: 'currentColor', verticalAlign: 'middle' }}
      />
      {status}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Bootstrap modal shell (self-controlled, no bootstrap.js JS needed) */
/* ------------------------------------------------------------------ */

function ModalShell({ open, onClose, title, headerClass, children, size = 'modal-lg' }) {
  if (!open) return null;
  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(15, 23, 42, 0.35)' }}>
      <div className={`modal-dialog modal-dialog-centered ${size}`}>
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div className={`modal-header border-0 px-4 py-3 ${headerClass}`}>
            <h5 className="modal-title fw-semibold mb-0">{title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Row actions dropdown                                              */
/* ------------------------------------------------------------------ */

function ActionsMenu({ onManage, onStatus, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown position-relative">
      <button
        type="button"
        className="btn btn-outline-secondary btn-sm dropdown-toggle"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      >
        Actions
      </button>
      <ul
        className={`dropdown-menu dropdown-menu-end shadow-sm border-0 ${open ? 'show' : ''}`}
        style={{ position: 'absolute', right: 0 }}
      >
        <li>
          <button type="button" className="dropdown-item" onMouseDown={onManage}>
            Manage
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item" onMouseDown={onStatus}>
            Update status
          </button>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button type="button" className="dropdown-item text-danger" onMouseDown={onDelete}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Manage (edit) modal                                               */
/* ------------------------------------------------------------------ */

function ManageModal({ seller, open, onClose }) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    company_name: seller?.company_name ?? '',
    email: seller?.email ?? '',
    phone: seller?.phone ?? '',
    address: seller?.address ?? '',
    description: seller?.description ?? '',
    status: seller?.status ?? 'pending',
  });

  if (!seller) return null;

  const submit = (e) => {
    e.preventDefault();
    patch(route('admin.sellers.update', seller.id), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title={`Manage seller #${seller.id}`}
      headerClass="bg-primary bg-opacity-10"
    >
      <form onSubmit={submit}>
        <div className="modal-body p-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Company name</label>
              <input
                type="text"
                className={`form-control ${errors.company_name ? 'is-invalid' : ''}`}
                value={data.company_name}
                onChange={(e) => setData('company_name', e.target.value)}
              />
              {errors.company_name && <div className="invalid-feedback">{errors.company_name}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Phone</label>
              <input
                type="text"
                className="form-control"
                value={data.phone}
                onChange={(e) => setData('phone', e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold small text-secondary">Address</label>
              <input
                type="text"
                className="form-control"
                value={data.address}
                onChange={(e) => setData('address', e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold small text-secondary">Description</label>
              <textarea
                rows="3"
                className="form-control"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold small text-secondary">Status</label>
              <select
                className="form-select"
                value={data.status}
                onChange={(e) => setData('status', e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-success" disabled={processing}>
            {processing ? 'Saving…' : 'Update seller'}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Status modal                                                      */
/* ------------------------------------------------------------------ */

function StatusModal({ seller, open, onClose }) {
  const { data, setData, patch, processing, reset } = useForm({
    status: seller?.status ?? 'pending',
  });

  if (!seller) return null;

  const submit = (e) => {
    e.preventDefault();
    patch(route('admin.sellers.updateStatus', seller.id), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title="Update seller status"
      headerClass="bg-warning bg-opacity-25"
      size="modal-md"
    >
      <form onSubmit={submit}>
        <div className="modal-body p-4">
          <label className="form-label fw-semibold small text-secondary">Status</label>
          <select
            className="form-select"
            value={data.status}
            onChange={(e) => setData('status', e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <div className="alert alert-warning mt-3 mb-0 py-2 small">
            Approving a seller automatically creates a user account and emails the login credentials.
          </div>
        </div>
        <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
          <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={processing}>
            {processing ? 'Updating…' : 'Update status'}
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Delete confirm modal                                              */
/* ------------------------------------------------------------------ */

function DeleteModal({ seller, open, onClose }) {
  if (!seller) return null;

  const confirmDelete = () => {
    router.delete(route('admin.sellers.destroy', seller.id), {
      preserveScroll: true,
      onSuccess: onClose,
    });
  };

  return (
    <ModalShell open={open} onClose={onClose} title="Delete seller" headerClass="bg-danger bg-opacity-10" size="modal-md">
      <div className="modal-body p-4">
        <p className="mb-0 text-secondary">
          Are you sure you want to delete <span className="fw-semibold text-dark">{seller.company_name}</span>?
          This action can&apos;t be undone.
        </p>
      </div>
      <div className="modal-footer border-0 bg-light d-flex justify-content-between px-4 py-3">
        <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
          Cancel
        </button>
        <button type="button" className="btn btn-danger" onClick={confirmDelete}>
          Delete seller
        </button>
      </div>
    </ModalShell>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Index({ sellers, flash }) {
  const [manageTarget, setManageTarget] = useState(null);
  const [statusTarget, setStatusTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  return (
    <AppLayout>
      <Head title="Sellers" />

      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="mb-1 fw-semibold text-dark">Seller companies</h3>
            <p className="text-secondary mb-0 small">
              {sellers.length} seller{sellers.length === 1 ? '' : 's'} registered on the platform
            </p>
          </div>
        </div>

        {flash?.success && (
          <div className="alert alert-success border-0 shadow-sm">
            {flash.success}
          </div>
        )}

        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead>
                  <tr className="text-secondary small text-uppercase border-bottom bg-light">
                    <th className="px-4 py-3 fw-semibold">ID</th>
                    <th className="px-4 py-3 fw-semibold">Company</th>
                    <th className="px-4 py-3 fw-semibold">Contact</th>
                    <th className="px-4 py-3 fw-semibold">Description</th>
                    <th className="px-4 py-3 fw-semibold">Status</th>
                    <th className="px-4 py-3 fw-semibold text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sellers.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center text-secondary py-5">
                        No sellers registered yet.
                      </td>
                    </tr>
                  )}

                  {sellers.map((seller) => (
                    <tr key={seller.id}>
                      <td className="px-4 py-3 text-secondary">#{seller.id}</td>
                      <td className="px-4 py-3">
                        <div className="fw-semibold text-dark">{seller.company_name}</div>
                        <div className="small text-secondary">{seller.address}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-dark">{seller.email}</div>
                        <div className="small text-secondary">{seller.phone}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="text-secondary small d-inline-block text-truncate"
                          style={{ maxWidth: 220 }}
                          title={seller.description}
                        >
                          {seller.description}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={seller.status} />
                      </td>
                      <td className="px-4 py-3 text-end">
                        <ActionsMenu
                          onManage={() => setManageTarget(seller)}
                          onStatus={() => setStatusTarget(seller)}
                          onDelete={() => setDeleteTarget(seller)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ManageModal seller={manageTarget} open={!!manageTarget} onClose={() => setManageTarget(null)} />
      <StatusModal seller={statusTarget} open={!!statusTarget} onClose={() => setStatusTarget(null)} />
      <DeleteModal seller={deleteTarget} open={!!deleteTarget} onClose={() => setDeleteTarget(null)} />
    </AppLayout>
  );
}
