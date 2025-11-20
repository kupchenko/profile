import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In a real app, you might return different slots based on the date
  const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"];

  return NextResponse.json({ date, timeSlots });
}

