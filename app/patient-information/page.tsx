import Link from "next/link";

export const metadata = {
  title: "Patient Information | Worsthorne Dental Practice",
  description:
    "Important patient information about appointments, treatment suitability, fees, consent and dental care at Worsthorne Dental Practice.",
};

export default function PatientInformationPage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Patient Information
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Important Information for Patients
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This page explains important information about appointments,
            treatment suitability, fees, consent and patient care at Worsthorne
            Dental Practice.
          </p>

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Treatment suitability
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Any treatment information on this website is for general
                guidance only. Treatment suitability depends on your oral health,
                medical history, clinical examination and the professional
                judgement of your dental clinician.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Consent and treatment options
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Before treatment, we will aim to explain the available options,
                benefits, risks, likely outcomes and costs so you can make an
                informed decision.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Fees and pricing
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Fees shown on this website may be listed as “from” prices.
                Final fees depend on the complexity of treatment and will be
                confirmed after assessment where appropriate.
              </p>

              <Link
                href="/fees"
                className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                View fees
              </Link>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Results and outcomes
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Every patient is different. Results can vary depending on your
                dental condition, oral hygiene, lifestyle, compliance with
                aftercare and other clinical factors. We do not guarantee a
                specific result.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Emergency and out-of-hours care
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you have a dental emergency, please contact the practice as
                soon as possible. For urgent out-of-hours advice, please follow
                the guidance on our out-of-hours page.
              </p>

              <Link
                href="/out-of-hours"
                className="mt-5 inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Out-of-hours information
              </Link>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                Privacy and confidentiality
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We take patient confidentiality seriously. Personal data is
                handled in line with applicable data protection requirements and
                our privacy policy.
              </p>

              <Link
                href="/privacy-policy"
                className="mt-5 inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Privacy policy
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}