import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      { id: 1, name: "Main Warehouse", location: "Head Office" },
      { id: 2, name: "Branch Store", location: "City" },
    ],
  });
}

