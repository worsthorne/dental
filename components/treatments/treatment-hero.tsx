import Image from "next/image";

type TreatmentHeroProps = {
  name: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
};

export function TreatmentHero({
  name,
  title,
  text,
  image,
  imageAlt,
}: TreatmentHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(248,250,252,1))]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {name}
          </p>

          <h1 className="mt-5 font-display text-5xl leading-[0.96] tracking-tight text-slate-950 sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {text}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5"
            >
              Book Consultation
            </a>
            <a
              href="/fees"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              View Fees
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#d1fae5,#f8fafc,#e2e8f0)]">
            {image ? (
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}