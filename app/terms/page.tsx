import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Worsthorne Dental Practice",
  description:
    "Website terms of use for Worsthorne Dental Practice, including general information, website content, appointments, fees and patient responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Legal
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            These terms explain how this website should be used and how the
            information on the site should be understood. By using this website,
            you agree to use it responsibly and in line with these terms.
          </p>

        

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Who operates this website
              </h2>

              <div className="mt-5 grid gap-4 text-slate-600 sm:grid-cols-2">
                <p>
                  <strong className="block text-slate-900">Practice name</strong>
                  Worsthorne Dental Practice
                </p>

                <p>
                  <strong className="block text-slate-900">Legal entity</strong>
                  [Legal entity / practice owner name]
                </p>

                <p>
                  <strong className="block text-slate-900">Address</strong>
                  93 Lindsay Park, Burnley BB10 3SQ
                </p>

                <p>
                  <strong className="block text-slate-900">Phone</strong>
                  <a
                    href="tel:01282458340"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    01282 458340
                  </a>
                </p>

                <p className="sm:col-span-2">
                  <strong className="block text-slate-900">Email</strong>
                  <a
                    href="mailto:worsthornedental@hotmail.com"
                    className="break-words font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    worsthornedental@hotmail.com
                  </a>
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Website information
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The information on this website is provided for general guidance
                only. It should not be treated as a substitute for a clinical
                dental examination, diagnosis or personalised advice from a
                qualified dental professional.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to keep website information clear and accurate, but
                treatment details, availability, fees and policies may change
                from time to time.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Treatment suitability
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Suitability for dental treatment can only be confirmed following
                an appropriate clinical assessment, discussion of medical history
                and explanation of the available options, benefits, risks and
                fees.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Treatment outcomes vary between patients. We do not guarantee a
                specific clinical or cosmetic result.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Appointments and enquiries
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Submitting an enquiry through this website does not guarantee an
                appointment, treatment, price or clinical outcome. The practice
                team will contact you where appropriate to discuss your enquiry.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Please do not use the website contact form for urgent dental or
                medical emergencies. If you need urgent help, please contact the
                practice by phone or follow the relevant emergency guidance.
              </p>

              <Link
                href="/out-of-hours"
                className="mt-5 inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Out-of-hours information
              </Link>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Fees and payment information
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Fees shown on this website may be listed as “from” prices.
                Final fees may depend on the complexity of treatment, materials,
                clinical findings and individual patient needs.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Any treatment plan, fee estimate or payment arrangement should
                be confirmed directly with the practice before treatment begins.
              </p>

              <Link
                href="/fees"
                className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                View fees
              </Link>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                External links
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This website may include links to third-party websites, such as
                maps, regulators, complaints services, social media platforms or
                external resources. These links are provided for convenience.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We are not responsible for the content, accuracy, availability or
                privacy practices of external websites.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Website availability
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to keep the website available and working properly, but
                we cannot guarantee uninterrupted access. The site may be
                updated, changed or temporarily unavailable without notice.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Intellectual property
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The content, design, text, graphics and images on this website
                are owned by or licensed to Worsthorne Dental Practice unless
                stated otherwise. You may view the website for personal use, but
                you must not copy, reproduce or reuse content for commercial
                purposes without permission.
              </p>

             
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Patient responsibilities
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Patients are responsible for providing accurate and up-to-date
                information about their medical history, medication, allergies
                and dental concerns. This helps the dental team provide safer
                and more appropriate care.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Changes to these terms
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We may update these terms from time to time. Any updates will be
                published on this page.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Last reviewed: [May 2026]
              </p>
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
                  href="/accessibility"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Accessibility
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