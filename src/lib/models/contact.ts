import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  hospitalName: string;
  email: string;
  phone: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    hospitalName: {
      type: String,
      required: [true, 'Hospital/Clinic name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  { timestamps: true }
);

export const Contact =
  (mongoose.models.Contact as mongoose.Model<IContact>) ||
  mongoose.model<IContact>('Contact', contactSchema);
