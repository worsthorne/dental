import Link from "next/link";

export const metadata = {
  title: "Accessibility Statement | Worsthorne Dental Practice",
  description:
    "Accessibility statement for Worsthorne Dental Practice, including website accessibility, patient support and contact information.",
};

export default function AccessibilityPage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Accessibility
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Accessibility Statement
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Worsthorne Dental Practice wants this website to be accessible and
            easy to use for as many people as possible. We also aim to support
            patients who may need reasonable adjustments when contacting or
            visiting the practice.
          </p>

      

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Website accessibility
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to make our website clear, readable and usable across
                modern devices. This includes using readable text, sensible
                contrast, clear navigation and mobile-friendly layouts.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We continue to review the website and make improvements where
                accessibility issues are identified.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                What you should be able to do
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                <li>Navigate the main pages using a keyboard where possible.</li>
                <li>Read content clearly on desktop, tablet and mobile screens.</li>
                <li>Use clear links and buttons to find important information.</li>
                <li>Access practice contact details without unnecessary difficulty.</li>
                <li>Zoom in using browser controls without the site becoming unusable.</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Known limitations
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Some third-party content, such as embedded maps, videos,
                booking tools or external links, may not be fully controlled by
                the practice. We will aim to provide alternative ways to access
                important information where needed.
              </p>

             
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Patient accessibility and support
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you need support when booking, attending an appointment or
                accessing information, please contact the practice. We will do
                our best to discuss your needs and explain what support may be
                available.
              </p>

              
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Requesting information in another format
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you need information from this website in a different format,
                please contact us. We will consider reasonable requests and do
                our best to help.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                This may include larger text, printed information or assistance
                over the phone.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Contact us about accessibility
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you experience an accessibility issue on this website or need
                help accessing practice information, please contact us.
              </p>

              <div className="mt-5 grid gap-4 text-slate-600 sm:grid-cols-2">
                <p>
                  <strong className="block text-slate-900">Phone</strong>
                  <a
                    href="tel:01282458340"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    01282 458340
                  </a>
                </p>

                <p>
                  <strong className="block text-slate-900">Email</strong>
                  <a
                    href="mailto:worsthornedental@hotmail.com"
                    className="break-words font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    worsthornedental@hotmail.com
                  </a>
                </p>

                <p className="sm:col-span-2">
                  <strong className="block text-slate-900">Address</strong>
                  Worsthorne Dental Practice, 93 Lindsay Park, Burnley BB10 3SQ
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Related information
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/patient-information"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Patient Information
                </Link>

                <Link
                  href="/privacy-policy"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/cookie-policy"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Cookie Policy
                </Link>

                <Link
                  href="/gdc-compliance"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  GDC Compliance
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}