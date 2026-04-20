"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isDemoAuthed, setDemoAuthed } from "../_components/demoAuth";

export default function DemoDashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isDemoAuthed()) {
      router.replace("/demo/login?next=/demo/dashboard");
    }
  }, [router]);

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Demo dashboard</h1>
        <p className="text-sm leading-6 text-white/70">
          This is a simple preview page. You can expand it with real screenshots and
          flows from your POS.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs text-white/60">Today</div>
          <div className="mt-1 text-lg font-semibold">₹ 94,500</div>
          <div className="mt-1 text-sm text-white/70">Sales</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs text-white/60">Bills</div>
          <div className="mt-1 text-lg font-semibold">128</div>
          <div className="mt-1 text-sm text-white/70">Completed</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs text-white/60">Low stock</div>
          <div className="mt-1 text-lg font-semibold">3 items</div>
          <div className="mt-1 text-sm text-white/70">Needs reorder</div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm font-semibold">Next steps</div>
            <div className="mt-1 text-sm text-white/70">
              Add your real video (`public/promo.mp4`) and screenshots (`public/images/*`).
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              Home
            </Link>
            <button
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
              onClick={() => {
                setDemoAuthed(false);
                router.push("/demo/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

