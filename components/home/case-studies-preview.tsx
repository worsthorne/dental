import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { caseStudies, CaseStudyItem } from "@/lib/data/case-studies";

const caseStudyImages: Record<string, string> = {
  "Smile Restoration": "/case-studies/smile-restoration.jpg",
  "Subtle Smile Enhancement": "/case-studies/smile-enhancement.jpg",
  "Healthier Gum Foundation": "/case-studies/gum-foundation.jpg",
};

export function CaseStudiesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real treatment journeys presented with clarity, confidence, and premium detail."
          description="A more premium way to showcase real outcomes, patient trust, and the quality behind your treatment planning."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((item: CaseStudyItem, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <Image
                    src={caseStudyImages[item.title] || "/case-studies/default.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                    Case Study
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1"
                    >
                      View Story →
                    </Link>

                    <div className="rounded-full border border-slate-200 bg-stone-50 px-3 py-1 text-xs text-slate-500">
                      Patient Journey
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Explore All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}