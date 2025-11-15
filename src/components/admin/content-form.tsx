'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface Content {
  _id?: string;
  title: string;
  description: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  author: string;
  image?: string;
}

interface ContentFormProps {
  content?: Content;
  onClose: () => void;
  onSuccess: () => void;
}

export function ContentForm({ content, onClose, onSuccess }: ContentFormProps) {
  const [formData, setFormData] = useState<Content>({
    title: '',
    description: '',
    category: '',
    status: 'draft',
    author: '',
    image: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (content) {
      setFormData(content);
    }
  }, [content]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = content?._id ? `/api/admin/content/${content._id}` : '/api/admin/content';
      const method = content?._id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(content?._id ? 'Content updated successfully' : 'Content created successfully');
        onSuccess();
        onClose();
      } else {
        toast.error('Failed to save content');
      }
    } catch (error) {
      toast.error('Error saving content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white_A700 rounded-lg shadow-bs3 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-bluegray_300">
          <h2 className="text-xl font-bold text-bluegray_900 font-poppins">
            {content?._id ? 'Edit Content' : 'Create New Content'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-bluegray_50 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
              placeholder="Enter description"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
                placeholder="e.g., Blog, News"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
                placeholder="Author name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-bluegray_900 mb-1 font-poppins">Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-bluegray_300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal_400 font-poppins"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-teal_400 text-white py-2 rounded-lg hover:bg-teal_700 transition disabled:opacity-50 font-poppins font-semibold"
            >
              {loading ? 'Saving...' : 'Save Content'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-bluegray_100 text-bluegray_900 py-2 rounded-lg hover:bg-bluegray_200 transition font-poppins font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
