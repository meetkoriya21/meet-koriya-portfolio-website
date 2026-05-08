import { Reveal } from "./Reveal";
import { Code2, Database, LineChart, Rocket } from "lucide-react";

const cards = [
  { Icon: Code2, title: "Web Development", text: "Building responsive, accessible interfaces with React and modern tooling." },
  { Icon: Database, title: "Databases", text: "Designing schemas, writing efficient queries across MySQL, MongoDB & SQL Server." },
  { Icon: LineChart, title: "Data & Dashboards", text: "Crafting Power BI dashboards that turn raw data into clear decisions." },
  { Icon: Rocket, title: "Real-World Systems", text: "Shipping projects end-to-end — from idea, to architecture, to deployment." },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">// 01 — about me</div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A glimpse <span className="text-gradient">into who I am</span></h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8 shadow-elegant">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="font-semibold text-foreground">Meet Koriya</span>, a Computer
                Engineering student and aspiring Full Stack Developer. I love translating ideas
                into elegant, functional products — whether that means a smooth React frontend,
                a robust Node backend, or a Power BI dashboard that makes a board meeting easier.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                My goal is to join a team where I can keep learning, build real systems, and
                contribute meaningfully from day one. I'm actively exploring internship and
                placement opportunities in software, data and full-stack roles.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Curious", "Detail-oriented", "Team player", "Self-driven", "Pragmatic", "Always shipping"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-center text-xs font-medium text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-glow-violet">
                  <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
