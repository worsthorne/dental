import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { InternalLink } from "@/components/shared/internal-link";
import { teamMembers } from "@/lib/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Team | Worsthorne Dental Clinic",
  description:
    "Meet the team at Worsthorne Dental Clinic. Explore our patient-first approach, premium care, and treatment support across Lancashire and the North West.",
  path: "/our-team",
});

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our team"
        title="Experienced clinicians and patient-first professional."
        description="Meet the people behind the care. Our team is focused on calm communication, high standards, and treatment journeys that feel clear and supportive from beginning to end."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            At Worsthorne Dental Clinic, we believe premium care comes from more than equipment or presentation.
            It comes from people who communicate clearly, plan thoughtfully, and help patients feel at ease.
            You can also explore our <InternalLink href="/treatments">treatments</InternalLink>, read real{" "}
            <InternalLink href="/testimonials">patient testimonials</InternalLink>, view{" "}
            <InternalLink href="/case-studies">case studies</InternalLink>, or contact the clinic through our{" "}
            <InternalLink href="/contact">contact page</InternalLink>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-6 h-72 rounded-[1.5rem] bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#e2e8f0)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                {member.role}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {member.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <PremiumCta
        title="Speak to our team and explore the right next step for your dental care."
        text="Whether you are looking for routine care, cosmetic improvements, or restorative treatment, our team can guide you clearly and supportively."
      />
    </main>
  );
}