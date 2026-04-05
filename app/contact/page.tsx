import { ContactForm } from "@/components/contact/contact-form";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_30%),linear-gradient(to_bottom,#ffffff,#f8fafc)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Contact
            </p>

            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-slate-950 sm:text-6xl">
              Request an appointment with confidence.
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Whether you’re enquiring about a specific treatment or simply want
              guidance, our team is here to help with clear, calm, and
              professional advice.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* FORM */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">
              Request an appointment
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              We aim to respond within 24 hours.
            </p>

            <ContactForm />
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6">
            
            {/* CONTACT CARDS */}
            <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,#ecfdf5,#f8fafc,#ffffff)] p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-slate-950">
                Contact details
              </h3>

              <div className="mt-6 space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-medium text-slate-500">Phone</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    01282 458340
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-500">Email</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    hello@worsthornedentalclinic.co.uk
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-500">Location</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Worsthorne, Lancashire
                  </p>
                </div>

                <div>
                  <p className="font-medium text-slate-500">Hours</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    Mon–Thu: 8:30am – 5:30pm
                  </p>
                </div>
              </div>
            </div>

            {/* TRUST BOX */}
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#0f172a,#14532d,#052e16)] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Why choose us
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Care built around comfort and trust.
              </h3>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li>• Established since 1998</li>
                <li>• Trusted across Lancashire</li>
                <li>• Calm, patient-first approach</li>
                <li>• Advanced private dental treatments</li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-slate-950">
                Explore more
              </h3>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link href="/treatments" className="underline">
                  Treatments
                </Link>
                <Link href="/fees" className="underline">
                  Fees
                </Link>
                <Link href="/areas" className="underline">
                  Areas
                </Link>
                <Link href="/testimonials" className="underline">
                  Testimonials
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#0f172a,#14532d,#052e16)] p-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.25)]">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Prefer to speak directly?
            </h2>

            <p className="mt-4 text-white/80">
              Call our team and we’ll guide you through your options and help
              arrange the right appointment.
            </p>

            <div className="mt-6">
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Call 01282 458340
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}