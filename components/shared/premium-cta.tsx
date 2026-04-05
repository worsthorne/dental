import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";

type PremiumCtaProps = {
  eyebrow?: string;
  title: string;
  text: string;
};

export function PremiumCta({
  eyebrow = "Next step",
  title,
  text,
}: PremiumCtaProps) {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#14532d,#052e16)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
              {text}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Request Appointment
              </Link>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}