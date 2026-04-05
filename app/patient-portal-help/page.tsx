import { PageHero } from "@/components/shared/page-hero";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { FAQSchema } from "@/components/schema/faq-schema";
import { PremiumCta } from "@/components/shared/premium-cta";
import { InternalLink } from "@/components/shared/internal-link";
import { buildMetadata } from "@/lib/seo";

const helpItems = [
  {
    question: "How do I log in to the patient portal?",
    answer:
      "Use the portal details provided by the clinic. If you are unsure, contact the team for assistance.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Use the portal password reset option if available, or contact the clinic for support.",
  },
  {
    question: "Where can I find appointment details?",
    answer:
      "Appointment details are typically shown inside the portal once you are signed in.",
  },
  {
    question: "What should I do if I am locked out?",
    answer:
      "If you cannot access your account, contact the clinic directly and we will help you regain access.",
  },
];

export const metadata = buildMetadata({
  title: "Patient Portal Help | Worsthorne Dental Clinic",
  description:
    "Get help with patient portal access, password resets, appointments, and support at Worsthorne Dental Clinic.",
  path: "/patient-portal-help",
});

export default function PatientPortalHelpPage() {
  return (
    <main>
      <FAQSchema
        items={helpItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <PageHero
        eyebrow="Patient portal help"
        title="Support for logging in, accessing appointments, and getting help quickly."
        description="This page makes it easier for patients to use the portal without frustration, while keeping the design polished and on-brand."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            If you need help with the portal, you can also contact the clinic through our{" "}
            <InternalLink href="/contact">contact page</InternalLink>, review general information on the{" "}
            <InternalLink href="/fees">fees page</InternalLink>, or return to our{" "}
            <InternalLink href="/treatments">treatments</InternalLink> page to explore care options.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <FAQAccordion items={helpItems} />
        </div>
      </section>

      <PremiumCta
        title="Need help from the clinic directly?"
        text="If you’re locked out, unsure where to go, or need to speak to someone, contact Worsthorne Dental Clinic and we’ll point you in the right direction."
      />
    </main>
  );
}