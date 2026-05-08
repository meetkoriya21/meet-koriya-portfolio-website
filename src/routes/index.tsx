import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { CursorGlow } from "@/components/CursorGlow";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meet Koriya — Full Stack Developer & Power BI Enthusiast" },
      { name: "description", content: "Portfolio of Meet Koriya, a Computer Engineering student building full-stack web apps, dashboards and database systems." },
      { property: "og:title", content: "Meet Koriya — Full Stack Developer Portfolio" },
      { property: "og:description", content: "Full Stack Developer · Power BI Enthusiast · SQL Developer." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip dark">
      <Loader />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <Particles />
      <CursorGlow />
      <Toaster theme="dark" position="top-center" richColors />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        {/* ❌ REMOVED: <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}