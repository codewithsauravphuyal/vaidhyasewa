import { connectDB } from '@/lib/db';
import { FeatureFlag } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const flags = await FeatureFlag.find().sort({ createdAt: -1 });
    return NextResponse.json(flags);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch feature flags' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const flag = new FeatureFlag(body);
    await flag.save();
    return NextResponse.json(flag, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create feature flag' }, { status: 500 });
  }
}
