import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { InternalLink } from "@/components/shared/internal-link";
import { FAQSchema } from "@/components/schema/faq-schema";
import { buildMetadata } from "@/lib/seo";

const feeRows = [
  ["Consultation", "From £95"],
  ["Emergency Visit", "From £85"],
  ["Teeth Whitening", "From £349"],
  ["Dental Implants", "From £2,400"],
  ["Root Canal Treatment", "From £495"],
];

const feeFaqs = [
  {
    question: "Are fees confirmed before treatment begins?",
    answer:
      "Yes. Patients should understand their treatment options and likely costs clearly before committing.",
  },
  {
    question: "Can I discuss treatment options before deciding?",
    answer:
      "Absolutely. Many patients review our treatment pages first and then use a consultation to understand which route is most suitable.",
  },
];

export const metadata = buildMetadata({
  title: "Fees | Worsthorne Dental Clinic",
  description:
    "View fees at Worsthorne Dental Clinic and explore treatment costs, consultation pricing, and premium patient-first dental care.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <main>
      <FAQSchema items={feeFaqs} />

      <PageHero
        eyebrow="Fees"
        title="Clear pricing and supportive guidance before treatment begins."
        description="Patients should feel informed before they commit. This page gives a calm, transparent overview of consultations, treatment fees, and financial guidance."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Fee transparency matters. Patients often review our{" "}
            <InternalLink href="/treatments">treatments</InternalLink>, read{" "}
            <InternalLink href="/case-studies">case studies</InternalLink>, and then speak to our team via the{" "}
            <InternalLink href="/contact">contact page</InternalLink> to discuss the best next step.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-4">
            {feeRows.map(([label, price]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-stone-50 px-5 py-5"
              >
                <span className="text-sm font-medium text-slate-700">{label}</span>
                <span className="text-sm font-semibold text-slate-950">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <FAQAccordion items={feeFaqs} />
        </div>
      </section>

      <PremiumCta
        title="Want to discuss the right treatment and likely costs?"
        text="Book a consultation and we’ll help you understand the best route clearly, calmly, and without pressure."
      />
    </main>
  );
}