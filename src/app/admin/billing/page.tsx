'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface Invoice {
  _id: string;
  invoiceNumber: string;
  customerId: string;
  amount: number;
  tax: number;
  total: number;
  status: 'paid' | 'pending' | 'overdue';
  issueDate: string;
  dueDate: string;
}

export default function BillingPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/invoices');
      const data = await res.json();
      setInvoices(data);
    } catch (error) {
      toast.error('Failed to fetch invoices');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'invoiceNumber', label: 'Invoice #' },
    {
      key: 'amount',
      label: 'Amount',
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      key: 'tax',
      label: 'Tax',
      render: (tax: number) => `$${tax.toFixed(2)}`,
    },
    {
      key: 'total',
      label: 'Total',
      render: (total: number) => <span className="font-semibold">${total.toFixed(2)}</span>,
    },
    {
      key: 'status',
      label: 'Status',
      render: (status: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'paid'
              ? 'bg-teal_300 text-teal_700'
              : status === 'pending'
              ? 'bg-amber_700 bg-opacity-20 text-amber_700'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      key: 'dueDate',
      label: 'Due Date',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Billing & Invoices</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage customer invoices and payments</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          Create Invoice
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={invoices} loading={loading} />
      </div>
    </div>
  );
}
