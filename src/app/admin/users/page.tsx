'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface AdminUser {
  _id: string;
  email: string;
  name: string;
  role: 'admin' | 'moderator' | 'viewer';
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([
    {
      _id: '1',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date().toISOString(),
    },
  ]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-amber_700 bg-opacity-20 text-amber_700';
      case 'moderator':
        return 'bg-blue_A400 bg-opacity-20 text-blue_A400';
      case 'viewer':
        return 'bg-teal_300 text-teal_700';
      default:
        return 'bg-bluegray_100 text-bluegray_700';
    }
  };

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">User Management</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Manage admin users and their roles</p>
        </div>
        <button className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold">
          <Plus size={20} />
          Add User
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-bluegray_300 bg-bluegray_50">
              <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Name</th>
              <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Email</th>
              <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Role</th>
              <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Joined</th>
              <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b border-bluegray_100 hover:bg-bluegray_50">
                <td className="py-3 px-4 font-medium text-bluegray_900 font-poppins">{user.name}</td>
                <td className="py-3 px-4 text-bluegray_600 font-poppins">{user.email}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-poppins ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4 text-bluegray_600 text-sm font-poppins">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-teal_400 hover:bg-teal_400 hover:bg-opacity-10 rounded-lg transition">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-amber_700 hover:bg-amber_700 hover:bg-opacity-10 rounded-lg transition">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
