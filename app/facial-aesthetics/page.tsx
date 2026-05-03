import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facial Aesthetics | Worsthorne Dental Practice",
  description:
    "Discover facial aesthetics at Worsthorne Dental Practice, including anti-wrinkle consultations and medically led facial aesthetic treatment in a calm, professional setting.",
};

const treatmentAreas = [
  "Forehead lines",
  "Frown lines",
  "Crow’s feet",
  "Softening expression lines",
  "Subtle facial rejuvenation",
  "A refreshed but natural appearance",
];

const whyChooseUs = [
  "Medically led approach in a professional clinical setting",
  "Calm, careful consultations with no pressure",
  "Focus on subtle, natural-looking outcomes",
  "Clear advice on suitability, expectations, and aftercare",
  "Treatment provided as part of a wider patient-centred approach",
];

const faqs = [
  {
    question: "What is a facial aesthetics consultation?",
    answer:
      "A facial aesthetics consultation is the first step in understanding whether treatment is suitable for you. It allows us to discuss your concerns, assess the relevant areas, explain what may be possible, and guide you clearly on expectations.",
  },
  {
    question: "Do you aim for natural-looking results?",
    answer:
      "Yes. Our focus is on balanced, subtle results that help you look refreshed rather than overtreated.",
  },
  {
    question: "Is there pressure to go ahead with treatment?",
    answer:
      "No. We believe in calm, informed, patient-first care. If treatment is not suitable, or if it is not the right time, we will say so clearly.",
  },
  {
    question: "Is aftercare discussed as part of treatment?",
    answer:
      "Yes. We provide clear aftercare guidance so you understand what to do after treatment and what to expect.",
  },
];

export default function FacialAestheticsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#355b46]">
              Facial Aesthetics
            </p>

            <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Medically led facial aesthetics with a calm, natural approach
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              At Worsthorne Dental Practice, facial aesthetics is approached in
              the same way as all of our patient care — carefully, professionally,
              and without pressure. The aim is to support natural-looking facial
              rejuvenation in a setting that values safety, clarity, and subtle
              results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book a consultation
              </Link>
              <Link
                href="/fees"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
              >
                View fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              A professional setting
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Thoughtful treatment planning with patient comfort in mind
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Facial aesthetics treatment should never feel rushed or sales
                driven. Our approach begins with listening carefully to what you
                would like to improve and then advising honestly on what may be
                suitable.
              </p>
              <p>
                We focus on subtle enhancement rather than dramatic change. That
                means respecting facial balance, understanding movement and
                expression, and aiming for a refreshed appearance that still
                feels like you.
              </p>
              <p>
                Whether you are new to facial aesthetics or already familiar
                with treatment, our goal is to make the process feel clear,
                reassuring, and clinically grounded from start to finish.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/5 bg-[#f4faf4] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Common treatment goals
            </p>

            <ul className="mt-5 space-y-4">
              {treatmentAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#7ea487]" />
                  <span className="text-sm leading-7 text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Why patients choose us
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Specialist care with a measured, patient-first mindset
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <article
                key={item}
                className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f4e8] text-sm font-semibold text-[#355b46]">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Consultation first
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Clear guidance before any treatment decision
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                A consultation gives you the opportunity to discuss your goals,
                ask questions, and understand whether treatment is appropriate.
                We will explain likely benefits, practical limitations, and the
                kind of result that can realistically be expected.
              </p>
              <p>
                This is also the right time to talk through medical history,
                lifestyle factors, and any previous facial aesthetics treatment
                so advice can be tailored properly to you.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#f4faf4] p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Fees and value
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Transparent pricing in a clinical setting
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-700">
                    Facial anti-wrinkle assessment
                  </span>
                  <span className="text-sm font-semibold text-slate-950">
                    FREE
                  </span>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-700">
                    Platysma Bands
                  </span>
                  <span className="text-sm font-semibold text-slate-950">
                    From £300
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-700">
                    Botox™ administration
                  </span>
                  <span className="text-sm font-semibold text-slate-950">
                    From £200
                  </span>
                  
              </div>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Includes complimentary top-up if required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#355b46]">
              Frequently asked questions
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-slate-950 sm:text-4xl">
              Common questions about facial aesthetics
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[30px] border border-black/5 bg-slate-950 p-8 text-white shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#cfe5d0]">
              Next step
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Book a facial aesthetics consultation
            </h2>
            <p className="mt-5 text-base leading-8 text-white/80">
              If you are interested in subtle, medically led facial aesthetics
              in a calm and professional environment, get in touch to arrange a
              consultation and discuss the most suitable approach for you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
              >
                Book consultation
              </Link>
              <Link
                href="/our-team#victoria-bond"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Meet Victoria Bond
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}