import { Reveal } from "@/components/shared/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 sm:text-sm">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}