'use client';

import { useEffect, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { ContentTable } from '@/components/admin/content-table';
import { ContentForm } from '@/components/admin/content-form';
import { toast } from 'sonner';

interface Content {
  _id: string;
  title: string;
  description: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  author: string;
  createdAt: string;
}

export default function ContentPage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [filteredContents, setFilteredContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingContent, setEditingContent] = useState<Content | undefined>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const fetchContents = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/content');
      const data = await res.json();
      setContents(data);
      filterContents(data, searchTerm, filterStatus);
    } catch (error) {
      toast.error('Failed to fetch content');
    } finally {
      setLoading(false);
    }
  };

  const filterContents = (items: Content[], search: string, status: string) => {
    let filtered = items;

    if (search) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== 'all') {
      filtered = filtered.filter((item) => item.status === status);
    }

    setFilteredContents(filtered);
  };

  useEffect(() => {
    fetchContents();
  }, []);

  useEffect(() => {
    filterContents(contents, searchTerm, filterStatus);
  }, [searchTerm, filterStatus, contents]);

  const handleEdit = (content: Content) => {
    setEditingContent(content);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingContent(undefined);
  };

  const handleFormSuccess = () => {
    fetchContents();
  };

  return (
    <div className="p-8 bg-bluegray_50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-bluegray_900 font-poppins">Content Management</h1>
          <p className="text-bluegray_500 mt-2 font-poppins">Create and manage your content</p>
        </div>
        <button
          onClick={() => {
            setEditingContent(undefined);
            setShowForm(true);
          }}
          className="flex items-center gap-2 bg-teal_400 text-white px-4 py-2 rounded-lg hover:bg-teal_700 transition font-poppins font-semibold"
        >
          <Plus size={20} />
          Create Content
        </button>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-bluegray_500" size={20} />
            <input
              type="text"
              placeholder="Search content..."
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
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      <div className="bg-white_A700 rounded-lg shadow-bs2">
        {loading ? (
          <div className="p-8 text-center">
            <p className="text-bluegray_500 font-poppins">Loading content...</p>
          </div>
        ) : (
          <ContentTable
            contents={filteredContents}
            onEdit={handleEdit}
            onDelete={() => fetchContents()}
            onRefresh={fetchContents}
          />
        )}
      </div>

      {showForm && (
        <ContentForm
          content={editingContent}
          onClose={handleCloseForm}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
}
