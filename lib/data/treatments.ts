export type TreatmentItem = {
  title: string;
  slug: string;
  description: string;
};

export const treatments: TreatmentItem[] = [
  {
    title: "Family Dentistry",
    slug: "/treatments/family-dentistry",
    description:
      "Preventive and routine care designed to support healthy smiles through every stage of life.",
  },
  {
    title: "Dental Hygiene",
    slug: "/treatments/hygiene-treatment",
    description:
      "A long-term restorative solution focused on confidence, stability, and natural function.",
  },
  {
    title: "Orthodontics",
    slug: "/treatments/orthodontics",
    description:
      "Carefully planned alignment treatments to improve function, symmetry, and smile confidence.",
  },
  {
    title: "Cosmetic Dentistry",
    slug: "/treatments/cosmetic-dentistry",
    description:
      "Smile-enhancing care tailored to balance, refinement, and beautifully natural-looking results.",
  },
  {
    title: "Periodontal Treatment",
    slug: "/treatments/periodontal-treatment",
    description:
      "Advanced gum care focused on protecting long-term oral health and supporting lasting stability.",
  },
  {
    title: "Teeth Whitening",
    slug: "/treatments/teeth-whitening",
    description:
      "Professional whitening solutions for a brighter, fresher, and more polished smile.",
  },
  {
    title: "Root Canal Treatment",
    slug: "/treatments/root-canal-treatment",
    description:
      "Sensitive, precise restorative treatment designed to relieve discomfort and save natural teeth.",
  },
];