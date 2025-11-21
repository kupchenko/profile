import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectName } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !projectName) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Log the waiting list submission (in a real app, save to database)
    console.log("Waiting list submission received:", { firstName, lastName, email, projectName });

    // Save to database
    const sql = neon(`${process.env.DATABASE_URL}`);
    await sql.query(
      'INSERT INTO waiting_lists (first_name, last_name, email, project_name, created_at) VALUES ($1, $2, $3, $4, NOW())',
      [firstName, lastName, email, projectName]
    );

    // In a real app, you would:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send confirmation email to user
    // 4. Add to email marketing list

    return NextResponse.json({
      success: true,
      message: "You've been added to the waiting list!",
      submission: { firstName, lastName, email, projectName },
    });
  } catch (error) {
    console.error("Error submitting to waiting list:", error);
    return NextResponse.json(
      { success: false, message: "Failed to join waiting list" },
      { status: 500 }
    );
  }
}

