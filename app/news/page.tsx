import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { InternalLink } from "@/components/shared/internal-link";
import { newsPosts } from "@/lib/data/news";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dental News & Advice | Worsthorne Dental Clinic",
  description:
    "Read dental advice, treatment explainers, and patient guidance from Worsthorne Dental Clinic.",
  path: "/news",
});

export default function NewsPage() {
  const featuredPost = newsPosts[0];
  const remainingPosts = newsPosts.slice(1);

  return (
    <main>
      <PageHero
        eyebrow="News & Advice"
        title="Detailed articles that help patients understand treatment options clearly."
        description="A stronger advice hub for patients researching treatment, comparing options, and preparing for the next step with more confidence."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Our advice content supports patients who want to understand options before booking.
            Readers often move from articles into our <InternalLink href="/treatments">treatment pages</InternalLink>, review{" "}
            <InternalLink href="/fees">fees</InternalLink>, compare{" "}
            <InternalLink href="/testimonials">testimonials</InternalLink>, and then contact us through the{" "}
            <InternalLink href="/contact">contact page</InternalLink>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
                Featured Article
              </p>

              <h2 className="mt-5 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
                {featuredPost.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <span>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <div className="mt-8">
                <Link
                  href={`/news/${featuredPost.slug}`}
                  className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Read Full Article
                </Link>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                    Article
                  </p>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:translate-x-1"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PremiumCta
        title="Need advice tailored to your situation?"
        text="Book a consultation with Worsthorne Dental Clinic and we’ll help you understand the right next step with clear, supportive guidance."
      />
    </main>
  );
}