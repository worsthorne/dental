import { PageHero } from "@/components/shared/page-hero";
import { PremiumCta } from "@/components/shared/premium-cta";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { InternalLink } from "@/components/shared/internal-link";
import { FAQSchema } from "@/components/schema/faq-schema";
import { buildMetadata } from "@/lib/seo";

const feeSections = [
  {
    title: "Assessment and Diagnostics",
    rows: [
      ["Routine dental exam", "£55"],
      ["New patient examination and radiographs", "£105"],
      ["Dental emergency consultation", "£85"],
      ["Dental radiography", "£65"],
      ["Orthodontic assessment", "£165"],
    ],
  },
  {
    title: "Periodontal Treatment",
    rows: [
      ["Dental hygiene visit", "£75"],
      ["First dental hygiene visit", "£85"],
      ["Full periodontal assessment", "£175"],
      ["Root surface debridement", "£280 per session"],
      ["Dentomycin administration", "£80"],
    ],
  },
  {
    title: "Dental & Facial Aesthetics",
    rows: [
      ["Diamond Airflow stain removal", "£100"],
      ["Night Boutique Advanced dental whitening", "£465"],
      ["Facial anti-wrinkle assessment", "FREE"],
      ["Botox™ administration", "from £200"],
    ],
    notes: ["Includes complimentary top-up if required."],
  },
  {
    title: "Restorative Dentistry",
    rows: [
      ["Anterior composite restorations", "from £250 per tooth"],
      ["Posterior composite restorations", "from £300 per tooth"],
      ["Silver (amalgam) restorations", "from £150 per tooth"],
      ["Emergency dressing", "£90"],
      ["Endodontic therapy stage 1 – pulpal extirpation", "£150"],
      ["Endodontic therapy stage 2 – root canal filling", "from £300"],
      ["Zirconia aesthetic white crown", "£750"],
      ["Metal fused to ceramic crown", "£650"],
      ["Full metal stainless steel crown", "£500"],
      ["Cosmetic veneer", "from £500 per tooth"],
      ["Ceramic bridge", "from £700 per unit"],
    ],
  },
  {
    title: "Prosthetics",
    rows: [
      ["Full single arch acrylic denture", "£1500"],
      ["Complete upper & lower acrylic dentures", "£2500"],
      ["Partial single arch acrylic denture", "from £600"],
      ["Valplast ‘Flexy’ single arch denture", "from £900"],
      ["Cobalt chrome denture (per arch)", "from £1500"],
      ["Addition of tooth to denture", "£100 per tooth"],
      ["Acrylic denture repair", "£90"],
    ],
    notes: ["Denture must be left overnight for repair."],
  },
  {
    title: "Orthodontics",
    rows: [
      ["Fixed brackets", "from £1500 per arch"],
      ["Clear aligners", "from £175 per aligner"],
    ],
    notes: ["Fixed bracket cost depends on complexity.", "Number of aligners is based on assessment."],
  },
  {
    title: "Oral Surgery",
    rows: [
      ["Cancer screening", "FREE"],
      ["Tooth extraction", "from £150"],
      ["Surgical extraction", "from £300"],
    ],
    notes: ["Cancer screening includes referral if required.", "Surgical extraction excludes impacted teeth."],
  },
  {
    title: "Children (0–16 years)",
    rows: [
      ["Routine dental exam with topical fluoride application", "£55"],
      ["Dental radiography", "£65"],
      ["Deciduous tooth restoration", "£50"],
      ["Deciduous tooth extraction", "£100"],
      ["Orthodontic assessment and referral", "FREE"],
      ["Preventative fissure sealants", "£25 per arch"],
    ],
    notes: [
      "Restorations on permanent teeth are charged at normal adult cost.",
      "Extractions of permanent teeth are charged at normal adult cost.",
      "Orthodontic assessment and referral requires a routine dental exam first.",
    ],
  },
];

