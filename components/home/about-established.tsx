import { Reveal } from "@/components/shared/reveal";
import Image from "next/image";

export function AboutEstablished() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
         <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
  <div className="relative h-[320px] sm:h-[420px]">

    <Image
      src="/clinic-interior.webp"
      alt="Worsthorne Dental Clinic Interior"
      fill
      className="object-cover"
    />

    {/* soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

    {/* badge */}
    <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-5 py-3 shadow">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">
        Established
      </p>
      <p className="text-xl font-semibold text-slate-950">
        Since 1998
      </p>
    </div>

  </div>
</div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              About Us
            </p>

            <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Care built on experience, trust, and genuine comfort.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Worsthorne Dental Clinic has been serving patients since 1998,
              providing high-quality dental care across Lancashire and the North West.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Over the years, we have treated a wide range of patients including
              those connected with Burnley Football Club while maintaining the same
              commitment to thoughtful, professional care.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
              Our philosophy is simple: treatment should be built around comfort.
              That means clear communication, a calm environment, and an approach
              that helps patients feel reassured from the first conversation to the final result.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}