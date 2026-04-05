import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { InternalLink } from "@/components/shared/internal-link";
import Image from "next/image";
export function IntroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] shadow-xl">
  <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">

    <Image
      src="/dental-hero.jpg"
      alt="Worsthorne Dental Clinic Interior"
      fill
      className="object-cover"
      priority
    />

    {/* overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

    {/* optional badge */}
    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold shadow">
      Trusted Private Care
    </div>

  </div>
</div>

        <div>
          <SectionHeading
            eyebrow="Welcome"
            title="A dental practice built around trust, comfort, and exceptional standards."
            description="Worsthorne Dental Clinic combines advanced treatment options with a calm, attentive experience that helps patients feel informed and cared for. Every visit is designed to feel personal, modern, and reassuring from first conversation to final result."
          />

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Whether you need routine care, restorative work, or a full smile transformation,
            the focus stays the same: refined care, honest guidance, and results you can feel confident in.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            You can explore our <InternalLink href="/treatments/dental-implants">dental implants</InternalLink>,{" "}
            <InternalLink href="/treatments/teeth-whitening">teeth whitening</InternalLink>,{" "}
            <InternalLink href="/treatments/cosmetic-dentistry">cosmetic dentistry</InternalLink>, and{" "}
            <InternalLink href="/treatments/family-dentistry">family dentistry</InternalLink> pages,
            view real outcomes in our <InternalLink href="/case-studies">case studies</InternalLink>,
            or speak to our team through the <InternalLink href="/contact">contact page</InternalLink>.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            We also welcome patients from <InternalLink href="/areas/burnley">Burnley</InternalLink>,{" "}
            <InternalLink href="/areas/blackburn">Blackburn</InternalLink>,{" "}
            <InternalLink href="/areas/preston">Preston</InternalLink>,{" "}
            <InternalLink href="/areas/manchester">Manchester</InternalLink>, and across the North West.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/our-team"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Meet Our Team
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              See Patient Results
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}