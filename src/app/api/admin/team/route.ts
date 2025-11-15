import { connectDB } from '@/lib/db';
import { TeamMember } from '@/lib/models/saas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');

    let query: any = {};
    if (role) query.role = role;

    const members = await TeamMember.find(query).sort({ createdAt: -1 });
    return NextResponse.json(members);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const member = new TeamMember(body);
    await member.save();
    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}
