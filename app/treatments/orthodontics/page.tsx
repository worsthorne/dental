import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Orthodontics | Worsthorne Dental Clinic",
  description:
    "Explore orthodontic treatment at Worsthorne Dental Clinic. Premium care for patients across Burnley, Blackburn, Preston, Manchester, and the North West.",
  path: "/treatments/orthodontics",
});

export default function OrthodonticsPage() {
  const treatment = getTreatmentBySlug("orthodontics");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}