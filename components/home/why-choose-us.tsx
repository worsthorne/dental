import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const features = [
  "Personalised treatment plans",
  "Modern dental technology",
  "A gentle patient-first approach",
  "Trusted experienced clinicians",
  "Transparent communication",
  "A calm and premium environment",
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="/dental-bg.jpg"
          alt="Dental clinic background"
          fill
          className="object-cover opacity-30"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/65" />

      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 sm:text-sm">
                Why choose us
              </p>

              <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
                High-end presentation means nothing without excellent care behind it.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                The best dental websites feel polished, but the best clinics also feel clear,
                capable, and deeply trustworthy. This section makes that message obvious.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.06}>
                <div className="rounded-[1.75rem] border border-white/20 bg-white/5 px-6 py-5 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 sm:text-base">
                  {feature}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}