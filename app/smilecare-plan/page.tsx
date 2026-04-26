import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smilecare Plan | Worsthorne Dental Practice",
  description:
    "Learn about the Smilecare Plan at Worsthorne Dental Practice. A prevention-focused care plan for regular attending patients with included routine care and treatment discounts.",
};

const benefits = [
  "One yearly routine examination including screening radiographs, normally £120",
  "Two hygiene visits per year, normally £75 per session",
  "10% discount on all treatments, including emergency consultations, oral hygiene products, extra hygienist appointments and non-screening radiographs",
  "Children aged 0–16 receive free treatment for fissure sealants, topical fluoride application, restorations and extractions of deciduous teeth, in addition to their two hygiene visits per year",
];

const notes = [
  "Screening radiographs are routinely completed every 2 years based on your risk assessment.",
  "Radiographs taken outside the plan are discounted by 10%.",
  "Children’s cover does not include cosmetic fillings or adult tooth restorations and extractions.",
  "You can cancel the scheme at any time.",
];

export default function SmilecarePlanPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#355b46]">
              Smilecare Plan
            </p>

            <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A prevention plan for regular attending patients designed to save
              on treatment costs
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              The Smilecare Plan is a loyalty scheme built around prevention,
              routine care, and long-term value. It helps regular attending
              patients spread the cost of core dental care while also receiving
              discounts on further treatment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Ask about joining
              </Link>
              <Link
                href="/fees"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                View fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
                How it works
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
                Structured preventive care with built-in value
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  This plan is aimed at regular attending patients and is built
                  around routine prevention. It includes core appointments that
                  most patients need anyway, while also giving discounts on
                  additional treatment.
                </p>
                <p>
                  It supports continuity of care, encourages regular attendance,
                  and helps reduce the chance of larger dental problems being
                  left until they become more costly or complex.
                </p>
                <p>
                  It is also beneficial for the Practice, as it helps us plan
                  care more effectively throughout the year. In practical terms,
                  it is designed to be a genuine win-win for both patient and
                  Practice.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/5 bg-[#f4faf4] p-7 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
                Plan cost
              </p>

              <div className="mt-5 rounded-[24px] border border-black/5 bg-white p-6">
                <p className="text-sm text-slate-600">Monthly option</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
                  £22
                  <span className="text-lg font-medium text-slate-600">
                    {" "}
                    / month
                  </span>
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Plus a one-off joining fee of <strong>£12</strong> paid to
                  Smilecare Ltd.
                </p>
              </div>

              <div className="mt-4 rounded-[24px] border border-black/5 bg-white p-6">
                <p className="text-sm text-slate-600">Annual option</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
                  £264
                  <span className="text-lg font-medium text-slate-600">
                    {" "}
                    / year
                  </span>
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Pay yearly at the Practice and avoid monthly direct debits and
                  the joining fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Your benefits
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Included care and treatment discounts
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              The Smilecare Plan is intended to provide value through core
              routine care and reduced treatment costs across the year.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit}
                className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f4e8] text-sm font-semibold text-[#355b46]">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  {benefit}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
                Why it works well
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
                Better value for patients who attend regularly
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Regular attendance is one of the best ways to protect oral
                  health over time. The Smilecare Plan encourages that by making
                  routine care simpler, more predictable, and more affordable.
                </p>
                <p>
                  Instead of waiting for issues to worsen, patients stay on top
                  of examinations, hygiene visits, and ongoing maintenance with
                  a more preventive approach.
                </p>
                <p>
                  The guaranteed discount on treatment also gives added value
                  whenever further care is needed.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/5 bg-[#f4faf4] p-7 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
                Important notes
              </p>
              <ul className="mt-6 space-y-4">
                {notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7ea487]" />
                    <span className="text-sm leading-7 text-slate-700 sm:text-base">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[22px] border border-black/5 bg-white p-5">
                <p className="text-sm leading-7 text-slate-700">
                  You can cancel the scheme whenever you wish, giving you
                  flexibility as well as value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-black/5 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
                Family value
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
                Added support for children aged 0 to 16
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Children aged 0 to 16 receive free dental treatment for fissure
                sealants, topical fluoride application, restorations, and
                extractions of deciduous teeth, in addition to their two hygiene
                visits each year.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Cosmetic fillings and adult tooth restorations and extractions
                are not included, but for many families the plan still offers
                strong long-term value and a more structured route to preventive
                care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[30px] border border-black/5 bg-slate-950 p-8 text-white shadow-sm sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#cfe5d0]">
                Join the plan
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                Ask about Smilecare Plan membership
              </h2>
              <p className="mt-5 text-base leading-8 text-white/80">
                If you are a regular attending patient and want a prevention plan
                that offers routine care, discounts on treatment, and clear
                ongoing value, we would be happy to talk you through whether the
                Smilecare Plan is right for you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Enquire about joining
                </Link>
                <Link
                  href="/fees"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View fees
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}