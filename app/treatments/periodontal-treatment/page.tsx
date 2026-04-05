import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Periodontal Treatment | Worsthorne Dental Clinic",
  description:
    "Explore periodontal treatment at Worsthorne Dental Clinic. Advanced gum care for patients across Burnley, Blackburn, Preston, Manchester, and the North West.",
  path: "/treatments/periodontal-treatment",
});

export default function PeriodontalTreatmentPage() {
  const treatment = getTreatmentBySlug("periodontal-treatment");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}