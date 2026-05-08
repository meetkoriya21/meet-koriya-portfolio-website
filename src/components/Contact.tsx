import { useState, useEffect } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your Public Key
emailjs.init("lw79mDJ28MM-HLw0h");

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_0byox5s",      // Replace with your EmailJS Service ID
        "template_65pv9jc",     // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          to_email: "meetkoriya254@gmail.com", // Your email address
        }
      );

      if (result.status === 200) {
        toast.success("✨ Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      Icon: Mail,
      label: "Email",
      value: "meetkoriya254@gmail.com",
      href: "mailto:meetkoriya254@gmail.com",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/meet-koriya",
      href: "https://www.linkedin.com/in/meet-koriya-161931325/",
    },
    {
      Icon: Github,
      label: "GitHub",
      value: "github.com/meetkoriya21",
      href: "https://github.com/meetkoriya21",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
              // 06 — contact
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Let's <span className="text-gradient">build something</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Recruiters, founders, fellow students — drop a message and I'll
              reply soon.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* LEFT SIDE - CONTACT INFO */}
          <Reveal>
            <div className="glass rounded-3xl p-8 shadow-elegant">
              <h3 className="font-display text-xl font-semibold">Reach me at</h3>
              <div className="mt-6 space-y-4">
                {contactLinks.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href || "#"}
                    target={href ? "_blank" : undefined}
                    rel={href ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10 cursor-pointer"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-brand shadow-glow group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE - CONTACT FORM */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-3xl p-8 shadow-elegant"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                placeholder="Internship opportunity, project, etc."
                className="mt-4"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you'd like to work on..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground/60 text-white focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span> Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground/60 text-white focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
      />
    </div>
  );
}
