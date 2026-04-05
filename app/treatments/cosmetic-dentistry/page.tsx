import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cosmetic Dentistry | Worsthorne Dental Clinic",
  description:
    "Explore cosmetic dentistry at Worsthorne Dental Clinic. Premium smile-enhancing care for patients across Burnley, Blackburn, Preston, Manchester, and the North West.",
  path: "/treatments/cosmetic-dentistry",
});

export default function CosmeticDentistryPage() {
  const treatment = getTreatmentBySlug("cosmetic-dentistry");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}