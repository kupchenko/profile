import { NextResponse } from "next/server";

export async function GET() {
  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 100));

  const availableDates = [
    { date: "2025-01-22", day: "Wed" },
    { date: "2025-01-23", day: "Thu" },
    { date: "2025-01-27", day: "Mon" },
    { date: "2025-01-29", day: "Wed" },
    { date: "2025-01-30", day: "Thu" },
    { date: "2025-02-03", day: "Mon" },
    { date: "2025-02-05", day: "Wed" },
    { date: "2025-02-06", day: "Thu" },
    { date: "2025-02-10", day: "Mon" },
    { date: "2025-02-12", day: "Wed" },
  ];

  return NextResponse.json(availableDates);
}

