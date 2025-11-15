import { connectDB } from '@/lib/db';
import { Webhook } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const webhooks = await Webhook.find().sort({ createdAt: -1 });
    return NextResponse.json(webhooks);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch webhooks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const webhook = new Webhook(body);
    await webhook.save();
    return NextResponse.json(webhook, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create webhook' }, { status: 500 });
  }
}
