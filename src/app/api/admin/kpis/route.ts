import { connectDB } from '@/lib/db';
import { KPI } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const kpis = await KPI.find().sort({ createdAt: -1 });
    return NextResponse.json(kpis);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch KPIs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const kpi = new KPI(body);
    await kpi.save();
    return NextResponse.json(kpi, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create KPI' }, { status: 500 });
  }
}
