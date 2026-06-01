import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";
import { projects } from "./Projects";
import { groups } from "./Skills";

const totalSkills = groups.reduce((acc, g) => acc + g.skills.length, 0);

const stats = [
  { value: projects.length, suffix: "+", label: "Projects completed" },
  { value: totalSkills, suffix: "+", label: "Technologies learned" },
  { value: 200, suffix: "+", label: "GitHub contributions" },
  { value: 6, suffix: "", label: "Certifications" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-gradient-brand-soft p-8 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
