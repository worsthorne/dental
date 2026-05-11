import Link from "next/link";

const dentalTeam = [
  {
    name: "Dr Mazhar Iqbal",
    role: "Principal Dentist",
    gdcNumber: "251232",
    qualifications: "DS BSc (Hons) MFDS RCSEd PGCert ClinTeach",
  },
  {
    name: "Victoria Bond",
    role: "Dental Hygienist",
    gdcNumber: "102889",
    qualifications: "BSc (Hons) Dental Hygiene",
  },
  {
    name: "Shannon Perviaz",
    role: "Dental Nurse",
    gdcNumber: "291913",
    qualifications: "Diploma in Dental Nursing",
  },
  {
    name: "Keira Fell",
    role: "Dental Nurse",
    gdcNumber: "287001",
    qualifications: "Diploma in Dental Nursing",
  },
];

export const metadata = {
  title: "GDC Compliance | Worsthorne Dental Practice",
  description:
    "GDC compliance information for Worsthorne Dental Practice, including professional regulation, treatment information and patient guidance.",
};

export default function GdcCompliancePage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Legal & Compliance
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            GDC Compliance
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Worsthorne Dental Practice is committed to providing clear, honest
            and accurate information to patients. This page includes important
            practice, regulatory and patient information.
          </p>

          <div className="mt-12 grid gap-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Practice Details
              </h2>

              <div className="mt-5 grid gap-4 text-slate-600 sm:grid-cols-2">
                <p>
                  <strong className="block text-slate-900">Practice name</strong>
                  Worsthorne Dental Practice
                </p>

                <p>
                  <strong className="block text-slate-900">Practice type</strong>
                  [Private Practice]
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

                <p>
                  <strong className="block text-slate-900">Email</strong>
                  <a
                    href="mailto:worsthornedental@hotmail.com"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    worsthornedental@hotmail.com
                  </a>
                </p>

                <p>
                  <strong className="block text-slate-900">
                    Complaints contact
                  </strong>
                  [Practice Manager]
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                General Dental Council
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Dental professionals in the UK are regulated by the General
                Dental Council. The GDC sets standards for dental professionals
                and maintains the register of dental professionals.
              </p>

              <a
                href="https://www.gdc-uk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Visit the GDC website
              </a>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Dental Team Registration
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Our dental professionals are registered with the General Dental
                Council where required.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-1 divide-y divide-slate-200">
                  {dentalTeam.map((member) => (
                    <div
                      key={member.name}
                      className="grid gap-4 bg-white p-5 sm:grid-cols-4"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Name
                        </p>
                        <p className="mt-1 font-semibold text-slate-950">
                          {member.name}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Role
                        </p>
                        <p className="mt-1 text-slate-700">{member.role}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          GDC Number
                        </p>
                        <p className="mt-1 text-slate-700">
                          {member.gdcNumber}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Qualifications
                        </p>
                        <p className="mt-1 text-slate-700">
                          {member.qualifications}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Treatment Information
              </h2>

              <div className="mt-4 space-y-4 leading-7 text-slate-600">
                <p>
                  Information on this website is provided for general guidance
                  only. Suitability for treatment can only be confirmed after a
                  clinical assessment, discussion of your medical history and a
                  full explanation of the available options, benefits, risks and
                  fees.
                </p>

                <p>
                  Treatment outcomes vary between patients. We do not guarantee
                  a specific clinical or cosmetic result.
                </p>

                <p>
                  Before treatment, patients will be given the opportunity to
                  discuss their options and provide informed consent.
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Complaints
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We aim to resolve concerns fairly, clearly and as quickly as
                possible. If you have a complaint or concern, please contact the
                practice in the first instance.
              </p>

              <Link
                href="/complaints-procedure"
                className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Read our complaints procedure
              </Link>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}