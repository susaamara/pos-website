export default function PosDemoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">POS Demo</h1>
        <p className="mt-2 text-sm leading-6 text-white/70">
          This demo is loaded from <span className="font-mono">/pos-demo/index.html</span>{" "}
          on the same domain.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            title="POS Demo"
            src="/pos-demo/index.html"
            className="h-[80vh] w-full"
          />
        </div>
      </div>
    </div>
  );
}

