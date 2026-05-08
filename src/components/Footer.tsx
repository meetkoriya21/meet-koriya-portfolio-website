import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Meet Koriya</span>. Crafted with <Heart className="inline h-3.5 w-3.5 text-accent" /> & lots of coffee.
        </p>
        <div className="flex items-center gap-2">
          {[
            { Icon: Github, href: "https://github.com/", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:meet.koriya@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"
               className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-accent/40 hover:text-accent">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
