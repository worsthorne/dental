export function TrustStrip() {
  const items = [
    "Trusted by families and private patients",
    "Advanced treatments delivered with precision",
    "Comfort-led care in a calm clinical setting",
    "Transparent advice from experienced clinicians",
  ];

  return (
    <section className="border-y border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
            <p className="text-sm text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}