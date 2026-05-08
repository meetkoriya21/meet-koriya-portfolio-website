import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  category: "Web" | "Database" | "Dashboard";
  gradient: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Civic Management System",
    desc: "Citizen-issue reporting & resolution platform with role-based dashboards and analytics.",
    tech: ["React", "Node.js", "MySQL"],
    category: "Web",
    gradient: "from-blue-500 to-violet-500",
    github: "#",
    live: "#",
  },
  {
    title: "Institute Management Dashboard",
    desc: "Power BI dashboard tracking student, faculty and academic KPIs across departments.",
    tech: ["Power BI", "SQL Server", "DAX"],
    category: "Dashboard",
    gradient: "from-violet-500 to-fuchsia-500",
    github: "#",
    live: "#",
  },
  {
    title: "Sales Insights Dashboard",
    desc: "Interactive Power BI report with KPIs, trends, and drill-through customer analysis.",
    tech: ["Power BI", "MySQL"],
    category: "Dashboard",
    gradient: "from-indigo-500 to-purple-500",
    github: "#",
    live: "#",
  },
  {
    title: "Doctor Appointment Booking System",
    desc: "A full-stack healthcare management system that allows patients to book doctor appointments, manage schedules, view available slots, and prevent double bookings with real-time appointment tracking.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Web",
    gradient: "from-blue-500 to-cyan-500",
    github: "#",
    live: "#",
  },
];

const filters = ["All", "Web", "Database", "Dashboard"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              // 03 — projects
            </div>

            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Things I've <span className="text-gradient">built</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A selection of academic and personal projects across full-stack
              web, databases and BI dashboards.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                    : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-violet"
              >
                <div
                  className={`relative aspect-video overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="absolute inset-0 grid-bg opacity-40" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-white/90 drop-shadow-lg">
                      {p.title.split(" ")[0]}
                    </span>
                  </div>

                  <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-mono text-white backdrop-blur">
                    {p.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {p.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-brand px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}