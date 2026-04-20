import { Suspense } from "react";
import DemoLoginClient from "./DemoLoginClient";

export default function DemoLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          Loading…
        </div>
      }
    >
      <DemoLoginClient />
    </Suspense>
  );
}

