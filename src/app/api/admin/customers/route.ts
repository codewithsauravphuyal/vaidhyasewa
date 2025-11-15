import { connectDB } from '@/lib/db';
import { Customer } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');

    let query: any = {};
    if (status) query.status = status;
    if (type) query.type = type;

    const customers = await Customer.find(query).sort({ createdAt: -1 });
    return NextResponse.json(customers);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const customer = new Customer(body);
    await customer.save();
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}
