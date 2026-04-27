export type TreatmentPageData = {
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroText: string;
  benefits: string[];
  whoItsFor: string[];
  process: string[];
  outcomesTitle: string;
  outcomesText: string;
  heroImage?: string;
heroImageAlt?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const treatmentPages: TreatmentPageData[] = [
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    shortDescription:
      "Preventive and routine care designed to support healthy smiles at every stage of life.",
    heroTitle: "Family dentistry with comfort, consistency, and long-term care in mind.",
    heroText:
      "Our family dentistry approach focuses on prevention, reassurance, and a calm patient experience for both routine visits and ongoing oral health support.",
    heroImage: "/treatments/family-dentistry.jpg",
    heroImageAlt: "Family dentistry consultation at Worsthorne Dental Practice",
    benefits: [
      "Preventive care built around long-term oral health",
      "A calm and supportive environment for all ages",
      "Consistent advice tailored to changing dental needs",
    ],
    whoItsFor: [
      "Patients looking for regular dental check-ups",
      "Families wanting dependable ongoing care",
      "Anyone seeking preventive support and early treatment",
    ],
    process: [
      "Initial consultation and assessment",
      "Receive detailed treatment plan",
      "Schedule booking for treatment",
      "Ongoing care with regular follow-up visits- smile care plans available for added support",
    ],
    outcomesTitle: "Trusted routine care that supports confidence over time.",
    outcomesText:
      "Family dentistry is about more than check-ups. It helps patients stay informed, catch issues early, and feel supported by a team they know and trust.",
    faqs: [
      {
        question: "How often should I book a dental check-up?",
        answer:
          "That depends on your oral health needs, but many patients benefit from regular reviews to maintain healthy teeth and gums.",
      },
      {
        question: "Can children and adults both be seen?",
        answer:
          "Yes. Family dentistry is designed to support patients across different age groups with appropriate care and guidance.",
      },
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "A stable, long-term solution for replacing missing teeth with confidence and function.",
    heroTitle: "Dental implants with precision, stability, and premium restorative care.",
    heroText:
      "Dental implants offer a long-term restorative option for patients who want secure function, natural aesthetics, and a treatment plan built around lasting results.",
    benefits: [
      "Replace missing teeth securely",
      "Restore confidence and everyday function",
      "Support a natural-looking smile and bite",
    ],
    whoItsFor: [
      "Patients with one or more missing teeth",
      "People looking for a long-term restorative option",
      "Anyone wanting improved stability and confidence",
    ],
    process: [
      "Consultation and suitability assessment",
      "Planning, scans, and imaging",
      "Implant placement",
      "Healing period and final restoration",
    ],
    outcomesTitle: "A secure restorative result that feels considered and life-enhancing.",
    outcomesText:
      "Dental implants can restore bite function, smile confidence, and everyday comfort while supporting a highly natural-looking result.",
    faqs: [
      {
        question: "Are dental implants painful?",
        answer:
          "Treatment is carefully planned and managed for comfort, with each stage explained clearly before you begin.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "With appropriate care and maintenance, dental implants can be a durable long-term restorative solution.",
      },
    ],
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    shortDescription:
      "Carefully planned alignment treatments designed to improve balance, function, and confidence.",
    heroTitle: "Orthodontic treatment designed for straighter smiles and better balance.",
    heroText:
      "Orthodontics can improve both smile aesthetics and alignment, helping patients feel more confident while supporting overall oral function.",
   heroImage: "/treatments/orthodontics.jpg",
heroImageAlt: "Orthodontic consultation at Worsthorne Dental Practice",
      benefits: [
      "Improve smile alignment and symmetry",
      "Support better bite function",
      "Create a more balanced appearance",
    ],
    whoItsFor: [
      "Patients concerned about crooked or crowded teeth",
      "People looking to improve alignment",
      "Those wanting a straighter smile with professional planning",
    ],
    process: [
      "Consultation and smile assessment",
      "Treatment planning",
      "Active alignment treatment",
      "Review and retention phase",
    ],
    outcomesTitle: "A more aligned smile with greater confidence and harmony.",
    outcomesText:
      "Orthodontic care can improve how teeth sit, how the smile looks, and how patients feel about their appearance over time.",
    faqs: [
      {
        question: "Is orthodontic treatment only cosmetic?",
        answer:
          "No. It can also support bite function, alignment, and overall oral balance as well as appearance.",
      },
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "Treatment length varies depending on the complexity of the case and the goals of the plan.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription:
      "Smile-enhancing treatments designed for confidence, refinement, and natural-looking aesthetics.",
    heroTitle: "Cosmetic dentistry with elegance, subtlety, and beautifully considered results.",
    heroText:
      "Cosmetic dentistry should feel refined rather than overdone. Our approach focuses on balance, confidence, and results that still look natural.",
    heroImage: "/treatments/cosmetic-dentistry.jpg",
heroImageAlt: "Cosmetic dentistry consultation at Worsthorne Dental Practice",
      benefits: [
      "Enhance the brightness and balance of your smile",
      "Improve confidence with natural-looking results",
      "Tailor treatment to your features and goals",
    ],
    whoItsFor: [
      "Patients wanting to improve smile aesthetics",
      "People seeking subtle enhancement rather than drastic change",
      "Anyone planning a smile refresh with expert guidance",
    ],
    process: [
      "Consultation and smile goals discussion",
      "Assessment and treatment planning",
      "Cosmetic treatment delivery",
      "Review and refinement where needed",
    ],
    outcomesTitle: "A brighter, more balanced smile that still feels like you.",
    outcomesText:
      "Cosmetic treatment works best when it feels thoughtful, proportionate, and tailored to the individual rather than generic or excessive.",
    faqs: [
      {
        question: "Will cosmetic dentistry look natural?",
        answer:
          "That should always be the goal. Treatment is planned to enhance your smile while keeping the result balanced and believable.",
      },
      {
        question: "What treatments count as cosmetic dentistry?",
        answer:
          "This can include whitening, bonding, veneers, smile design, and other aesthetic improvements depending on your needs.",
      },
    ],
  },
  {
    slug: "periodontal-treatment",
    name: "Periodontal Treatment",
    shortDescription:
      "Advanced gum care focused on protecting oral health and long-term stability.",
    heroTitle: "Periodontal treatment that protects the foundation of a healthy smile.",
    heroText:
      "Healthy gums are essential for long-term oral health. Periodontal treatment focuses on managing gum concerns early and supporting a stronger foundation for the future.",
      heroImage: "/treatments/periodontal-treatment.jpg",
    heroImageAlt: "Periodontal treatment at Worsthorne Dental Practice",
      benefits: [
      "Support healthier gums and oral stability",
      "Protect the foundation of the teeth",
      "Improve comfort and long-term maintenance",
    ],
    whoItsFor: [
      "Patients experiencing gum concerns",
      "People wanting to improve long-term oral stability",
      "Anyone advised to seek professional gum treatment",
    ],
    process: [
      "Diagnosis and Radiographic Assessment ",
      "Full mouth periodontal pocket chart with Plaque & Bleeding Chart",
      "Root Surface Debridement of affected sextants ",
      "Three monthly reviews and maintenance support",
    ],
    outcomesTitle: "Stronger gum health and better long-term support for your smile.",
    outcomesText:
      "Managing gum health early can improve comfort, reduce progression of problems, and help support the long-term condition of the teeth.",
    faqs: [
      {
        question: "Why is gum health so important?",
        answer:
          "Gums support the teeth and play a major role in overall oral stability, comfort, and maintenance.",
      },
      {
        question: "Can periodontal issues improve with treatment?",
        answer:
          "Professional treatment and ongoing maintenance can help manage gum concerns and support healthier outcomes.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription:
      "Professional whitening designed for a brighter, fresher, more polished smile.",
    heroTitle: "Professional teeth whitening for a cleaner, brighter, more confident smile.",
    heroText:
      "Teeth whitening is one of the most effective ways to refresh a smile. Professional treatment is designed to deliver clearer, more reliable results than guesswork at home.",
  heroImage: "/treatments/teeth-whitening.jpg",
heroImageAlt: "Teeth whitening consultation at Worsthorne Dental Practice",
      benefits: [
      "Brighten the smile safely and effectively",
      "Refresh your appearance with minimal disruption",
      "Achieve more reliable results than many over-the-counter options",
    ],
    whoItsFor: [
      "Patients wanting a brighter smile",
      "People preparing for events or professional occasions",
      "Anyone looking for a fast but noticeable smile refresh",
    ],
    process: [
      "Consultation and suitability check",
      "Shade assessment",
      "Professional whitening treatment",
      "Aftercare guidance and maintenance advice",
    ],
    outcomesTitle: "A fresher smile that looks brighter without feeling overdone.",
    outcomesText:
      "Professional whitening can lift the overall appearance of the smile and help patients feel more polished, confident, and photo-ready.",
    faqs: [
      {
        question: "Is professional teeth whitening better than home kits?",
        answer:
          "Professional whitening is typically more controlled, more predictable, and tailored more carefully to the patient.",
      },
      {
        question: "How long do whitening results last?",
        answer:
          "That varies depending on lifestyle, aftercare, and individual factors, but good maintenance helps extend results.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    shortDescription:
      "Precise restorative treatment designed to relieve discomfort and help save natural teeth.",
    heroTitle: "Root canal treatment delivered with precision, reassurance, and care.",
    heroText:
      "Root canal treatment is about preserving the natural tooth where possible while relieving discomfort and restoring stability with a carefully managed approach.",
    heroImage: "/treatments/root-canal-treatment.jpg",
    heroImageAlt: "Root canal treatment at Worsthorne Dental Practice",
      benefits: [
      "Help save the natural tooth",
      "Relieve discomfort and support restoration",
      "Restore function with a planned clinical approach",
    ],
    whoItsFor: [
      "Patients with tooth pain or infection-related concerns",
      "People advised that a tooth may need endodontic treatment",
      "Anyone wanting to preserve a natural tooth where appropriate",
    ],
    process: [
      "Pulp Extirpation- this is when we remove the infected pulp inside your tooth which all alleviate pain",
      "Medicine is placed inside the root canal to kill off all the bacteria and sterilise the tooth",
      "The root canal system is then filled to prevent further bacteria accumulating and causing harm",
      "If necessary, then a crown is placed for a complete seal and structural support",
    ],
    outcomesTitle: "A more comfortable, stable result with the aim of preserving the tooth.",
    outcomesText:
      "Root canal treatment can help remove the source of infection or inflammation while supporting the long-term preservation of the natural tooth.",
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "Modern treatment is designed to be carefully managed and as comfortable as possible, with clear explanation throughout.",
      },
      {
        question: "Why not just remove the tooth?",
        answer:
          "Where appropriate, preserving the natural tooth can often be the better long-term option for function and structure.",
      },
    ],
  },
];

export function getTreatmentBySlug(slug: string) {
  return treatmentPages.find((item) => item.slug === slug);
}