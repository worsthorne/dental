import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { InternalLink } from "@/components/shared/internal-link";
import { PremiumCta } from "@/components/shared/premium-cta";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/lib/data/case-studies";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (!item) {
    return buildMetadata({
      title: "Case Studies | Worsthorne Dental Clinic",
      description: "Dental case studies from Worsthorne Dental Clinic.",
      path: "/case-studies",
    });
  }

  return buildMetadata({
    title: `${item.title} | Case Study | Worsthorne Dental Clinic`,
    description: item.summary,
    path: `/case-studies/${item.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (!item) return notFound();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: item.title },
          ]}
        />
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative h-[320px] sm:h-[420px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              {item.category}
            </p>

            <h1 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {item.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {item.summary}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Patient location
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              Patient goal
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {item.patientGoal}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              Challenge
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {item.challenge}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              Our approach
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {item.approach}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#ffffff)] p-7 shadow-sm">
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              Treatment plan
            </h2>
            <ul className="mt-6 space-y-4">
              {item.treatmentPlan.map((step) => (
                <li
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="font-display text-4xl tracking-tight text-slate-950">
            Result
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            {item.result}
          </p>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Related links
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {item.relatedTreatmentHrefs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-200 bg-stone-50 px-4 py-2 text-sm text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Patients reading this case study often also explore our{" "}
              <InternalLink href="/treatments">treatments</InternalLink>, compare{" "}
              <InternalLink href="/fees">fees</InternalLink>, read{" "}
              <InternalLink href="/testimonials">testimonials</InternalLink>, or contact us through the{" "}
              <InternalLink href="/contact">contact page</InternalLink>.
            </p>
          </div>
        </div>
      </section>

      <PremiumCta
        title="Would you like to discuss a similar treatment journey?"
        text="Book a consultation with Worsthorne Dental Clinic and we’ll help you understand the right next step with clear, supportive guidance."
      />
    </main>
  );
}