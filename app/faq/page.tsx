import { PageHero } from "@/components/shared/page-hero";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { FAQSchema } from "@/components/schema/faq-schema";
import { InternalLink } from "@/components/shared/internal-link";
import { PremiumCta } from "@/components/shared/premium-cta";
import { buildMetadata } from "@/lib/seo";

const generalFaqs = [
  {
    question: "What kind of dental care does Worsthorne Dental Practice provide?",
    answer:
      "We provide a wide range of private dental care including routine examinations, hygiene treatment, family dentistry, restorative treatment, cosmetic dentistry, orthodontics, periodontal care, root canal treatment, oral surgery, and preventive care plans.",
  },
  {
    question: "Do you focus on preventive care or treatment only when problems arise?",
    answer:
      "Our approach is strongly prevention focused. We believe regular examinations, hygiene visits, and early diagnosis help patients avoid more complex and costly treatment later on.",
  },
  {
    question: "Can I contact the practice before deciding on treatment?",
    answer:
      "Yes. Many patients begin by reviewing our treatment pages and fees, then contacting the practice to discuss the best next step before booking.",
  },
  {
    question: "Do you offer care for both adults and children?",
    answer:
      "Yes. We provide care for adults and children, including routine examinations, preventive treatment, hygiene support, and age-appropriate guidance.",
  },
];

const appointmentsFaqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book by contacting the practice directly through the contact page or by speaking with the team to arrange the most suitable appointment.",
  },
  {
    question: "What happens at a new patient appointment?",
    answer:
      "A new patient appointment typically includes a detailed examination, discussion of concerns, review of your oral health, and radiographs where appropriate. This helps us understand your needs and recommend the right treatment path.",
  },
  {
    question: "Will I know the likely cost before treatment begins?",
    answer:
      "Yes. Patients should understand their options and likely costs clearly before committing to treatment.",
  },
  {
    question: "Can I book an emergency appointment?",
    answer:
      "Yes. Emergency consultations are available for urgent dental concerns such as pain, swelling, trauma, or other problems that need prompt assessment.",
  },
];

const hygieneFaqs = [
  {
    question: "What is included in a hygiene appointment?",
    answer:
      "A hygiene appointment may include removal of plaque and tartar, polishing where appropriate, support for gum health, and tailored advice on brushing and interdental cleaning.",
  },
  {
    question: "How often should I see the hygienist?",
    answer:
      "This depends on your oral health, gum condition, and how quickly plaque or tartar builds up. Some patients benefit from occasional visits, while others need more regular maintenance.",
  },
  {
    question: "Can hygiene treatment help with bleeding gums?",
    answer:
      "Yes. Bleeding gums are often linked to inflammation caused by plaque build-up. Professional hygiene care, together with improved home cleaning, can help improve gum health.",
  },
  {
    question: "Can hygiene visits help with staining and bad breath?",
    answer:
      "Yes. Hygiene treatment can reduce surface staining caused by tea, coffee, and smoking, and can also help with breath freshness by reducing plaque and gum irritation.",
  },
];

const familyFaqs = [
  {
    question: "What is family dentistry?",
    answer:
      "Family dentistry focuses on ongoing care for patients of different ages, helping households maintain regular attendance, prevention, and continuity of treatment.",
  },
  {
    question: "Can children be seen at the same practice as their parents?",
    answer:
      "Yes. Family dentistry makes it easier for households to access care in one practice environment with consistent support and guidance.",
  },
  {
    question: "Why is regular family dental care important?",
    answer:
      "Regular care supports early diagnosis, healthier habits, and better long-term outcomes for both adults and children.",
  },
];

const restorativeFaqs = [
  {
    question: "What is restorative dentistry?",
    answer:
      "Restorative dentistry includes treatment designed to repair or rebuild teeth, such as fillings, crowns, bridges, dentures, and other solutions that restore function and comfort.",
  },
  {
    question: "Do you offer white fillings?",
    answer:
      "Yes. Composite restorations are available for suitable cases and can provide a more natural-looking result.",
  },
  {
    question: "Do you provide crowns and bridges?",
    answer:
      "Yes. We offer several restorative options including zirconia crowns, ceramic-based crowns, and bridges depending on the clinical requirement.",
  },
  {
    question: "Can missing teeth be replaced?",
    answer:
      "Yes. Depending on suitability, options may include dentures, bridges, or implants.",
  },
];

