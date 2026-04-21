import { NextResponse } from "next/server";

export async function POST() {
  // Demo-only: accept upload but don't store it.
  return NextResponse.json({
    success: true,
    data: { logoUrl: "/images/logo.png" },
  });
}

