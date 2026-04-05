"use client";

import Image from "next/image";
import Link from "next/link";
import { newsPosts } from "@/lib/data/news";

export function FeaturedArticle() {
  const post = newsPosts[0];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* LEFT CONTENT */}
          <div className="p-8 sm:p-10 lg:p-12">
            
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Patient Advice
            </p>

            <h2 className="mt-5 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
              {post.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span>{post.readTime}</span>
              <span>•</span>
              <span>Worsthorne Dental Clinic</span>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href={`/news/${post.slug}`}
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Read Article
              </Link>

              <Link
                href="/news"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-900"
              >
                View All Articles
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[260px] sm:min-h-[360px] lg:min-h-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />

            {/* PREMIUM OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

            {/* TAG BADGE */}
            <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 backdrop-blur">
              Featured
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}