'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface Webhook {
  _id: string;
  name: string;
  url: string;
  events: string[];
  active: boolean;
  createdAt: string;
}

export default function WebhooksPage() {
  const [webhooks, setWebhooks] = useState<Webhook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWebhooks();
  }, []);

  const fetchWebhooks = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/webhooks');
      const data = await res.json();
      setWebhooks(data);
    } catch (error) {
      toast.error('Failed to fetch webhooks');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'name', label: 'Webhook Name' },
    { key: 'url', label: 'URL' },
    {
      key: 'events',
      label: 'Events',
      render: (events: string[]) => (
        <div className="flex flex-wrap gap-1">
          {events.slice(0, 2).map((event, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded text-xs font-medium bg-blue_A400 bg-opacity-20 text-blue_A400"
            >
              {event}
            </span>
          ))}
          {events.length > 2 && (
            <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
              +{events.length - 2}
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'active',
      label: 'Status',
      render: (active: boolean) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            active ? 'bg-teal_300 text-teal_700' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {active ? 'Active' : 'Inactive'}
        </span>
      ),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Webhooks</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage webhook endpoints and events</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          New Webhook
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={webhooks} loading={loading} />
      </div>
    </div>
  );
}
