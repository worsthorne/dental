import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-stone-50 via-white to-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div>
            <Link href="/" className="flex items-center gap-3 transition hover:opacity-90">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="Worsthorne Dental Practice"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-base font-semibold text-slate-950">
                Worsthorne Dental Practice
              </p>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              A premium dental practice offering advanced treatments, calm patient
              experiences, and trusted care across Lancashire and the North West.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
              Treatments
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/treatments/family-dentistry"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Family Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/smilecare-plan"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Smilecare Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/orthodontics"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/cosmetic-dentistry"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/teeth-whitening"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link
                  href="/facial-aesthetics"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Facial Aesthetics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
              Clinic
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/our-team"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md transition hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <a
                  href="tel:01282458340"
                  className="font-semibold text-slate-900 transition hover:text-emerald-700"
                >
                  01282 458340
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md transition hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:worsthornedental@hotmail.com"
                  className="break-words font-semibold text-slate-900 transition hover:text-emerald-700"
                >
                  worsthornedental@hotmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md transition hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">
                  Hours
                </p>
                <p className="font-semibold text-slate-900">
                  Mon–Thur: 9:00am – 6:00pm
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
              Out-of-Hours
            </h3>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5 shadow-md transition hover:shadow-lg">
              <p className="text-[10px] uppercase tracking-wide text-emerald-700">
                Emergency Line
              </p>
              <a
                href="tel:07432673069"
                className="mt-1 block text-lg font-semibold text-slate-900 transition hover:text-emerald-700"
              >
                07432 673069
              </a>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                For urgent dental pain, call the emergency line to see a nearby
                dentist in East Lancashire.
              </p>

              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>Friday: 18:00 – 20:00</p>
                <p>Saturday &amp; Sunday: 10:00 – 17:00</p>
                <p>Bank Holidays: 10:00 – 17:00</p>
                <p>Christmas Eve / New Year&apos;s Eve: 18:00 – 20:00</p>
              </div>

              <p className="mt-4 text-[11px] leading-5 text-slate-500">
                Fees are set by the attending dentist and are not covered for
                Smilecare Plan patients.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-800">
              Visit Us
            </h3>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-md transition hover:shadow-lg">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">
                Address
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                93 Lindsay Park,
                <br />
                Burnley BB10 3SQ
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=93+Lindsay+Park,+Burnley+BB10+3SQ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-emerald-700 transition hover:text-emerald-800"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-slate-950 to-slate-800 px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                Ready to book your consultation?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Speak to our team and take the next step with confidence.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-slate-100"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <p className="mt-8 flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Worsthorne Dental Clinic</span>
          <span className="hidden sm:inline">•</span>
          <span>All rights reserved</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://sitora.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 transition hover:text-emerald-600"
          >
            Site by Sitora
          </a>
        </p>
      </div>
    </footer>
  );
}