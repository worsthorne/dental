import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { InternalLink } from "@/components/shared/internal-link";
import { areaPages } from "@/lib/data/areas";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Areas We Cover | Worsthorne Dental Clinic",
  description:
    "Explore the North West areas served by Worsthorne Dental Clinic, including Burnley, Blackburn, Preston, Manchester, Liverpool, Chester, and surrounding locations.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Areas we cover"
        title="Premium dental care for patients across Lancashire and the North West."
        description="Worsthorne Dental Clinic welcomes patients from Burnley, Blackburn, Preston, Manchester, Liverpool, Chester, and surrounding areas across North West England."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Patients across the North West often begin by exploring our{" "}
            <InternalLink href="/treatments">treatments</InternalLink>, reviewing our{" "}
            <InternalLink href="/fees">fees</InternalLink>, and then contacting the clinic via the{" "}
            <InternalLink href="/contact">contact page</InternalLink>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areaPages.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {area.county}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                Dentist for {area.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{area.intro}</p>
            </Link>
          ))}
        </div>
      </section>

      <PremiumCta
        title="Looking for a premium dental clinic in the North West?"
        text="Explore your nearest area page, review treatment options, and contact Worsthorne Dental Clinic when you are ready to discuss the next step."
      />
    </main>
  );
}