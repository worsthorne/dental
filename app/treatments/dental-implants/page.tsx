import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dental Implants | Worsthorne Dental Clinic",
  description:
    "Explore dental implants at Worsthorne Dental Clinic. Premium restorative care for patients in Burnley, Blackburn, Preston, Manchester, and across the North West.",
  path: "/treatments/dental-implants",
});

export default function DentalImplantsPage() {
  const treatment = getTreatmentBySlug("dental-implants");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}