const cosmeticFaqs = [
  {
    question: "What cosmetic treatments do you offer?",
    answer:
      "Cosmetic options may include stain removal, whitening, veneers, and other treatments aimed at improving smile appearance while maintaining oral health.",
  },
  {
    question: "Do you offer professional teeth whitening?",
    answer:
      "Yes. Professional whitening is available for suitable patients following assessment.",
  },
  {
    question: "Can you help with staining before a special event?",
    answer:
      "Yes. Treatments such as stain removal and whitening can be discussed depending on your goals, timescale, and suitability.",
  },
];

const orthodonticsFaqs = [
  {
    question: "Do you provide orthodontic assessments?",
    answer:
      "Yes. Orthodontic assessments are available to help determine whether straightening treatment may be appropriate.",
  },
  {
    question: "What orthodontic options are available?",
    answer:
      "Orthodontic options may include fixed brackets and clear aligners, depending on the complexity of the case and your treatment goals.",
  },
  {
    question: "How do I know whether braces or aligners are suitable for me?",
    answer:
      "That is determined at assessment. The condition of the teeth, bite, spacing, and complexity of movement all influence the most suitable option.",
  },
];

const periodontalFaqs = [
  {
    question: "What is periodontal treatment?",
    answer:
      "Periodontal treatment focuses on the health of the gums and supporting structures around the teeth. It can include assessment, deep cleaning, and supportive maintenance.",
  },
  {
    question: "When might I need periodontal care?",
    answer:
      "You may benefit from periodontal care if you have bleeding gums, gum tenderness, tartar build-up, gum recession, or signs of more advanced gum disease.",
  },
  {
    question: "What is root surface debridement?",
    answer:
      "Root surface debridement is a deeper cleaning treatment used to remove deposits below the gumline and support gum healing where more advanced care is needed.",
  },
];

const rootCanalFaqs = [
  {
    question: "What is root canal treatment?",
    answer:
      "Root canal treatment is used when the inside of a tooth becomes inflamed or infected. It aims to remove the affected tissue, clean the root canals, and preserve the tooth.",
  },
  {
    question: "Can root canal treatment save my tooth?",
    answer:
      "In many cases, yes. Root canal treatment is designed to preserve a tooth that might otherwise need extraction.",
  },
  {
    question: "Is root canal treatment always done in one visit?",
    answer:
      "Not always. Some cases involve staged treatment depending on the condition of the tooth and the complexity involved.",
  },
];

const oralSurgeryFaqs = [
  {
    question: "Do you offer extractions?",
    answer:
      "Yes. We offer routine extractions and surgical extractions where appropriate.",
  },
  {
    question: "What is the difference between a routine extraction and a surgical extraction?",
    answer:
      "A routine extraction is generally simpler. A surgical extraction is more complex and may be needed when access is more difficult or the tooth cannot be removed in a straightforward way.",
  },
  {
    question: "Do you offer oral cancer screening?",
    answer:
      "Yes. Cancer screening is available and includes referral where required.",
  },
];

const childrenFaqs = [
  {
    question: "What treatment is available for children?",
    answer:
      "Children’s treatment may include routine examinations, topical fluoride application, radiographs where appropriate, fissure sealants, restorations for deciduous teeth, and extractions when needed.",
  },
  {
    question: "Are orthodontic assessments available for children?",
    answer:
      "Yes. Orthodontic assessment and referral can be discussed for children, usually following a routine dental examination first.",
  },
  {
    question: "Why are fissure sealants helpful for children?",
    answer:
      "Fissure sealants help protect the grooves of back teeth and can reduce the risk of decay in children who are still developing long-term oral care habits.",
  },
];

const feesFaqs = [
  {
    question: "Do you provide clear fees before treatment starts?",
    answer:
      "Yes. Fee transparency is important and patients should understand likely costs before they proceed.",
  },
  {
    question: "Can I spread the cost of care through a plan?",
    answer:
      "Yes. The Smilecare Plan is available for regular attending patients and includes routine care together with discounts on treatment.",
  },
  {
    question: "What is included in the Smilecare Plan?",
    answer:
      "The Smilecare Plan includes one yearly routine examination with screening radiographs where appropriate, two hygiene visits per year, and 10% discount on treatments covered by the scheme.",
  },
  {
    question: "Can I cancel the Smilecare Plan?",
    answer:
      "Yes. The scheme can be cancelled whenever you wish.",
  },
];

