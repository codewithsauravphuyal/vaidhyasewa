import mongoose, { Schema, Document } from 'mongoose';

export interface IAdminUser extends Document {
  email: string;
  name: string;
  role: 'admin' | 'moderator' | 'viewer';
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'moderator', 'viewer'],
      default: 'viewer',
    },
  },
  { timestamps: true }
);

export const AdminUser = mongoose.models.AdminUser || mongoose.model<IAdminUser>('AdminUser', AdminUserSchema);

export interface IContent extends Document {
  title: string;
  description: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  author: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContentSchema = new Schema<IContent>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    author: {
      type: String,
      required: true,
    },
    image: String,
  },
  { timestamps: true }
);

export const Content = mongoose.models.Content || mongoose.model<IContent>('Content', ContentSchema);
