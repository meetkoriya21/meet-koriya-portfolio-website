import { GraduationCap, Award, Briefcase, BookOpen, Code, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    Icon: GraduationCap,
    title: "B.E. Computer Engineering",
    org: "University · Ongoing",
    desc: "Pursuing Bachelor of Engineering in Computer Engineering with strong focus on full-stack development, database management, and cloud technologies.",
    year: "2024-Present",
  },
  {
    Icon: Code,
    title: "Full-Stack Web Development",
    org: "5+ Projects Completed",
    desc: "Built production-ready full-stack applications using MERN stack, including e-commerce platforms, task management systems, and real-time collaboration tools.",
    year: "2023-2025",
  },
  {
    Icon: BookOpen,
    title: "Power BI & Data Analytics",
    org: "Data Visualization Specialist",
    desc: "Developed interactive Power BI dashboards for business intelligence, data analysis, and decision-making across various domains.",
    year: "2023-Present",
  },
  {
    Icon: Award,
    title: "Technical Certifications",
    org: "Power BI · SQL · AWS",
    desc: "Hands-on certifications in Power BI for business analytics, SQL for database management, AWS services (EC2, S3, Lambda, API Gateway), and modern web development best practices.",
    year: "2023-2024",
  },
  {
    Icon: Briefcase,
    title: "Internship Ready",
    org: "SDE / Full Stack / Data",
    desc: "Actively preparing and seeking internship opportunities in Software Development, Full Stack Development, and Data Engineering roles.",
    year: "Current",
  },
  {
    Icon: Target,
    title: "Career Focus",
    org: "Full-Stack Developer",
    desc: "Specializing in MERN stack, backend APIs with Node.js & Express, database design, Power BI dashboards, and cloud deployment on AWS.",
    year: "2025",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              // 04 — experience
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Education & <span className="text-gradient">milestones</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              My journey in computer engineering and full-stack development
            </p>
          </div>
        </Reveal>

        {/* Timeline View */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {items.map(({ Icon, title, org, desc, year }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 md:grid md:grid-cols-2 ${
                    i % 2 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="md:px-8">
                    <div className="glass rounded-2xl p-6 shadow-elegant border border-white/10 hover:border-accent/40 transition-all duration-300">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 mb-3">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-xs font-mono uppercase tracking-widest text-accent">
                          {org}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-semibold text-white">
                        {title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {desc}
                      </p>

                      {/* Year/Date */}
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/70">
                        <span className="inline-block h-1 w-1 rounded-full bg-accent/50" />
                        {year}
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand shadow-glow md:left-1/2 md:-translate-x-1/2 md:top-6">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>

                  {/* Spacer for grid layout */}
                  <div className="hidden md:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <Reveal delay={0.6}>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Current Status",
                value: "B.E. Student",
                desc: "Computer Engineering",
              },
              {
                label: "Specialization",
                value: "Full-Stack Dev",
                desc: "MERN Stack Expert",
              },
              {
                label: "Seeking",
                value: "Internships",
                desc: "SDE / Full Stack",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl border border-white/10 p-6 text-center hover:border-accent/40 transition-all"
              >
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {item.label}
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-gradient">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}