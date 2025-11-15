import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  hospitalName: z.string().min(2, 'Hospital/Clinic name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters').max(20),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
