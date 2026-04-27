import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Out-of-Hours Emergency Dental Care | Worsthorne Dental Practice",
  description:
    "Out-of-hours emergency dental guidance for urgent dental pain, including emergency contact details, opening times, and important information for Smilecare Plan patients.",
};

const openingTimes = [
  { label: "Friday", value: "18:00 – 20:00" },
  { label: "Saturday & Sunday", value: "10:00 – 17:00" },
  { label: "Bank Holidays", value: "10:00 – 17:00" },
  { label: "Christmas Eve / New Year's Eve", value: "18:00 – 20:00" },
];

const importantNotes = [
  "This service is for urgent dental pain and emergency dental concerns outside normal practice hours.",
  "Patients should call the emergency line to be directed to a nearby dentist in East Lancashire.",
  "Fees are set by the attending dentist providing the emergency appointment.",
  "Out-of-hours emergency fees are not covered for Smilecare Plan patients.",
];

export default function OutOfHoursPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-black/5 bg-[linear-gradient(to_bottom,rgba(244,250,244,1),rgba(255,255,255,1))]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#355b46]">
              Out-of-Hours Emergency Care
            </p>

            <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Emergency dental guidance when the practice is closed
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              If you are experiencing urgent dental pain outside our normal
              practice hours, please use the out-of-hours emergency service
              below. This service helps direct patients to a nearby dentist in
              East Lancashire for emergency care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:07432673069"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Call Emergency Line
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Contact the Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Emergency Line
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Call for urgent dental pain
            </h2>

            <div className="mt-6 rounded-[28px] border border-black/5 bg-[#f4faf4] p-6 shadow-sm sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Emergency Contact Number
              </p>
              <a
                href="tel:07432673069"
                className="mt-3 block text-4xl font-semibold tracking-tight text-slate-950 transition hover:text-[#355b46]"
              >
                07432 673069
              </a>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                For urgent dental pain, call the emergency line to be directed
                to a nearby dentist in East Lancashire.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {importantNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <div className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7ea487]" />
                    <p className="text-sm leading-7 text-slate-700 sm:text-base">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Opening Times
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Out-of-hours availability
            </h2>

            <div className="mt-8 space-y-4">
              {openingTimes.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-slate-200 bg-stone-50 px-5 py-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-700 sm:text-base">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-950 sm:text-base">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[22px] border border-emerald-200 bg-emerald-50 px-5 py-5">
              <p className="text-sm leading-7 text-slate-700">
                If you are unsure whether your situation is urgent, it is still
                sensible to call the emergency line for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[30px] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Important
              </p>

              <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                Smilecare Plan patients
              </h2>

              <p className="mt-5 text-base leading-8 text-white/80">
                Out-of-hours emergency fees are not included within the
                Smilecare Plan. Any emergency charges are set by the attending
                dentist or emergency provider and are payable separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[30px] border border-black/5 bg-[linear-gradient(to_bottom,rgba(244,250,244,1),rgba(255,255,255,1))] p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Next step
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Need urgent help outside normal hours?
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-700">
              Call the emergency line for urgent dental pain and out-of-hours
              guidance. For non-urgent enquiries, please contact Worsthorne
              Dental Practice during our normal opening hours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:07432673069"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Call 07432 673069
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                Contact the Practice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}