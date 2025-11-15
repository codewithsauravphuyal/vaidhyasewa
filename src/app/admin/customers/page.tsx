'use client';

import { useEffect, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface Customer {
  _id: string;
  name: string;
  email: string;
  type: 'hospital' | 'clinic';
  status: 'active' | 'inactive' | 'trial';
  city: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    filterCustomers();
  }, [searchTerm, filterStatus, customers]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/customers');
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      toast.error('Failed to fetch customers');
    } finally {
      setLoading(false);
    }
  };

  const filterCustomers = () => {
    let filtered = customers;

    if (searchTerm) {
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter((c) => c.status === filterStatus);
    }

    setFilteredCustomers(filtered);
  };

  const columns = [
    { key: 'name', label: 'Hospital / Clinic Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'type',
      label: 'Type',
      render: (type: string) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue_A400 bg-opacity-20 text-blue_A400">
          {type}
        </span>
      ),
    },
    { key: 'city', label: 'City' },
    {
      key: 'status',
      label: 'Status',
      render: (status: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'active'
              ? 'bg-teal_300 text-teal_700'
              : status === 'trial'
              ? 'bg-amber_700 bg-opacity-20 text-amber_700'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </span>
      ),
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Customers</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage hospitals and clinics</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          Add Customer
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-bluegray_500" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="trial">Trial</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={filteredCustomers} loading={loading} />
      </div>
    </div>
  );
}
