import { connectDB } from '@/lib/db';
import { Integration } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    let query: any = {};
    if (type) query.type = type;

    const integrations = await Integration.find(query).sort({ createdAt: -1 });
    return NextResponse.json(integrations);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch integrations' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const integration = new Integration(body);
    await integration.save();
    return NextResponse.json(integration, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create integration' }, { status: 500 });
  }
}
