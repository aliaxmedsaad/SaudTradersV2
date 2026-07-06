import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

/** Consistent centered heading block used by every section. */
export default function SectionHeading({ eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dye-cyan">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{sub}</p>}
    </Reveal>
  );
}
