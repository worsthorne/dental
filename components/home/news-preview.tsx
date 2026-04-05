import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { newsPosts } from "@/lib/data/news";

export function NewsPreview() {
  const [featured, ...rest] = newsPosts;
  const sidePosts = rest.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="News & advice"
            title="Helpful content that supports trust, education, and confidence."
            description="Clear, patient-friendly articles designed to help people understand treatments, compare options, and feel more confident before booking."
          />

          <Link
            href="/news"
            className="text-sm font-semibold text-emerald-700 transition hover:translate-x-0.5"
          >
            Visit News →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <Link
              href={`/news/${featured.slug}`}
              className="relative block h-64 overflow-hidden sm:h-80 lg:h-96"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                  {featured.category}
                </p>
                <p className="mt-2 text-sm font-medium text-white/90">
                  {featured.readTime}
                </p>
              </div>
            </Link>

            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Featured Article
              </p>

              <h3 className="mt-4 font-display text-3xl tracking-tight text-slate-950 sm:text-4xl">
                {featured.title}
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/news/${featured.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Read Full Article
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
                >
                  Ask Our Team
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-500">
                Prefer direct guidance? You can read the article first, then use our
                contact page to ask about the treatment that may be right for you.
              </p>
            </div>
          </article>

          <div className="grid gap-6">
            {sidePosts.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-stone-50 px-3 py-1">
                    {item.category}
                  </span>
                  <span>{item.readTime}</span>
                </div>

                <h4 className="mt-4 text-xl font-semibold text-slate-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.excerpt}
                </p>

                <div className="mt-5 inline-flex items-center text-sm font-semibold text-emerald-700 transition hover:translate-x-0.5">
                  Read Article →
                </div>
              </Link>
            ))}

            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#ffffff)] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Need tailored advice?
              </p>

              <h4 className="mt-3 text-xl font-semibold text-slate-950">
                Speak to the clinic directly.
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you would rather ask about your own situation than keep researching,
                book a consultation and we’ll guide you clearly.
              </p>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}