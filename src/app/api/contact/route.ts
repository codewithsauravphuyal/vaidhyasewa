import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Contact } from '@/lib/models/contact';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Connect to database
    await connectDB();

    // Create a new contact
    const contact = await Contact.create(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will contact you soon!',
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}
