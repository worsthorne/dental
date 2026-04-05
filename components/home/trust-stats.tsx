import { Reveal } from "@/components/shared/reveal";

const stats = [
  {
    value: "Since 1998",
    label: "Established care",
    text: "A long-standing clinic built on consistency, trust, and patient relationships.",
  },
  {
    value: "25+ Years",
    label: "Clinical experience",
    text: "Decades of serving families, individuals, and professional clients across the region.",
  },
  {
    value: "Comfort First",
    label: "Patient approach",
    text: "Our care is designed around reassurance, gentle communication, and a calm experience.",
  },
  {
    value: "Trusted Locally",
    label: "Broad client base",
    text: "Serving a wide range of patients across Lancashire, including high-profile and professional clients.",
  },
];

export function TrustStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Trust & Experience
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Built on experience. Designed around comfort.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Patients choose Worsthorne Dental Clinic not only for treatment quality,
            but because the entire experience is designed to feel personal, and reassuring.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.06}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {item.label}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}