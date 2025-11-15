'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface SupportTicket {
  _id: string;
  ticketNumber: string;
  subject: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  assignedTo?: string;
  createdAt: string;
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/support');
      const data = await res.json();
      setTickets(data);
    } catch (error) {
      toast.error('Failed to fetch support tickets');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'ticketNumber', label: 'Ticket #' },
    { key: 'subject', label: 'Subject' },
    {
      key: 'priority',
      label: 'Priority',
      render: (priority: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            priority === 'urgent'
              ? 'bg-red-100 text-red-800'
              : priority === 'high'
              ? 'bg-amber_700 bg-opacity-20 text-amber_700'
              : priority === 'medium'
              ? 'bg-blue_A400 bg-opacity-20 text-blue_A400'
              : 'bg-teal_300 text-teal_700'
          }`}
        >
          {priority}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (status: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'resolved'
              ? 'bg-teal_300 text-teal_700'
              : status === 'in-progress'
              ? 'bg-blue_A400 bg-opacity-20 text-blue_A400'
              : status === 'closed'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-amber_700 bg-opacity-20 text-amber_700'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      key: 'assignedTo',
      label: 'Assigned To',
      render: (assigned: string) => assigned || 'Unassigned',
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Support Tickets</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage customer support requests</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          New Ticket
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={tickets} loading={loading} />
      </div>
    </div>
  );
}
