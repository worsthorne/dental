import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { buildMetadata } from "@/lib/seo";
import { teamMembers } from "@/lib/data/team";

export const metadata = buildMetadata({
  title: "Our Team | Worsthorne Dental Clinic",
  description:
    "Meet the team at Worsthorne Dental Clinic, including Dr. Mazhar Iqbal and Victoria Bond. Learn more about their experience, approach, and patient care philosophy.",
  path: "/our-team",
});

export default function OurTeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Team"
        title="Experienced, supportive care from a team that puts patients first."
        description="Meet the people behind Worsthorne Dental Clinic and learn more about the experience, values, and personal approach that shape the care we provide."
      />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl space-y-8">
          {teamMembers.map((member, index) => (
            <article
              key={member.slug}
              id={member.slug}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[320px]">
  {member.image ? (
    <Image
      src={member.image}
      alt={member.name}
      fill
      sizes="(max-width: 1024px) 100vw, 40vw"
      className={`${
        index === 1 ? "object-cover object-top" : "object-cover object-center"
      }`}
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-[#f4faf4] text-sm font-medium text-slate-500">
      Team photo coming soon
    </div>
  )}
</div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
                    {member.role}
                  </p>

                  <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
                    {member.name}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {member.qualifications}
                  </p>

                  <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                    {member.fullBio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PremiumCta
        title="Would you like to book with our team?"
        text="Get in touch and we’ll help you take the next step clearly, calmly, and without pressure."
      />
    </main>
  );
}