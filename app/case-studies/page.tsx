import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { InternalLink } from "@/components/shared/internal-link";
import { caseStudies } from "@/lib/data/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies | Worsthorne Dental Clinic",
  description:
    "Explore dental case studies from Worsthorne Dental Clinic and see how treatment planning, premium care, and patient-first dentistry come together.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Real treatment journeys presented with clarity, confidence, and detail."
        description="Our case studies are designed to help patients understand how treatment planning works in practice, how challenges are approached, and what thoughtful, comfort-led care looks like."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Patients often explore case studies alongside our{" "}
            <InternalLink href="/treatments">treatments</InternalLink>,{" "}
            <InternalLink href="/fees">fees</InternalLink>,{" "}
            <InternalLink href="/testimonials">testimonials</InternalLink>, and{" "}
            <InternalLink href="/contact">contact page</InternalLink> before deciding on the right next step.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  {item.category}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  Case Study
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1"
                  >
                    View Full Case Study →
                  </Link>

                  <span className="rounded-full border border-slate-200 bg-stone-50 px-3 py-1 text-xs text-slate-500">
                    {item.location}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PremiumCta
        title="Want to discuss your own treatment options?"
        text="Book a consultation with Worsthorne Dental Clinic and we’ll help you understand the right next step with calm, clear, and supportive guidance."
      />
    </main>
  );
}