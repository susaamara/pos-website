import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: any = null;
  try {
    body = await request.json();
  } catch {
    // ignore
  }

  const username = (body?.username ?? "").toString();
  const password = (body?.password ?? "").toString();

  // Demo-only: accept any non-empty credentials.
  if (!username || !password) {
    return NextResponse.json(
      { success: false, message: "Missing demo credentials" },
      { status: 400 },
    );
  }

  const user = {
    id: 1,
    username,
    name: "Demo User",
    role: "ADMIN",
    privileges: { canDelete: true },
  };

  return NextResponse.json({
    success: true,
    token: "demo-token",
    user,
  });
}

