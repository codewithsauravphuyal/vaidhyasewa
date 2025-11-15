import { connectDB } from '@/lib/db';
import { Content } from '@/lib/models/admin';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status');

    let query: any = {};
    if (category) query.category = category;
    if (status) query.status = status;

    const contents = await Content.find(query).sort({ createdAt: -1 });
    return NextResponse.json(contents);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const content = new Content(body);
    await content.save();

    return NextResponse.json(content, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create content' }, { status: 500 });
  }
}
