import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PlanForm from './PlanForm';

export default function Edit({ plan }) {
  const form = useForm({
    name: plan.name ?? '',
    description: plan.description ?? '',
    features: plan.features ?? [],
    is_featured: plan.is_featured ?? false,
    is_active: plan.is_active ?? true,
    monthly_price: plan.monthly_price ?? '',
    annual_price: plan.annual_price ?? '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    form.transform((data) => ({ ...data, _method: 'put' }));
    form.post(route('admin.pricing-plans.update', plan.id), { preserveScroll: true });
  }

  return (
    <>
      <Head title={`Edit ${plan.name}`} />
      <PlanForm
        mode="edit"
        form={form}
        onSubmit={handleSubmit}
        backHref={route('admin.pricing-plans.index')}
      />
    </>
  );
}

Edit.layout = (page) => (
  <AppLayout children={page} title={`Edit ${page.props.plan.name}`} />
);
