import { connectDB } from '@/lib/db';
import { AuditLog } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const actor = searchParams.get('actor');

    let query: any = {};
    if (action) query.action = action;
    if (actor) query.actor = actor;

    const logs = await AuditLog.find(query).sort({ timestamp: -1 }).limit(100);
    return NextResponse.json(logs);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch audit logs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const log = new AuditLog(body);
    await log.save();
    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create audit log' }, { status: 500 });
  }
}
