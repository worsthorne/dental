import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-stone-50 via-white to-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div>
            <Link href="/" className="flex items-center gap-3 transition hover:opacity-90">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.png"
                  alt="Worsthorne Dental Clinic"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-base font-semibold text-slate-950">
                Worsthorne Dental Clinic
              </p>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              A premium dental clinic offering advanced treatments, calm patient
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
                  href="/treatments/dental-implants"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Dental Implants
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
                  href="/news"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  News & Advice
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
              Areas We Cover
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/areas/burnley"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Burnley
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/blackburn"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Blackburn
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/preston"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Preston
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/manchester"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Manchester
                </Link>
              </li>
              <li>
                <Link
                  href="/areas/liverpool"
                  className="inline-flex transition hover:translate-x-0.5 hover:text-emerald-700"
                >
                  Liverpool
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
                  href="mailto:hello@worsthornedentalclinic.co.uk"
                  className="break-words font-semibold text-slate-900 transition hover:text-emerald-700"
                >
                  hello@worsthornedentalclinic.co.uk
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md transition hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">
                  Location
                </p>
                <p className="font-semibold text-slate-900">
                  Worsthorne, Lancashire
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md transition hover:shadow-lg">
                <p className="text-[10px] uppercase tracking-wide text-slate-500">
                  Hours
                </p>
                <p className="font-semibold text-slate-900">
                  Mon–Thur: 8:30am – 5:30pm
                </p>
              </div>
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

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Worsthorne Dental Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}