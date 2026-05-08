import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "Power BI Enthusiast",
  "SQL Developer",
  "Computer Engineer",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = titles[i % titles.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") { setDel(false); setI((x) => x + 1); }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-radial blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        {/* ── Photo: shown on mobile (above text) + desktop (right column) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-sm lg:order-last lg:max-w-md"
        >
          {/* Glow Background */}
          <div className="absolute -inset-6 rounded-full bg-gradient-brand opacity-20 blur-3xl spin-slow" />

          {/* Professional Photo Container */}
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ring-glow float shadow-elegant">
            <img
              src="/images/profile-professional.jpg"
              alt="Meet Koriya - Professional Portrait"
              width={768}
              height={768}
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Status Badges — hidden on small mobile to avoid overflow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-4 -left-4 hidden sm:block rounded-2xl glass-strong px-4 py-3 shadow-elegant backdrop-blur border border-white/10"
          >
            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Currently building</div>
            <div className="font-display text-sm font-semibold">Full-stack apps ⚡</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -right-4 top-8 hidden sm:block rounded-2xl glass-strong px-4 py-3 shadow-elegant backdrop-blur border border-white/10"
          >
            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Based in</div>
            <div className="font-display text-sm font-semibold">India 🇮🇳</div>
          </motion.div>
        </motion.div>

        {/* ── Text content ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Available for internships & freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Meet Koriya</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex h-9 items-center font-mono text-lg text-muted-foreground sm:text-xl"
          >
            <span className="mr-2 text-accent">&gt;</span>
            <span>{typed}</span>
            <span className="caret ml-1 inline-block h-5 w-[2px] bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Computer Engineering student passionate about crafting clean web experiences,
            insightful dashboards and reliable databases. I turn ideas into products that
            actually ship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#resume" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground hover:text-accent">
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { Icon: Github, href: "https://github.com/meetkoriya21", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/meet-koriya-161931325/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:meetkoriya254@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:bg-white/10"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}