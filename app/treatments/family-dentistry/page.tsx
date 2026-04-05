import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Family Dentistry | Worsthorne Dental Clinic",
  description:
    "Explore family dentistry at Worsthorne Dental Clinic. Calm, modern, patient-first care for patients across Burnley, Blackburn, Preston, Manchester, and the North West.",
  path: "/treatments/family-dentistry",
});

export default function FamilyDentistryPage() {
  const treatment = getTreatmentBySlug("family-dentistry");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}