'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  BarChart3,
  Building2,
  CreditCard,
  TrendingUp,
  Zap,
  MessageSquare,
  BookOpen,
  Flag,
  Plug,
  Shield,
  Database,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

export function AdminSidebar() {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['overview']);

  const toggleGroup = (group: string) => {
    setExpandedGroups((prev) =>
      prev.includes(group)
        ? prev.filter((g) => g !== group)
        : [...prev, group]
    );
  };

  const menuGroups = [
    {
      group: 'overview',
      label: 'Overview',
      items: [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/kpis', label: 'KPIs', icon: BarChart3 },
      ],
    },
    {
      group: 'customers',
      label: 'Customers',
      items: [
        { href: '/admin/customers', label: 'Hospitals / Clinics', icon: Building2 },
      ],
    },
    {
      group: 'subscriptions',
      label: 'Subscriptions & Billing',
      items: [
        { href: '/admin/subscriptions', label: 'Subscriptions & Plans', icon: CreditCard },
        { href: '/admin/billing', label: 'Billing & Invoices', icon: FileText },
        { href: '/admin/usage', label: 'Usage & Analytics', icon: TrendingUp },
      ],
    },
    {
      group: 'demo',
      label: 'Demo & Support',
      items: [
        { href: '/admin/demo-accounts', label: 'Demo Accounts', icon: Zap },
        { href: '/admin/support', label: 'Support (Tickets & Chat)', icon: MessageSquare },
      ],
    },
    {
      group: 'content',
      label: 'Content',
      items: [
        { href: '/admin/content', label: 'Blog', icon: FileText },
        { href: '/admin/case-studies', label: 'Case Studies', icon: BookOpen },
        { href: '/admin/screenshots', label: 'Screenshots', icon: FileText },
        { href: '/admin/downloads', label: 'Downloads', icon: FileText },
      ],
    },
    {
      group: 'product',
      label: 'Product',
      items: [
        { href: '/admin/feature-flags', label: 'Feature Flags', icon: Flag },
        { href: '/admin/roadmap', label: 'Roadmap', icon: TrendingUp },
      ],
    },
    {
      group: 'integrations',
      label: 'Integrations',
      items: [
        { href: '/admin/integrations', label: 'All Integrations', icon: Plug },
        { href: '/admin/integrations/cloudinary', label: 'Cloudinary', icon: Plug },
        { href: '/admin/integrations/payments', label: 'Payment Gateways', icon: CreditCard },
        { href: '/admin/integrations/smtp', label: 'SMTP', icon: FileText },
        { href: '/admin/integrations/sms', label: 'SMS', icon: MessageSquare },
      ],
    },
    {
      group: 'team',
      label: 'Team & Users',
      items: [
        { href: '/admin/team', label: 'SaaS Staff', icon: Users },
      ],
    },
    {
      group: 'settings',
      label: 'Settings & Security',
      items: [
        { href: '/admin/settings', label: 'Branding', icon: Settings },
        { href: '/admin/email-templates', label: 'Email Templates', icon: FileText },
        { href: '/admin/security', label: 'Security', icon: Shield },
        { href: '/admin/webhooks', label: 'Webhooks', icon: Plug },
      ],
    },
    {
      group: 'system',
      label: 'System',
      items: [
        { href: '/admin/audit-logs', label: 'Audit Logs', icon: FileText },
        { href: '/admin/backups', label: 'Backups & Environments', icon: Database },
        { href: '/admin/deployments', label: 'DevOps / Deployments', icon: BarChart3 },
      ],
    },
    {
      group: 'help',
      label: 'Help',
      items: [
        { href: '/admin/help', label: 'Help & Docs', icon: HelpCircle },
      ],
    },
  ];

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/content', label: 'Content', icon: FileText },
    { href: '/admin/users', label: 'Users', icon: Users },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-teal_700 text-white min-h-screen p-6 shadow-lg flex flex-col overflow-y-auto">
      <div className="mb-6 pb-4 border-b border-teal_400">
        <h1 className="text-2xl font-bold font-poppins">Vaidhya Sewa</h1>
        <p className="text-teal_400 text-sm font-poppins">Admin Dashboard</p>
      </div>

      <nav className="flex-1 space-y-1 mb-8">
        {menuGroups.map((group) => {
          const isExpanded = expandedGroups.includes(group.group);
          const hasActiveItem = group.items.some((item) => pathname === item.href);

          return (
            <div key={group.group}>
              <button
                onClick={() => toggleGroup(group.group)}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors font-poppins text-sm font-semibold ${
                  hasActiveItem
                    ? 'bg-white_A700 text-teal_700'
                    : 'text-white hover:bg-white_A700 hover:text-teal_700'
                }`}
              >
                <span>{group.label}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>

              {isExpanded && (
                <div className="ml-2 mt-1 space-y-1 border-l border-teal_400 pl-2">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors font-poppins ${
                          isActive
                            ? 'bg-white_A700 text-teal_700 font-semibold'
                            : 'text-white hover:bg-white_A700 hover:text-teal_700'
                        }`}
                      >
                        <Icon size={16} />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <button
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="flex items-center gap-3 px-4 py-2 rounded-lg text-white hover:bg-teal_400 hover:text-teal_700 transition-colors w-full font-poppins border-t border-teal_400 pt-4 mt-4"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