const allFaqs = [
  ...generalFaqs,
  ...appointmentsFaqs,
  ...hygieneFaqs,
  ...familyFaqs,
  ...restorativeFaqs,
  ...cosmeticFaqs,
  ...orthodonticsFaqs,
  ...periodontalFaqs,
  ...rootCanalFaqs,
  ...oralSurgeryFaqs,
  ...childrenFaqs,
  ...feesFaqs,
];

export const metadata = buildMetadata({
  title: "FAQs | Worsthorne Dental Clinic",
  description:
    "Explore frequently asked questions about treatment, hygiene, family dentistry, orthodontics, periodontal care, fees, Smilecare Plan, emergencies, and patient care at Worsthorne Dental Clinic.",
  path: "/faqs",
});

function FaqSection({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
            FAQ Section
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
          ) : null}
        </div>

        <div className="mt-8">
          <FAQAccordion items={items} />
        </div>
      </div>
    </section>
  );
}

export default function FaqsPage() {
  return (
    <main>
      <FAQSchema items={allFaqs} />

      <PageHero
        eyebrow="FAQs"
        title="Comprehensive answers across treatment, care, fees, and patient support."
        description="This page brings together our most common questions across appointments, hygiene, family dentistry, restorative treatment, orthodontics, periodontal care, root canal treatment, children’s dentistry, fees, and Smilecare Plan membership."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Patients often move between our{" "}
            <InternalLink href="/treatments">treatment pages</InternalLink>, our{" "}
            <InternalLink href="/fees">fees page</InternalLink>, our{" "}
            <InternalLink href="/testimonials">testimonials</InternalLink>, and our{" "}
            <InternalLink href="/contact">contact page</InternalLink> before
            deciding on the next step. This FAQ page is here to make that
            process clearer and more reassuring.
          </p>
        </div>
      </section>

      <FaqSection
        title="General Care and Patient Approach"
        description="Our overall approach to preventive, calm, patient-first private dentistry."
        items={generalFaqs}
      />

      <FaqSection
        title="Appointments and Emergencies"
        description="Booking, consultations, first visits, and urgent care."
        items={appointmentsFaqs}
      />

      <FaqSection
        title="Hygiene Treatment"
        description="Support for cleaner teeth, healthier gums, and better long-term prevention."
        items={hygieneFaqs}
      />

      <FaqSection
        title="Family Dentistry"
        description="Ongoing care for households who want regular, consistent support."
        items={familyFaqs}
      />

      <FaqSection
        title="Restorative Dentistry"
        description="Repairs, rebuilds, and long-term support for damaged or missing teeth."
        items={restorativeFaqs}
      />

      <FaqSection
        title="Cosmetic Dentistry"
        description="Whitening, stain removal, veneers, and smile-enhancing treatment."
        items={cosmeticFaqs}
      />

      <FaqSection
        title="Orthodontics"
        description="Assessment, braces, aligners, and straightening options."
        items={orthodonticsFaqs}
      />

      <FaqSection
        title="Periodontal and Gum Care"
        description="Assessment and treatment for gum health and supporting structures."
        items={periodontalFaqs}
      />

      <FaqSection
        title="Root Canal Treatment"
        description="Saving teeth where the nerve or inner structure has become affected."
        items={rootCanalFaqs}
      />

      <FaqSection
        title="Oral Surgery"
        description="Extractions, surgical extractions, and oral cancer screening."
        items={oralSurgeryFaqs}
      />

      <FaqSection
        title="Children’s Dentistry"
        description="Prevention, examinations, fissure sealants, and supportive younger patient care."
        items={childrenFaqs}
      />

      <FaqSection
        title="Fees and Smilecare Plan"
        description="Transparent pricing, included care, and ongoing value through preventive membership."
        items={feesFaqs}
      />

      <PremiumCta
        title="Still have a question about treatment or costs?"
        text="Contact the practice and we’ll help you understand the most suitable next step clearly, calmly, and without pressure."
      />
    </main>
  );
}