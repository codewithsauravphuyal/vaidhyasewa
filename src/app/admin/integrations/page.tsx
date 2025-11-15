'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface Integration {
  _id: string;
  name: string;
  type: 'cloudinary' | 'payment' | 'smtp' | 'sms' | 'other';
  status: 'active' | 'inactive' | 'error';
  lastSyncedAt?: string;
  createdAt: string;
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIntegrations();
  }, []);

  const fetchIntegrations = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/integrations');
      const data = await res.json();
      setIntegrations(data);
    } catch (error) {
      toast.error('Failed to fetch integrations');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'name', label: 'Integration Name' },
    {
      key: 'type',
      label: 'Type',
      render: (type: string) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue_A400 bg-opacity-20 text-blue_A400">
          {type}
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
              : status === 'error'
              ? 'bg-red-100 text-red-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      key: 'lastSyncedAt',
      label: 'Last Synced',
      render: (date: string) => (date ? new Date(date).toLocaleDateString() : 'Never'),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Integrations</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage third-party integrations</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          Add Integration
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={integrations} loading={loading} />
      </div>
    </div>
  );
}
