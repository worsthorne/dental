import { PageHero } from "@/components/shared/page-hero";
import { TreatmentCard } from "@/components/shared/treatment-card";
import { treatments, TreatmentItem } from "@/lib/data/treatments";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Treatments | Worsthorne Dental Clinic",
  description:
    "Explore dental treatments at Worsthorne Dental Clinic, including family dentistry, dental implants, orthodontics, cosmetic dentistry, periodontal treatment, teeth whitening, and root canal treatment.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Treatments"
        title="Advanced treatments presented with clarity, confidence, and premium care."
        description="Explore our main treatment areas and find the right next step, whether you are looking for routine care, restorative solutions, or smile-enhancing treatment."
      />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((item: TreatmentItem) => (
            <TreatmentCard
              key={item.slug}
              title={item.title}
              description={item.description}
              href={item.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}