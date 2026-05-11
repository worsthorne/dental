export const metadata = {
  title: "Complaints Procedure | Worsthorne Dental Practice",
  description:
    "How to raise a complaint or concern with Worsthorne Dental Practice.",
};

export default function ComplaintsProcedurePage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Patient Support
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Complaints Procedure
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We hope every patient has a positive experience with us. If
            something has not met your expectations, we want to hear from you so
            we can look into it properly and respond fairly.
          </p>

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                How to make a complaint
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Please contact the practice as soon as possible with details of
                your concern. You can contact us by phone, email or in writing.
              </p>

              <div className="mt-5 space-y-3 text-slate-600">
                <p>
                  <strong className="text-slate-900">Phone:</strong>{" "}
                  <a
                    href="tel:01282458340"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    01282 458340
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900">Email:</strong>{" "}
                  <a
                    href="mailto:worsthornedental@hotmail.com"
                    className="font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    worsthornedental@hotmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-slate-900">Address:</strong> 93
                  Lindsay Park, Burnley BB10 3SQ
                </p>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">
                What happens next
              </h2>

              <div className="mt-5 space-y-4 leading-7 text-slate-600">
                <p>
                  We will acknowledge your complaint and explain how it will be
                  handled.
                </p>
                <p>
                  Your concern will be reviewed carefully and we may contact you
                  for further information if needed.
                </p>
                <p>
                  We will aim to provide a clear response after investigating
                  the matter.
                </p>
                <p>
                  Where appropriate, we will explain what action has been taken
                  or what options are available to help resolve the concern.
                </p>
              </div>
            </section>

          
          </div>
        </div>
      </section>
    </main>
  );
}