import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Worsthorne Dental Practice",
  description:
    "Privacy policy for Worsthorne Dental Practice, explaining how patient and website visitor information is handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Legal & Privacy
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This privacy policy explains how Worsthorne Dental Practice handles
            personal information provided by patients, prospective patients and
            website visitors.
          </p>

       

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Who we are
              </h2>

              <div className="mt-5 grid gap-4 text-slate-600 sm:grid-cols-2">
                <p>
                  <strong className="block text-slate-900">Practice name</strong>
                  Worsthorne Dental Practice
                </p>

                <p>
                  <strong className="block text-slate-900">Data controller</strong>
                  Worsthorne Dental Practice 
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
                Information we may collect
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                <li>Your name and contact details.</li>
                <li>Appointment enquiry details submitted through our website.</li>
                <li>Information you provide when contacting the practice.</li>
                <li>Dental and medical information required to provide care.</li>
                <li>Payment and billing information where applicable.</li>
                <li>Website usage information, such as pages visited and browser information.</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                How we use your information
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-slate-600">
                <li>To respond to enquiries and appointment requests.</li>
                <li>To provide dental care and related patient support.</li>
                <li>To keep accurate patient records.</li>
                <li>To manage billing, payments and administration.</li>
                <li>To meet legal, regulatory and professional obligations.</li>
                <li>To improve the performance and security of our website.</li>
              </ul>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Legal basis for processing
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We process personal information where it is necessary to provide
                care, respond to enquiries, comply with legal obligations,
                maintain accurate clinical records, protect patient safety and
                manage the practice.
              </p>

             
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Sharing your information
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We only share information where appropriate, necessary and
                lawful. This may include dental laboratories, referral practices,
                hospitals, NHS services where applicable, payment providers,
                software providers, regulators, insurers or legal advisers.
              </p>

             
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                How long we keep information
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We keep patient records and related information for as long as
                required for clinical, legal, regulatory and professional
                purposes.
              </p>

            
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Website enquiries
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you submit an enquiry through our website, the details you
                provide may be sent to the practice team so they can respond.
                Please do not submit urgent medical or dental emergencies through
                the website contact form.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Contact the practice
              </Link>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Your rights
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                You may have rights to access, correct, restrict or request
                deletion of certain personal information, subject to legal and
                clinical record-keeping requirements.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                To make a privacy request, please contact the practice using the
                details on this page.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Complaints
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you have a concern about how your personal information is
                handled, please contact the practice first so we can look into
                it.
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
                  href="/complaints-procedure"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Complaints Procedure
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