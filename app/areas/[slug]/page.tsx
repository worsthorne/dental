import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { InternalLink } from "@/components/shared/internal-link";
import { getAreaBySlug, areaPages } from "@/lib/data/areas";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areaPages.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return buildMetadata({
      title: "Areas | Worsthorne Dental Clinic",
      description: "Areas served by Worsthorne Dental Clinic.",
      path: "/areas",
    });
  }

  return buildMetadata({
    title: `Dentist for ${area.name} | Worsthorne Dental Clinic`,
    description: `Premium dental care for patients in ${area.name}, ${area.county}. Explore treatments, fees, and consultation options with Worsthorne Dental Clinic.`,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) return notFound();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Areas", href: "/areas" },
            { label: area.name },
          ]}
        />
      </section>

      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(248,250,252,1))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              {area.county}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.96] tracking-tight text-slate-950 sm:text-6xl">
              Dentist for {area.name}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {area.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              Popular treatments for patients in {area.name}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Patients in {area.name} often explore our{" "}
              <InternalLink href="/treatments/family-dentistry">
                family dentistry
              </InternalLink>
              ,{" "}
              <InternalLink href="/treatments/dental-implants">
                dental implants
              </InternalLink>
              ,{" "}
              <InternalLink href="/treatments/cosmetic-dentistry">
                cosmetic dentistry
              </InternalLink>
              ,{" "}
              <InternalLink href="/treatments/teeth-whitening">
                teeth whitening
              </InternalLink>
              , and{" "}
              <InternalLink href="/treatments/root-canal-treatment">
                root canal treatment
              </InternalLink>{" "}
              services.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              You can also review our <InternalLink href="/fees">fees</InternalLink>,
              read real <InternalLink href="/case-studies">case studies</InternalLink>,
              or contact us through the{" "}
              <InternalLink href="/contact">contact page</InternalLink>.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#ffffff)] p-7 shadow-sm">
            <h2 className="font-display text-4xl tracking-tight text-slate-950">
              Nearby areas
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {area.nearby.map((place) => (
                <span
                  key={place}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                >
                  {place}
                </span>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Worsthorne Dental Clinic supports patients across Lancashire and the
              wider North West, including{" "}
              <InternalLink href="/areas/burnley">Burnley</InternalLink>,{" "}
              <InternalLink href="/areas/blackburn">Blackburn</InternalLink>,{" "}
              <InternalLink href="/areas/preston">Preston</InternalLink>,{" "}
              <InternalLink href="/areas/manchester">Manchester</InternalLink>,{" "}
              <InternalLink href="/areas/liverpool">Liverpool</InternalLink>, and{" "}
              <InternalLink href="/areas/chester">Chester</InternalLink>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#14532d,#052e16)] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Book now
            </p>

            <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
              Looking for a dentist near {area.name}?
            </h2>

            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">
              Book a consultation with Worsthorne Dental Clinic to explore the
              right treatment options with clear, supportive guidance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Request Appointment
              </Link>

              <Link
                href="/treatments"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}