import Link from "next/link";

const features = [
  {
    title: "Fast billing",
    description:
      "Keyboard-friendly sales screen with quick search, discounts, tax, and multiple payment types.",
  },
  {
    title: "Inventory control",
    description:
      "Track stock, low-stock alerts, purchase entries, and item-wise movement with simple adjustments.",
  },
  {
    title: "Customers & suppliers",
    description:
      "Manage parties, credit/debit, statements, and contact history for better follow-up.",
  },
  {
    title: "Reports that matter",
    description:
      "Daily sales, profit, cashier summary, top items, and export-ready reporting.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            POS System
          </Link>
          <nav className="flex items-center gap-3">
            <a className="text-sm text-white/80 hover:text-white" href="#features">
              Features
            </a>
            <a className="text-sm text-white/80 hover:text-white" href="#video">
              Video
            </a>
            <a className="text-sm text-white/80 hover:text-white" href="#gallery">
              Images
            </a>
            <Link className="text-sm text-white/80 hover:text-white" href="/pos">
              POS demo
            </Link>
            <Link
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100"
              href="/demo/login"
            >
              Demo login
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="absolute top-24 left-10 h-[380px] w-[380px] rounded-full bg-cyan-400/25 blur-3xl" />
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div className="relative">
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                Simple. Fast. Reliable.
              </p>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Market-ready POS system for faster billing and smarter control
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/75 md:text-lg">
                Sell quickly, manage stock confidently, and understand your business with
                clear reports. Add your short video, images, and share a demo login with
                customers.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo/login"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-zinc-950 hover:bg-zinc-100"
                >
                  Try demo
                </Link>
                <a
                  href="#video"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-medium text-white hover:bg-white/10"
                >
                  Watch video
                </a>
              </div>
              <p className="mt-4 text-xs text-white/55">
                Demo is for preview only (no real data).
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Today</div>
                    <div className="text-xs text-white/60">Sales summary</div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Bills</div>
                      <div className="mt-1 text-lg font-semibold">128</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Revenue</div>
                      <div className="mt-1 text-lg font-semibold">₹ 94,500</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="text-xs text-white/60">Profit</div>
                      <div className="mt-1 text-lg font-semibold">₹ 18,220</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="text-xs text-white/60">Low stock</div>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Thermal roll</span>
                        <span className="text-white/60">3 left</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Cooking oil (1L)</span>
                        <span className="text-white/60">5 left</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Sugar (1kg)</span>
                        <span className="text-white/60">8 left</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Everything you need to run sales daily
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              Designed for real counters: quick workflow, clear screens, and dependable
              reporting.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7.5"
              >
                <div className="text-base font-semibold">{f.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="video" className="mx-auto max-w-6xl px-5 pb-14 md:pb-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                Short product video
              </h2>
              <p className="text-sm leading-6 text-white/70">
                Add your promo video later. For now this is a safe placeholder that you
                can replace with an MP4 or a YouTube embed.
              </p>
            </div>
            <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40">
              <div className="flex h-full w-full items-center justify-center p-6 text-center">
                <div>
                  <div className="text-sm font-medium">Video placeholder</div>
                  <div className="mt-1 text-xs text-white/60">
                    Put your file in `public/promo.mp4` or embed a YouTube link.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                Product images
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Replace these placeholders with screenshots from your POS system.
              </p>
            </div>
            <Link
              href="/demo/login"
              className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 sm:inline-flex"
            >
              Open demo
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Billing screen", "Inventory list", "Reports & analytics"].map((label) => (
              <div
                key={label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="aspect-[16/10] w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0" />
                <div className="mt-3 text-sm font-medium">{label}</div>
                <div className="mt-1 text-xs text-white/60">
                  Replace with your screenshot.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-10 md:flex-row md:items-center">
            <div>
              <div className="text-base font-semibold">Ready to show it to customers?</div>
              <div className="mt-1 text-sm text-white/70">
                Use the demo login and share your short video and screenshots.
              </div>
            </div>
            <Link
              href="/demo/login"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-zinc-950 hover:bg-zinc-100"
            >
              Demo login
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-5 text-sm text-white/60">
          © {new Date().getFullYear()} POS System. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
