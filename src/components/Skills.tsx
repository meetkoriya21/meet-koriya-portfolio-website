import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 82 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "DynamoDB", level: 78 },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 82 },
      { name: "API Gateway", level: 80 },
      { name: "Postman", level: 88 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "GitHub", level: 92 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              // 02 — skills
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Tools I work with <span className="text-gradient">every day</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Proficient across full-stack development, cloud services, databases, and modern development tools
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:border-accent/40 border border-white/10">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                  <span className="rounded-full bg-gradient-brand/20 px-3 py-1 text-xs font-medium text-accent">
                    {g.skills.length} skills
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {g.skills.map((s) => (
                    <div key={s.name} className="group">
                      {/* Skill Name and Level */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          {s.name}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {s.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 overflow-hidden rounded-full bg-white/5 border border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-brand shadow-glow"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Summary Stats */}
        <Reveal delay={0.5}>
          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              { label: "Languages", value: "4" },
              { label: "Frontend Skills", value: "4" },
              { label: "Backend Skills", value: "2" },
              { label: "Tools & Services", value: "10+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-xl border border-white/10 p-6 text-center"
              >
                <div className="font-display text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}