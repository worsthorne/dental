import Link from "next/link";
import { TreatmentPageData } from "@/lib/data/treatment-pages";
import { TreatmentHero } from "@/components/treatments/treatment-hero";
import { TreatmentBenefits } from "@/components/treatments/treatment-benefits";
import { TreatmentProcess } from "@/components/treatments/treatment-process";
import { TreatmentFaqs } from "@/components/treatments/treatment-faqs";
import { RelatedTreatments } from "@/components/treatments/related-treatments";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { InternalLink } from "@/components/shared/internal-link";
import { FAQSchema } from "@/components/schema/faq-schema";
import { BreadcrumbSchema } from "@/components/schema/breadcrumb-schema";
import { siteConfig } from "@/lib/site";

type TreatmentTemplateProps = {
  treatment: TreatmentPageData;
};

export function TreatmentTemplate({ treatment }: TreatmentTemplateProps) {
  return (
    <main>
        <FAQSchema items={treatment.faqs} />
<BreadcrumbSchema
  items={[
    { name: "Home", item: siteConfig.url },
    { name: "Treatments", item: `${siteConfig.url}/treatments` },
    { name: treatment.name, item: `${siteConfig.url}/treatments/${treatment.slug}` },
  ]}
/>
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Treatments", href: "/treatments" },
            { label: treatment.name },
          ]}
        />
      </section>

      <TreatmentHero
        name={treatment.name}
        title={treatment.heroTitle}
        text={treatment.heroText}
      />

      <TreatmentBenefits items={treatment.benefits} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Who it is for
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950">
              Is this treatment right for you?
            </h2>

            <div className="mt-8 space-y-4">
              {treatment.whoItsFor.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#ffffff)] p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Outcomes
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950">
              {treatment.outcomesTitle}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              {treatment.outcomesText}
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              You can also explore our <InternalLink href="/fees">treatment fees</InternalLink>, view
              real patient journeys in our <InternalLink href="/case-studies">case studies</InternalLink>,
              learn more about our team on the <InternalLink href="/our-team">our team page</InternalLink>,
              or speak to us directly through the <InternalLink href="/contact">contact page</InternalLink>.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Patients across <InternalLink href="/areas/burnley">Burnley</InternalLink>,{" "}
              <InternalLink href="/areas/blackburn">Blackburn</InternalLink>,{" "}
              <InternalLink href="/areas/preston">Preston</InternalLink>,{" "}
              <InternalLink href="/areas/manchester">Manchester</InternalLink>, and the wider North West
              also explore this treatment.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <TreatmentProcess items={treatment.process} />
      <TreatmentFaqs items={treatment.faqs} />
      <RelatedTreatments currentSlug={treatment.slug} />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#14532d,#052e16)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Next step
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Book a consultation and explore your treatment options with confidence.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
              We will guide you through the right options clearly, explain what to expect, and help you plan the next step in a calm and supportive way.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Request Appointment
              </Link>
              <Link
                href="/fees"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Fees
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}