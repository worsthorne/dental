import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Teeth Whitening | Worsthorne Dental Clinic",
  description:
    "Professional teeth whitening at Worsthorne Dental Clinic for patients across Burnley, Blackburn, Preston, Manchester, and the North West.",
  path: "/treatments/teeth-whitening",
});

export default function TeethWhiteningPage() {
  const treatment = getTreatmentBySlug("teeth-whitening");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}