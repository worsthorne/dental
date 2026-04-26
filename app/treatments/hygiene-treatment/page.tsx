import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hygiene Treatment & Care Plan | Worsthorne Dental Practice",
  description:
    "Professional hygiene treatment and tailored care plans at Worsthorne Dental Practice. Protect your teeth, gums, and long-term oral health with preventive care in a calm, premium setting.",
};

const includedItems = [
  "Comprehensive gum health assessment",
  "Professional scale and polish",
  "Plaque and tartar removal",
  "Advice on brushing and interdental cleaning",
  "Personalised recommendations based on your mouth and lifestyle",
  "Long-term prevention focused care",
];

const commonConcerns = [
  {
    title: "Bleeding gums",
    text: "Bleeding when brushing is often one of the earliest signs that your gums need attention. A hygiene visit can help reduce inflammation and stop small problems from becoming more serious.",
  },
  {
    title: "Bad breath",
    text: "Persistent bad breath can be linked to plaque build-up, gum irritation, or areas that are difficult to clean properly at home. Professional hygiene treatment can make a real difference.",
  },
  {
    title: "Tartar and staining",
    text: "Tea, coffee, smoking, and everyday plaque build-up can leave the teeth looking dull or discoloured. A professional clean helps restore a fresher, healthier appearance.",
  },
  {
    title: "Gum tenderness or recession",
    text: "Sensitive or receding gums should not be ignored. Regular monitoring and preventive care can help protect the supporting structures around the teeth.",
  },
];

const carePlanBenefits = [
  "Regular hygiene appointments at planned intervals",
  "Ongoing monitoring of your gum health",
  "A more structured preventive approach",
  "Better long-term value than waiting for problems to develop",
  "Support and guidance tailored to your oral health needs",
  "A calmer, more confident route to maintaining your smile",
];

export default function HygieneTreatmentAndCarePlanPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-black/5 bg-[linear-gradient(to_bottom,rgb(217, 241, 194),rgba(255,255,255,1))]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">
              Hygiene Treatment & Care Plan
            </p>
            <h1 className="max-w-4xl text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Professional hygiene care designed to protect your smile long term
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              At Worsthorne Dental Practice, hygiene treatment is about far more
              than a quick polish. It is an important part of protecting your
              teeth, supporting healthy gums, improving comfort, and reducing
              the risk of future dental problems. Our approach is calm,
              detailed, and prevention focused.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book a hygiene appointment
              </Link>
              <Link
                href="/fees"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                View fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Why hygiene treatment matters
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Prevention is always better than repair
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Even patients who brush carefully every day can develop plaque
                and tartar in areas that are difficult to reach. Over time, this
                can contribute to gum inflammation, bleeding, unpleasant breath,
                staining, and in more advanced cases, loss of support around the
                teeth.
              </p>
              <p>
                Professional hygiene treatment helps remove what daily brushing
                alone cannot manage. It also gives you the benefit of tailored
                advice, so your home care becomes more effective and easier to
                maintain.
              </p>
              <p>
                For many patients, regular hygiene visits are one of the most
                valuable investments they can make in their oral health. They
                help preserve comfort, appearance, and confidence while reducing
                the chance of more complex treatment later on.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-slate-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              What is included
            </p>
            <ul className="mt-5 space-y-4">
              {includedItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-700" />
                  <span className="text-sm leading-7 text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Common reasons patients book
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Signs your mouth may benefit from hygiene treatment
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {commonConcerns.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Hygiene appointments
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-slate-950 sm:text-4xl">
              A careful, personalised approach at every visit
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                No two mouths are the same. Some patients need occasional
                maintenance to keep staining and tartar under control. Others
                need more regular support because of gum inflammation, crowding,
                restorations, or a history of periodontal issues.
              </p>
              <p>
                At your appointment, we look at the condition of your gums, the
                build-up present, the areas that are more difficult for you to
                clean, and the small habits that may be affecting your oral
                health. From there, we guide you toward the right maintenance
                pattern.
              </p>
              <p>
                The aim is not simply to clean the teeth for today. The aim is
                to help you maintain a healthier mouth over the long term with a
                plan that is realistic, sustainable, and tailored to you.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[linear-gradient(to_bottom,rgba(16,24,40,1),rgba(27,39,57,1))] p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Hygiene care plan
            </p>
            <h3 className="mt-3 text-3xl tracking-tight">
              Structured preventive care for patients who want continuity
            </h3>
            <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
              Our care plan is designed for patients who value consistency and
              want a clear route to maintaining their oral health. Rather than
              waiting until symptoms appear, the care plan supports regular,
              planned maintenance.
            </p>

            <ul className="mt-6 space-y-4">
              {carePlanBenefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span className="text-sm leading-7 text-white/85 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[linear-gradient(to_bottom,rgba(250,248,244,1),rgba(255,255,255,1))]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Who this is ideal for
            </p>
            <h2 className="mt-3 text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Preventive care suits more patients than they realise
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Patients who notice bleeding gums when brushing or flossing",
              "Patients who build up tartar quickly despite brushing well",
              "Patients who want fresher breath and a cleaner feeling mouth",
              "Patients who want a more structured long-term dental care plan",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[30px] border border-black/5 bg-slate-950 p-8 text-white shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Calm, premium care
            </p>
            <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl">
              Book hygiene treatment at Worsthorne Dental Practice
            </h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              Whether you are looking for a professional clean, support with gum
              health, or a more structured care plan to protect your oral health
              over time, our team is here to help. We focus on clear advice,
              gentle care, and long-term prevention in a welcoming setting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Enquire about hygiene treatment
              </Link>
              <Link
                href="/fees"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View fees and appointments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}