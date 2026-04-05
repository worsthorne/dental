import Link from "next/link";
import {
  featuredTestimonials,
  FeaturedTestimonial,
} from "@/lib/data/testimonials";
import { Reveal } from "@/components/shared/reveal";

function Stars() {
  return (
    <div className="mb-5 flex gap-1 text-amber-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>★</span>
      ))}
    </div>
  );
}

export function TestimonialsPreview() {
  const homeTestimonials = featuredTestimonials.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Trusted by patients who value calm, expert, and comfortable care.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            A small selection of patient feedback that reflects the standard of care,
            reassurance, and professionalism behind every visit.
          </p>
        </div>

        <Link
          href="/testimonials"
          className="text-sm font-semibold text-emerald-700 transition hover:translate-x-0.5"
        >
          View All Testimonials →
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {homeTestimonials.map((testimonial: FeaturedTestimonial, index) => (
          <Reveal key={`${testimonial.name}-${testimonial.location}`} delay={index * 0.05}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <Stars />

              <p className="line-clamp-6 text-base leading-8 text-slate-700">
                “{testimonial.text}”
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {testimonial.name}
                </p>
                <p className="mt-2 text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}