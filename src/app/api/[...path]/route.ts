import { NextResponse } from "next/server";

function jsonOk(data: unknown) {
  return NextResponse.json({ success: true, data });
}

export async function GET() {
  // Generic demo fallback for any missing GET endpoints.
  return jsonOk([]);
}

export async function POST(request: Request) {
  // Generic demo fallback for any missing POST endpoints.
  let body: any = null;
  try {
    body = await request.json();
  } catch {
    // ignore
  }
  return jsonOk(body ?? {});
}

export async function PUT(request: Request) {
  let body: any = null;
  try {
    body = await request.json();
  } catch {
    // ignore
  }
  return jsonOk(body ?? {});
}

export async function PATCH(request: Request) {
  let body: any = null;
  try {
    body = await request.json();
  } catch {
    // ignore
  }
  return jsonOk(body ?? {});
}

export async function DELETE() {
  return jsonOk({ deleted: true });
}

