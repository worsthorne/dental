import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/data/treatment-pages";
import { TreatmentTemplate } from "@/components/treatments/treatment-template";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Root Canal Treatment | Worsthorne Dental Clinic",
  description:
    "Explore root canal treatment at Worsthorne Dental Clinic. Precise, supportive care for patients across Burnley, Blackburn, Preston, Manchester, and the North West.",
  path: "/treatments/root-canal-treatment",
});

export default function RootCanalTreatmentPage() {
  const treatment = getTreatmentBySlug("root-canal-treatment");

  if (!treatment) return notFound();

  return <TreatmentTemplate treatment={treatment} />;
}