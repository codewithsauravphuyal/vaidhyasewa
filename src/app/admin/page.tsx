'use client';

import { useEffect, useState } from 'react';
import { BarChart3, FileText, Users, TrendingUp } from 'lucide-react';

interface Stats {
  totalContent: number;
  publishedContent: number;
  draftContent: number;
  totalUsers: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalContent: 0,
    publishedContent: 0,
    draftContent: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/content');
        const contents = await res.json();

        setStats({
          totalContent: contents.length,
          publishedContent: contents.filter((c: any) => c.status === 'published').length,
          draftContent: contents.filter((c: any) => c.status === 'draft').length,
          totalUsers: 0,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Content',
      value: stats.totalContent,
      icon: FileText,
      color: 'bg-teal_300 text-teal_700',
    },
    {
      title: 'Published',
      value: stats.publishedContent,
      icon: TrendingUp,
      color: 'bg-blue_A400 bg-opacity-20 text-blue_A400',
    },
    {
      title: 'Drafts',
      value: stats.draftContent,
      icon: BarChart3,
      color: 'bg-amber_700 bg-opacity-20 text-amber_700',
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'bg-teal_400 bg-opacity-20 text-teal_400',
    },
  ];

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Dashboard</h1>
        <p className="text-bluegray_500 mt-2 font-poppins">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white_A700 rounded-lg shadow-bs2 p-6 hover:shadow-bs3 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-bluegray_500 text-sm font-medium font-poppins">{card.title}</p>
                  <p className="text-3xl font-bold text-bluegray_900 mt-2 font-poppins">{card.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${card.color}`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-white_A700 rounded-lg shadow-bs2 p-6">
        <h2 className="text-xl font-bold text-bluegray_900 mb-4 font-poppins">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/content"
            className="p-4 border-2 border-bluegray_50 rounded-lg hover:border-teal_400 hover:bg-teal_400 hover:bg-opacity-5 transition font-poppins"
          >
            <h3 className="font-semibold text-bluegray_900">Manage Content</h3>
            <p className="text-sm text-bluegray_500 mt-1">Create, edit, and publish content</p>
          </a>
          <a
            href="/admin/users"
            className="p-4 border-2 border-bluegray_50 rounded-lg hover:border-teal_400 hover:bg-teal_400 hover:bg-opacity-5 transition font-poppins"
          >
            <h3 className="font-semibold text-bluegray_900">Manage Users</h3>
            <p className="text-sm text-bluegray_500 mt-1">View and manage admin users</p>
          </a>
          <a
            href="/admin/settings"
            className="p-4 border-2 border-bluegray_50 rounded-lg hover:border-teal_400 hover:bg-teal_400 hover:bg-opacity-5 transition font-poppins"
          >
            <h3 className="font-semibold text-bluegray_900">Settings</h3>
            <p className="text-sm text-bluegray_500 mt-1">Configure system settings</p>
          </a>
        </div>
      </div>
    </div>
  );
}
