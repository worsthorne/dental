export type CaseStudyItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  patientGoal: string;
  challenge: string;
  approach: string;
  treatmentPlan: string[];
  result: string;
  location: string;
  relatedTreatmentHrefs: {
    label: string;
    href: string;
  }[];
};

export const caseStudies: CaseStudyItem[] = [
  {
    slug: "smile-restoration",
    title: "Smile Restoration",
    category: "Dental Implants",
    summary:
      "A carefully planned restorative journey that rebuilt confidence, bite function, and natural aesthetics.",
    image: "/case-studies/smile-restoration.jpg",
    patientGoal:
      "The patient wanted to restore confidence in their smile while improving everyday comfort, chewing function, and overall appearance.",
    challenge:
      "The main challenge was balancing aesthetics with long-term stability. The treatment needed to feel natural, improve function, and support a confident result without looking overdone.",
    approach:
      "We began with a careful consultation and treatment planning phase, focusing on the patient’s priorities, facial balance, bite, and restorative needs. A calm, step-by-step approach helped the patient feel informed and comfortable throughout.",
    treatmentPlan: [
      "Detailed consultation and clinical assessment",
      "Restorative treatment planning based on function and aesthetics",
      "Implant-led approach to rebuild support and confidence",
      "Final refinement to achieve a natural-looking result",
    ],
    result:
      "The final outcome restored confidence, improved bite function, and delivered a more natural and balanced smile. Just as importantly, the patient felt reassured throughout the process and understood each stage clearly.",
    location: "Burnley",
    relatedTreatmentHrefs: [
      { label: "Dental Implants", href: "/treatments/dental-implants" },
      { label: "Cosmetic Dentistry", href: "/treatments/cosmetic-dentistry" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "subtle-smile-enhancement",
    title: "Subtle Smile Enhancement",
    category: "Cosmetic Dentistry",
    summary:
      "A refined cosmetic treatment plan designed to brighten and rebalance the smile naturally.",
    image: "/case-studies/smile-enhancement.jpg",
    patientGoal:
      "The patient wanted a fresher, brighter, more balanced smile without losing a natural appearance.",
    challenge:
      "The key challenge was achieving noticeable improvement while keeping the final result subtle, proportionate, and in keeping with the patient’s features.",
    approach:
      "We focused on careful listening during consultation, understanding the level of change the patient wanted, and planning treatment around refinement rather than exaggeration.",
    treatmentPlan: [
      "Cosmetic consultation and smile assessment",
      "Discussion of whitening and aesthetic treatment options",
      "Subtle treatment planning focused on balance and tone",
      "Final review to ensure the result felt natural and confident",
    ],
    result:
      "The patient achieved a brighter, more polished smile with improved balance and confidence, while still looking completely natural.",
    location: "Blackburn",
    relatedTreatmentHrefs: [
      { label: "Cosmetic Dentistry", href: "/treatments/cosmetic-dentistry" },
      { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
      { label: "Fees", href: "/fees" },
    ],
  },
  {
    slug: "healthier-gum-foundation",
    title: "Healthier Gum Foundation",
    category: "Periodontal Treatment",
    summary:
      "Targeted treatment that improved gum health, comfort, and long-term oral stability.",
    image: "/case-studies/gum-foundation.jpg",
    patientGoal:
      "The patient wanted to improve gum health, reduce ongoing discomfort, and create a stronger foundation for long-term oral health.",
    challenge:
      "The challenge was not just managing symptoms, but creating a treatment path that improved stability and gave the patient confidence in maintaining progress.",
    approach:
      "We took a supportive and education-led approach, explaining gum health clearly and building a treatment plan around comfort, clarity, and long-term improvement.",
    treatmentPlan: [
      "Comprehensive periodontal assessment",
      "Clinical guidance on gum health priorities",
      "Targeted treatment to improve comfort and stability",
      "Ongoing maintenance advice and review",
    ],
    result:
      "The patient saw meaningful improvement in gum comfort, stability, and confidence, with a clearer understanding of long-term oral health maintenance.",
    location: "Preston",
    relatedTreatmentHrefs: [
      { label: "Periodontal Treatment", href: "/treatments/periodontal-treatment" },
      { label: "Family Dentistry", href: "/treatments/family-dentistry" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(
    (item) => item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );
}