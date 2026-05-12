import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-slate selection:bg-neon-teal selection:text-white">
      {/* Navigation (Optional, could be its own component) */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-deep-slate/80 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-neon-teal font-mono font-bold text-xl">
            DJ.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono">
            <a href="#experience" className="text-slate-300 hover:text-neon-teal transition-colors">
              <span className="text-electric-blue">01.</span> Experience
            </a>
            <a href="#projects" className="text-slate-300 hover:text-neon-teal transition-colors">
              <span className="text-electric-blue">02.</span> Work
            </a>
            <a href="#skills" className="text-slate-300 hover:text-neon-teal transition-colors">
              <span className="text-electric-blue">03.</span> Skills
            </a>
            <a href="#contact" className="text-slate-300 hover:text-neon-teal transition-colors">
              <span className="text-electric-blue">04.</span> Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <footer className="text-center py-8 text-slate-500 font-mono text-sm border-t border-slate-800/50 mt-20">
        <p>Built with Next.js & Tailwind CSS.</p>
        <p className="mt-2 text-xs">© {new Date().getFullYear()} Devang Jalag. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
