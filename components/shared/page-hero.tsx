type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(248,250,252,1))]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {eyebrow}
          </p>

          <h1 className="mt-5 font-display text-5xl leading-[0.96] tracking-tight text-slate-950 sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}