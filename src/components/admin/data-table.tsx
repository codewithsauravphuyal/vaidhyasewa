'use client';

import { Edit2, Trash2 } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onEdit?: (row: any) => void;
  onDelete?: (id: string) => void;
  loading?: boolean;
}

export function DataTable({ columns, data, onEdit, onDelete, loading }: DataTableProps) {
  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-bluegray_500 font-poppins">Loading data...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-bluegray_500 font-poppins">No data found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-bluegray_300 bg-bluegray_50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins text-sm"
              >
                {col.label}
              </th>
            ))}
            {(onEdit || onDelete) && (
              <th className="text-left py-3 px-4 font-semibold text-bluegray_900 font-poppins text-sm">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={row._id || idx} className="border-b border-bluegray_100 hover:bg-bluegray_50">
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-4 text-bluegray_600 font-poppins text-sm">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="p-2 text-teal_400 hover:bg-teal_400 hover:bg-opacity-10 rounded-lg transition"
                      >
                        <Edit2 size={18} />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(row._id)}
                        className="p-2 text-amber_700 hover:bg-amber_700 hover:bg-opacity-10 rounded-lg transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
