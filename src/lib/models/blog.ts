import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Hospital Tips' | 'Health Tech' | 'Pharmacy' | 'Lab' | 'Billing';
  imageUrl: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: [true, 'Excerpt is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    category: {
      type: String,
      enum: ['Hospital Tips', 'Health Tech', 'Pharmacy', 'Lab', 'Billing'],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: 'Vaidhya Sewa Team',
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Blog =
  (mongoose.models.Blog as mongoose.Model<IBlog>) ||
  mongoose.model<IBlog>('Blog', blogSchema);
