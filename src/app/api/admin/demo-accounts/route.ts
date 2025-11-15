import { connectDB } from '@/lib/db';
import { DemoAccount } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let query: any = {};
    if (status) query.status = status;

    const accounts = await DemoAccount.find(query).sort({ createdAt: -1 });
    return NextResponse.json(accounts);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch demo accounts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const account = new DemoAccount(body);
    await account.save();
    return NextResponse.json(account, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create demo account' }, { status: 500 });
  }
}
