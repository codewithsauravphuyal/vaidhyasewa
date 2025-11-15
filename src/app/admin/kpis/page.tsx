'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface KPI {
  _id: string;
  metric: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
}

export default function KPIsPage() {
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKPIs();
  }, []);

  const fetchKPIs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/kpis');
      const data = await res.json();
      setKpis(data);
    } catch (error) {
      toast.error('Failed to fetch KPIs');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'metric', label: 'Metric' },
    {
      key: 'value',
      label: 'Current Value',
      render: (value: number) => <span className="font-semibold">{value}</span>,
    },
    {
      key: 'target',
      label: 'Target',
      render: (value: number) => <span>{value}</span>,
    },
    {
      key: 'trend',
      label: 'Trend',
      render: (trend: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            trend === 'up'
              ? 'bg-green-100 text-green-800'
              : trend === 'down'
              ? 'bg-red-100 text-red-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {trend}
        </span>
      ),
    },
    { key: 'period', label: 'Period' },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">KPIs</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Monitor key performance indicators</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          Add KPI
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={kpis} loading={loading} />
      </div>
    </div>
  );
}
