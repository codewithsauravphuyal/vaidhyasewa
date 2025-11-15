'use client';

import { useState } from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';
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

interface ContentTableProps {
  contents: Content[];
  onEdit: (content: Content) => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
}

export function ContentTable({ contents, onEdit, onDelete, onRefresh }: ContentTableProps) {
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this content?')) return;

    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/content/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Content deleted successfully');
        onRefresh();
      } else {
        toast.error('Failed to delete content');
      }
    } catch (error) {
      toast.error('Error deleting content');
    } finally {
      setDeleting(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-teal_300 text-teal_700';
      case 'draft':
        return 'bg-amber_700 bg-opacity-20 text-amber_700';
      case 'archived':
        return 'bg-blue_A400 bg-opacity-20 text-blue_A400';
      default:
        return 'bg-bluegray_100 text-bluegray_700';
    }
  };

  if (contents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-bluegray_500 font-poppins">No content found. Create your first content to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-bluegray_300 bg-bluegray_50">
            <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Title</th>
            <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Category</th>
            <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Author</th>
            <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Created</th>
            <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr key={content._id} className="border-b border-bluegray_100 hover:bg-bluegray_50">
              <td className="py-3 px-4">
                <p className="font-medium text-bluegray_900 font-poppins">{content.title}</p>
                <p className="text-sm text-bluegray_500 truncate font-poppins">{content.description}</p>
              </td>
              <td className="py-3 px-4 text-bluegray_600 font-poppins">{content.category}</td>
              <td className="py-3 px-4 text-bluegray_600 font-poppins">{content.author}</td>
              <td className="py-3 px-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium font-poppins ${getStatusColor(content.status)}`}>
                  {content.status}
                </span>
              </td>
              <td className="py-3 px-4 text-bluegray_600 text-sm font-poppins">
                {new Date(content.createdAt).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(content)}
                    className="p-2 text-teal_400 hover:bg-teal_400 hover:bg-opacity-10 rounded-lg transition"
                    title="Edit"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(content._id)}
                    disabled={deleting === content._id}
                    className="p-2 text-amber_700 hover:bg-amber_700 hover:bg-opacity-10 rounded-lg transition disabled:opacity-50"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
