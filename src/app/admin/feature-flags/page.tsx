'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface FeatureFlag {
  _id: string;
  name: string;
  description: string;
  enabled: boolean;
  rolloutPercentage: number;
  createdAt: string;
}

export default function FeatureFlagsPage() {
  const [flags, setFlags] = useState<FeatureFlag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlags();
  }, []);

  const fetchFlags = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/feature-flags');
      const data = await res.json();
      setFlags(data);
    } catch (error) {
      toast.error('Failed to fetch feature flags');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'name', label: 'Feature Name' },
    { key: 'description', label: 'Description' },
    {
      key: 'enabled',
      label: 'Status',
      render: (enabled: boolean) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            enabled ? 'bg-teal_300 text-teal_700' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {enabled ? 'Enabled' : 'Disabled'}
        </span>
      ),
    },
    {
      key: 'rolloutPercentage',
      label: 'Rollout %',
      render: (percentage: number) => (
        <div className="flex items-center gap-2">
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal_400 h-2 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-sm font-semibold">{percentage}%</span>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Feature Flags</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Control feature rollouts and experiments</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          New Flag
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={flags} loading={loading} />
      </div>
    </div>
  );
}
