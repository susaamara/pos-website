import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      { id: 1, name: "Grocery", parentId: null },
      { id: 2, name: "Beverages", parentId: null },
      { id: 3, name: "Snacks", parentId: null },
    ],
  });
}