const smilecareBenefits = [
  "One yearly routine examination including screening radiographs, normally £120",
  "Two hygiene visits per year, normally £75 per session",
  "10% discount on all treatments, including emergency consultations, oral hygiene products, extra hygienist appointments and non-screening radiographs",
  "Children aged 0–16 receive free dental treatment for fissure sealants, topical fluoride application, restorations and extractions of deciduous (baby) teeth, in addition to their two hygiene visits per year",
];

const feeFaqs = [
  {
    question: "Are fees confirmed before treatment begins?",
    answer:
      "Yes. Patients should understand their treatment options and likely costs clearly before committing.",
  },
  {
    question: "Can I discuss treatment options before deciding?",
    answer:
      "Absolutely. Many patients review our treatment pages first and then use a consultation to understand which route is most suitable.",
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

export const metadata = buildMetadata({
  title: "Fees | Worsthorne Dental Clinic",
  description:
    "View fees at Worsthorne Dental Clinic, including treatment pricing, hygiene, restorative dentistry, children’s fees, and Smilecare Plan information.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <main>
      <FAQSchema items={feeFaqs} />

      <PageHero
        eyebrow="Fees"
        title="Clear pricing and supportive guidance before treatment begins."
        description="Patients should feel informed before they commit. This page gives a calm, transparent overview of treatment fees, preventive care, and Smilecare Plan membership."
      />

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            Fee transparency matters. Patients often review our{" "}
            <InternalLink href="/treatments">treatments</InternalLink>, read{" "}
            <InternalLink href="/case-studies">case studies</InternalLink>, and then speak to our team via the{" "}
            <InternalLink href="/contact">contact page</InternalLink> to discuss the best next step.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Smilecare Plan
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              A prevention plan for regular attending patients
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This loyalty scheme is paid by monthly direct debit and is designed
              to include core routine care while giving discounts on other
              treatment. It is structured to save regular attending patients
              money over time.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f4faf4] p-6">
              <p className="text-sm font-medium text-slate-600">Monthly option</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
                £22<span className="text-lg font-medium text-slate-600"> / month</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Plus a one-off joining fee of <strong>£12</strong> paid to Smilecare Ltd.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-stone-50 p-6">
              <p className="text-sm font-medium text-slate-600">Annual option</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
                £264<span className="text-lg font-medium text-slate-600"> / year</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Pay yearly at the Practice and avoid monthly direct debits and the joining fee.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {smilecareBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl bg-stone-50 px-5 py-5 text-sm leading-7 text-slate-700"
              >
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-5 py-5">
            <p className="text-sm leading-7 text-slate-600">
              Screening radiographs are routinely completed every 2 years based on your risk
              assessment. Radiographs taken outside the plan are discounted by 10%.
              The children’s benefits do not include cosmetic fillings or adult tooth
              restorations and extractions. You can cancel the scheme whenever you wish.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Fees guide
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Treatment fees at Worsthorne Dental Clinic
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Below is a guide to our fees across consultations, hygiene,
              restorative dentistry, prosthetics, orthodontics, oral surgery,
              and children’s treatment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {feeSections.map((section, index) => (
              <div
                key={section.title}
                className={`rounded-[2rem] border border-slate-200 p-6 shadow-sm sm:p-8 ${
                  index % 2 === 1 ? "bg-[#f4faf4]" : "bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {section.title}
                </h3>

                <div className="mt-5 space-y-3">
                  {section.rows.map(([label, price]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 rounded-2xl bg-white/80 px-4 py-4"
                    >
                      <span className="text-sm font-medium leading-6 text-slate-700">
                        {label}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-slate-950">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>

                {section.notes ? (
                  <div className="mt-5 space-y-2">
                    {section.notes.map((note) => (
                      <p key={note} className="text-sm leading-7 text-slate-500">
                        {note}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl">
          <FAQAccordion items={feeFaqs} />
        </div>
      </section>

      <PremiumCta
        title="Want to discuss the right treatment and likely costs?"
        text="Book a consultation and we’ll help you understand the best route clearly, calmly, and without pressure."
      />
    </main>
  );
}