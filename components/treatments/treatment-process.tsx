type TreatmentProcessProps = {
  title?: string;
  items: string[];
};

export function TreatmentProcess({
  title = "Your treatment journey",
  items,
}: TreatmentProcessProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fafc,#ffffff)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Process
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div className="pt-1">
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}