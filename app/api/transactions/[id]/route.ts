
// app/api/transactions/[id]/route.ts

import { connectDB } from '@/lib/mongo';
import Transaction from '@/models/Transaction';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest, context: any) {
  await connectDB();
  const id = context.params?.id;
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}

export async function PATCH(request: NextRequest, context: any) {
  await connectDB();
  const data = await request.json();
  const id = context.params?.id;
  const updated = await Transaction.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}
