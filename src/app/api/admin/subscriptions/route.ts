import { connectDB } from '@/lib/db';
import { Subscription } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let query: any = {};
    if (status) query.status = status;

    const subscriptions = await Subscription.find(query).sort({ createdAt: -1 });
    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const subscription = new Subscription(body);
    await subscription.save();
    return NextResponse.json(subscription, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
  }
}
