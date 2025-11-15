'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    siteName: 'Vaidhya Sewa',
    siteDescription: 'Healthcare Management System',
    contactEmail: 'contact@vaidhyasewa.com',
    maintenanceMode: false,
    enableComments: true,
    itemsPerPage: 10,
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Simulate saving settings
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Settings saved successfully');
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Settings</h1>
        <p className="text-bluegray_500 mt-2 font-poppins">Configure system settings and preferences</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="bg-white_A700 rounded-lg shadow-bs2 p-6">
          <h2 className="text-xl font-bold text-bluegray_900 mb-4 font-poppins">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Site Name</label>
              <input
                type="text"
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Site Description</label>
              <textarea
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                value={settings.contactEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
              />
            </div>
          </div>
        </div>

        <div className="bg-white_A700 rounded-lg shadow-bs2 p-6">
          <h2 className="text-xl font-bold text-bluegray_900 mb-4 font-poppins">Feature Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-bluegray_900 font-poppins">Maintenance Mode</label>
                <p className="text-sm text-bluegray_500 mt-1 font-poppins">Disable site access for maintenance</p>
              </div>
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleChange}
                className="w-5 h-5 text-teal_400 rounded focus:ring-2 focus:ring-teal_400"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-bluegray_900 font-poppins">Enable Comments</label>
                <p className="text-sm text-bluegray_500 mt-1 font-poppins">Allow users to comment on content</p>
              </div>
              <input
                type="checkbox"
                name="enableComments"
                checked={settings.enableComments}
                onChange={handleChange}
                className="w-5 h-5 text-teal_400 rounded focus:ring-2 focus:ring-teal_400"
              />
            </div>
          </div>
        </div>

        <div className="bg-white_A700 rounded-lg shadow-bs2 p-6">
          <h2 className="text-xl font-bold text-bluegray_900 mb-4 font-poppins">Display Settings</h2>
          <div>
            <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Items Per Page</label>
            <select
              name="itemsPerPage"
              value={settings.itemsPerPage}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-teal_400 text-white px-6 py-2 rounded-lg hover:bg-teal_700 transition disabled:opacity-50 font-poppins font-semibold"
        >
          <Save size={20} />
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}
