"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isDemoAuthed, setDemoAuthed } from "../_components/demoAuth";

const DEMO_EMAIL = "demo@pos.local";
const DEMO_PASSWORD = "demo123";

export default function DemoLoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = useMemo(
    () => searchParams.get("next") ?? "/demo/dashboard",
    [searchParams],
  );

  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isDemoAuthed()) router.replace(nextPath);
  }, [nextPath, router]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold tracking-tight">Demo login</h1>
        <p className="mt-2 text-sm leading-6 text-white/70">
          This is a safe demo-only login (no real authentication). Use it to showcase the
          UI flow.
        </p>

        <form
          className="mt-6 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setError(null);

            const ok =
              email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
            if (!ok) {
              setError("Invalid demo credentials. Use the prefilled values.");
              return;
            }

            setDemoAuthed(true);
            router.push(nextPath);
          }}
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-xl border border-white/15 bg-zinc-950/40 px-3 text-sm outline-none ring-0 focus:border-white/30"
              placeholder="name@company.com"
              autoComplete="username"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 rounded-xl border border-white/15 bg-zinc-950/40 px-3 text-sm outline-none ring-0 focus:border-white/30"
              placeholder="••••••••"
              type="password"
              autoComplete="current-password"
            />
          </label>

          {error ? (
            <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-100">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
          >
            Sign in
          </button>

          <div className="text-xs text-white/60">
            Demo credentials: <span className="font-mono">{DEMO_EMAIL}</span> /{" "}
            <span className="font-mono">{DEMO_PASSWORD}</span>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold">What customers can try</div>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>• Billing screen flow</li>
          <li>• Inventory view</li>
          <li>• Reports preview</li>
        </ul>
        <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950/40 p-4">
          <div className="text-xs text-white/60">Tip</div>
          <div className="mt-1 text-sm">
            When you’re ready, we can connect this to your real backend login.
          </div>
        </div>
      </div>
    </div>
  );
}

