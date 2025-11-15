'use client';

import { useEffect, useState } from 'react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface AuditLog {
  _id: string;
  action: string;
  actor: string;
  resource: string;
  resourceId: string;
  timestamp: string;
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/audit-logs');
      const data = await res.json();
      setLogs(data);
    } catch (error) {
      toast.error('Failed to fetch audit logs');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: 'action',
      label: 'Action',
      render: (action: string) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue_A400 bg-opacity-20 text-blue_A400">
          {action}
        </span>
      ),
    },
    { key: 'actor', label: 'Actor' },
    { key: 'resource', label: 'Resource' },
    { key: 'resourceId', label: 'Resource ID' },
    {
      key: 'timestamp',
      label: 'Timestamp',
      render: (date: string) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Audit Logs</h1>
        <p className="text-bluegray_500 mt-2 font-poppins">Track all system activities and changes</p>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={logs} loading={loading} />
      </div>
    </div>
  );
}
