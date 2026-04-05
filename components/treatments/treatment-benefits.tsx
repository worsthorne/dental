type TreatmentBenefitsProps = {
  title?: string;
  items: string[];
};

export function TreatmentBenefits({
  title = "Key benefits",
  items,
}: TreatmentBenefitsProps) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Benefits
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-slate-200 bg-stone-50 p-6 shadow-sm"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-emerald-100" />
              <p className="text-base font-medium leading-7 text-slate-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}