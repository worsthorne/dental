import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { InternalLink } from "@/components/shared/internal-link";
import {
  featuredTestimonials,
  testimonials,
  FeaturedTestimonial,
  TestimonialItem,
} from "@/lib/data/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Testimonials | Worsthorne Dental Clinic",
  description:
    "Read patient testimonials for Worsthorne Dental Clinic and discover why patients across Lancashire and the North West trust our calm, premium, patient-first care.",
  path: "/testimonials",
});

function Stars() {
  return (
    <div className="mb-5 flex gap-1 text-amber-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main>
      {/* HERO */}
      <PageHero
        eyebrow="Testimonials"
        title="Patient feedback that reflects real care, real comfort, and real trust."
        description="These reviews give a clear picture of the experience patients have at Worsthorne Dental Clinic — from routine care and hygiene to implants, restorative treatment, and support for nervous patients."
      />

      {/* INTRO */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Many patients read testimonials before choosing a clinic. You can also explore our{" "}
            <InternalLink href="/our-team">team</InternalLink>, browse our{" "}
            <InternalLink href="/treatments">treatments</InternalLink>, view{" "}
            <InternalLink href="/case-studies">case studies</InternalLink>, compare options on our{" "}
            <InternalLink href="/fees">fees page</InternalLink>, or contact us through the{" "}
            <InternalLink href="/contact">contact page</InternalLink>.
          </p>
        </div>
      </section>

      {/* FEATURED REVIEWS */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Featured Reviews
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
              A closer look at the patient experience.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredTestimonials.map((testimonial: FeaturedTestimonial, index) => (
              <div
                key={`${testimonial.name}-${testimonial.location}-${index}`}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <Stars />

                <p className="text-base leading-8 text-slate-700">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {testimonial.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              More Patient Feedback
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
              Consistent reassurance across different treatments.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial: TestimonialItem, index) => (
              <div
                key={`${testimonial.name}-${testimonial.location}-${index}`}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 text-sm text-emerald-600">
                  ★★★★★
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PremiumCta
        title="Ready to experience this level of care for yourself?"
        text="Book a consultation with Worsthorne Dental Clinic and take the next step with clarity, comfort, and confidence."
      />
    </main>
  );
}