'use client';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { DataTable } from '@/components/admin/data-table';
import { toast } from 'sonner';

interface TeamMember {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'support' | 'developer';
  department: string;
  status: 'active' | 'inactive';
}

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/team');
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      toast.error('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {
      key: 'role',
      label: 'Role',
      render: (role: string) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue_A400 bg-opacity-20 text-blue_A400">
          {role}
        </span>
      ),
    },
    { key: 'department', label: 'Department' },
    {
      key: 'status',
      label: 'Status',
      render: (status: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'active' ? 'bg-teal_300 text-teal_700' : 'bg-gray-100 text-gray-800'
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
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Team & Users</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage SaaS staff members</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          Add Member
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        <DataTable columns={columns} data={members} loading={loading} />
      </div>
    </div>
  );
}
