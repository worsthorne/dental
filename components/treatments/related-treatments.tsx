import { treatments, TreatmentItem } from "@/lib/data/treatments";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { InternalLink } from "@/components/shared/internal-link";

type RelatedTreatmentsProps = {
  currentSlug: string;
};

export function RelatedTreatments({
  currentSlug,
}: RelatedTreatmentsProps) {
  const related = treatments
    .filter((item: TreatmentItem) => item.slug !== `/treatments/${currentSlug}`)
    .slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Related treatments
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Explore other treatment options
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item: TreatmentItem) => (
            <TreatmentCard
              key={item.slug}
              title={item.title}
              description={item.description}
              href={item.slug}
            />
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-7 text-slate-600">
          Patients often explore related options such as{" "}
          <InternalLink href="/treatments/dental-implants">dental implants</InternalLink>,{" "}
          <InternalLink href="/treatments/orthodontics">orthodontics</InternalLink>,{" "}
          <InternalLink href="/treatments/cosmetic-dentistry">cosmetic dentistry</InternalLink>, and{" "}
          <InternalLink href="/treatments/teeth-whitening">teeth whitening</InternalLink> when planning
          long-term smile improvements.
        </p>
      </div>
    </section>
  );
}