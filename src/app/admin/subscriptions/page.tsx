'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface Subscription {
  _id: string;
  customerId: string;
  planName: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'expired';
  startDate: string;
  endDate: string;
}

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/subscriptions');
      const data = await res.json();
      setSubscriptions(data);
    } catch (error) {
      toast.error('Failed to fetch subscriptions');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'planName', label: 'Plan Name' },
    {
      key: 'price',
      label: 'Price',
      render: (price: number) => `$${price}/month`,
    },
    {
      key: 'billingCycle',
      label: 'Billing Cycle',
      render: (cycle: string) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue_A400 bg-opacity-20 text-blue_A400">
          {cycle}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (status: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'active'
              ? 'bg-teal_300 text-teal_700'
              : status === 'cancelled'
              ? 'bg-red-100 text-red-800'
              : 'bg-amber_700 bg-opacity-20 text-amber_700'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      key: 'startDate',
      label: 'Start Date',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Subscriptions & Plans</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage customer subscriptions</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          New Subscription
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={subscriptions} loading={loading} />
      </div>
    </div>
  );
}
