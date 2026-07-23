import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import PlanForm from './PlanForm';

export default function Create() {
  const form = useForm({
    name: '',
    description: '',
    features: [],
    is_featured: false,
    is_active: true,
    monthly_price: '',
    annual_price: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    form.post(route('admin.pricing-plans.store'));
  }

  return (
    <>
      <Head title="New Pricing Plan" />
      <PlanForm
        mode="create"
        form={form}
        onSubmit={handleSubmit}
        backHref={route('admin.pricing-plans.index')}
      />
    </>
  );
}

Create.layout = (page) => <AppLayout children={page} title="New Pricing Plan" />;
