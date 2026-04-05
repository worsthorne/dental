import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { InternalLink } from "@/components/shared/internal-link";
import { PremiumCta } from "@/components/shared/premium-cta";
import { getNewsPostBySlug, newsPosts } from "@/lib/data/news";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "News & Advice | Worsthorne Dental Clinic",
      description: "Dental news and advice from Worsthorne Dental Clinic.",
      path: "/news",
    });
  }

  return buildMetadata({
    title: `${post.title} | Worsthorne Dental Clinic`,
    description: post.excerpt,
    path: `/news/${post.slug}`,
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) return notFound();

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: post.title },
          ]}
        />
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            {post.category}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[0.96] tracking-tight text-slate-950 sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <span>{post.readTime}</span>
            <span>•</span>
            <span>Worsthorne Dental Clinic</span>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[280px] sm:h-[420px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-4xl">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              {post.intro}
            </p>

            {post.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-display text-3xl tracking-tight text-slate-950 sm:text-4xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={`${section.heading}-${index}`}
                      className="text-base leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Related links
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {post.relatedLinks.map((link) => (
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
                Patients reading this article often also review our{" "}
                <InternalLink href="/treatments">treatment pages</InternalLink>, compare{" "}
                <InternalLink href="/fees">fees</InternalLink>, explore{" "}
                <InternalLink href="/testimonials">testimonials</InternalLink>, or contact us directly through the{" "}
                <InternalLink href="/contact">contact page</InternalLink>.
              </p>
            </div>
          </article>
        </div>
      </section>

      <PremiumCta
        title="Would you like advice tailored to your own situation?"
        text="Book a consultation with Worsthorne Dental Clinic and we’ll help you understand the right next step with clarity and confidence."
      />
    </main>
  );
}