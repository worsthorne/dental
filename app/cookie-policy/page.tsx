import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Worsthorne Dental Practice",
  description:
    "Cookie policy for Worsthorne Dental Practice, explaining how cookies and similar technologies may be used on this website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-stone-50">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Legal & Privacy
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-tight text-slate-950 sm:text-5xl">
            Cookie Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This cookie policy explains how Worsthorne Dental Practice may use
            cookies and similar technologies on this website.
          </p>

        

          <div className="mt-12 space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                What are cookies?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Cookies are small text files that may be stored on your device
                when you visit a website. They help websites function properly,
                remember certain preferences and understand how visitors use the
                site.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                How we may use cookies
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We may use cookies or similar technologies to keep the website
                secure, make pages work correctly, improve website performance,
                understand how visitors use the site and support enquiry forms
                or embedded services.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Types of cookies
              </h2>

              <div className="mt-6 grid gap-5">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Essential cookies
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    These are needed for the website to function correctly and
                    cannot usually be switched off through the website itself.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Performance and analytics cookies
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    These may help us understand how visitors use the website,
                    such as which pages are visited and whether any errors occur.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Functionality cookies
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    These may remember choices you make, such as preferences or
                    previous interactions with website features.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-950">
                    Third-party cookies
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Some services embedded on the website, such as maps, videos,
                    analytics or booking tools, may use their own cookies.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Third-party services
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This website may use third-party services to support maps,
                analytics, security, forms, booking features or embedded content.
                These services may place cookies or collect usage information in
                line with their own privacy and cookie policies.
              </p>

            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Managing cookies
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                You can usually manage or block cookies through your browser
                settings. Blocking some cookies may affect how the website works.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                If a cookie banner or preference tool is available on this
                website, you may also be able to manage your preferences through
                that tool.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Contact us
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you have any questions about this cookie policy, please
                contact the practice.
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
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Related information
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/privacy-policy"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/patient-information"
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-200 hover:text-emerald-700"
                >
                  Patient Information
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