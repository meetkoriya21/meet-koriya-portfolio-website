import { Download, FileText, Eye } from "lucide-react";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <Reveal>
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              // 05 — resume
            </div>

            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Grab my <span className="text-gradient">resume</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-strong p-8 shadow-elegant md:p-12">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-brand opacity-20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">

              {/* LEFT SIDE */}
              <div>

                <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <FileText className="h-7 w-7 text-primary-foreground" />
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Meet Koriya — Resume
                </h3>

                <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
                  Full-stack developer specializing in MERN stack,
                  Power BI dashboards, backend APIs, cloud technologies,
                  and scalable management systems.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-4">

                  {/* DOWNLOAD BUTTON */}
                  <a
                    href="/Meet_Koriya_Resume.pdf"
                    download="Meet_Koriya_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>

                  {/* PREVIEW BUTTON */}
                  <a
                    href="/Meet_Koriya_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition-all hover:bg-white/10 hover:scale-105"
                  >
                    <Eye className="h-4 w-4" />
                    Preview Resume
                  </a>

                </div>

              </div>

              {/* RIGHT SIDE PDF PREVIEW */}
              <div className="relative mx-auto w-full max-w-md">

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-elegant">

                  {/* PDF PREVIEW */}
                  <iframe
                    src="/Meet_Koriya_Resume.pdf"
                    title="Resume Preview"
                    className="h-[500px] w-full"
                  />

                </div>

                {/* GLOW EFFECT */}
                <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
