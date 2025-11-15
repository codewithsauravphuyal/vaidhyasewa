import mongoose, { Schema, Document } from 'mongoose';

// KPI Schema
export interface IKPI extends Document {
  metric: string;
  value: number;
  target: number;
  trend: 'up' | 'down' | 'stable';
  period: string;
  updatedAt: Date;
}

const KPISchema = new Schema<IKPI>(
  {
    metric: { type: String, required: true },
    value: { type: Number, required: true },
    target: { type: Number, required: true },
    trend: { type: String, enum: ['up', 'down', 'stable'], default: 'stable' },
    period: { type: String, required: true },
  },
  { timestamps: true }
);

export const KPI = mongoose.models.KPI || mongoose.model<IKPI>('KPI', KPISchema);

// Customer Schema
export interface ICustomer extends Document {
  name: string;
  email: string;
  phone: string;
  type: 'hospital' | 'clinic';
  address: string;
  city: string;
  country: string;
  status: 'active' | 'inactive' | 'trial';
  subscriptionId: string;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema = new Schema<ICustomer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    type: { type: String, enum: ['hospital', 'clinic'], required: true },
    address: String,
    city: String,
    country: String,
    status: { type: String, enum: ['active', 'inactive', 'trial'], default: 'trial' },
    subscriptionId: String,
  },
  { timestamps: true }
);

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);

// Subscription Schema
export interface ISubscription extends Document {
  customerId: string;
  planName: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    customerId: { type: String, required: true },
    planName: { type: String, required: true },
    price: { type: Number, required: true },
    billingCycle: { type: String, enum: ['monthly', 'yearly'], default: 'monthly' },
    status: { type: String, enum: ['active', 'cancelled', 'expired'], default: 'active' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    features: [String],
  },
  { timestamps: true }
);

export const Subscription = mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', SubscriptionSchema);

// Invoice Schema
export interface IInvoice extends Document {
  invoiceNumber: string;
  customerId: string;
  amount: number;
  tax: number;
  total: number;
  status: 'paid' | 'pending' | 'overdue';
  issueDate: Date;
  dueDate: Date;
  paidDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new Schema<IInvoice>(
  {
    invoiceNumber: { type: String, required: true, unique: true },
    customerId: { type: String, required: true },
    amount: { type: Number, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, enum: ['paid', 'pending', 'overdue'], default: 'pending' },
    issueDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    paidDate: Date,
  },
  { timestamps: true }
);

export const Invoice = mongoose.models.Invoice || mongoose.model<IInvoice>('Invoice', InvoiceSchema);

// Demo Account Schema
export interface IDemoAccount extends Document {
  email: string;
  password: string;
  hospitalName: string;
  expiryDate: Date;
  status: 'active' | 'expired' | 'deleted';
  createdAt: Date;
  updatedAt: Date;
}

const DemoAccountSchema = new Schema<IDemoAccount>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    hospitalName: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    status: { type: String, enum: ['active', 'expired', 'deleted'], default: 'active' },
  },
  { timestamps: true }
);

export const DemoAccount = mongoose.models.DemoAccount || mongoose.model<IDemoAccount>('DemoAccount', DemoAccountSchema);

// Support Ticket Schema
export interface ISupportTicket extends Document {
  ticketNumber: string;
  customerId: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  assignedTo?: string;
  messages: Array<{ author: string; message: string; timestamp: Date }>;
  createdAt: Date;
  updatedAt: Date;
}

const SupportTicketSchema = new Schema<ISupportTicket>(
  {
    ticketNumber: { type: String, required: true, unique: true },
    customerId: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
    status: { type: String, enum: ['open', 'in-progress', 'resolved', 'closed'], default: 'open' },
    assignedTo: String,
    messages: [
      {
        author: String,
        message: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export const SupportTicket = mongoose.models.SupportTicket || mongoose.model<ISupportTicket>('SupportTicket', SupportTicketSchema);

// Feature Flag Schema
export interface IFeatureFlag extends Document {
  name: string;
  description: string;
  enabled: boolean;
  rolloutPercentage: number;
  targetAudience: string[];
  createdAt: Date;
  updatedAt: Date;
}

const FeatureFlagSchema = new Schema<IFeatureFlag>(
  {
    name: { type: String, required: true, unique: true },
    description: String,
    enabled: { type: Boolean, default: false },
    rolloutPercentage: { type: Number, default: 0, min: 0, max: 100 },
    targetAudience: [String],
  },
  { timestamps: true }
);

export const FeatureFlag = mongoose.models.FeatureFlag || mongoose.model<IFeatureFlag>('FeatureFlag', FeatureFlagSchema);

// Integration Schema
export interface IIntegration extends Document {
  name: string;
  type: 'cloudinary' | 'payment' | 'smtp' | 'sms' | 'other';
  status: 'active' | 'inactive' | 'error';
  config: Record<string, any>;
  lastSyncedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const IntegrationSchema = new Schema<IIntegration>(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, enum: ['cloudinary', 'payment', 'smtp', 'sms', 'other'], required: true },
    status: { type: String, enum: ['active', 'inactive', 'error'], default: 'inactive' },
    config: { type: Schema.Types.Mixed, required: true },
    lastSyncedAt: Date,
  },
  { timestamps: true }
);

export const Integration = mongoose.models.Integration || mongoose.model<IIntegration>('Integration', IntegrationSchema);

// Team Member Schema
export interface ITeamMember extends Document {
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'support' | 'developer';
  department: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

const TeamMemberSchema = new Schema<ITeamMember>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['admin', 'manager', 'support', 'developer'], required: true },
    department: String,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

export const TeamMember = mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);

// Audit Log Schema
export interface IAuditLog extends Document {
  action: string;
  actor: string;
  resource: string;
  resourceId: string;
  changes: Record<string, any>;
  timestamp: Date;
}

const AuditLogSchema = new Schema<IAuditLog>(
  {
    action: { type: String, required: true },
    actor: { type: String, required: true },
    resource: { type: String, required: true },
    resourceId: { type: String, required: true },
    changes: Schema.Types.Mixed,
  },
  { timestamps: true }
);

export const AuditLog = mongoose.models.AuditLog || mongoose.model<IAuditLog>('AuditLog', AuditLogSchema);

// Webhook Schema
export interface IWebhook extends Document {
  name: string;
  url: string;
  events: string[];
  active: boolean;
  secret: string;
  createdAt: Date;
  updatedAt: Date;
}

const WebhookSchema = new Schema<IWebhook>(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    events: [String],
    active: { type: Boolean, default: true },
    secret: { type: String, required: true },
  },
  { timestamps: true }
);

export const Webhook = mongoose.models.Webhook || mongoose.model<IWebhook>('Webhook', WebhookSchema);
