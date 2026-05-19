import TerminalHero from "@/components/TerminalHero";
import { About, Experience, Projects, SkillsAndCerts } from "@/components/Sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative z-10">
      {/* Floating Navigation (Optional but clean) */}
      <nav className="fixed top-0 w-full glass-panel !rounded-none border-t-0 border-x-0 z-50 py-4 px-6 bg-background/80">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-mono font-bold text-white tracking-tighter">mr<span className="text-primary">.void</span></span>
          <div className="hidden md:flex gap-6 font-mono text-sm text-slate-400">
            <a href="#about" className="hover:text-primary transition-colors">./about</a>
            <a href="#experience" className="hover:text-primary transition-colors">./experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">./projects</a>
          </div>
        </div>
      </nav>

      <TerminalHero />
      <div className="space-y-20">
        <About />
        <Experience />
        <Projects />
        <SkillsAndCerts />
      </div>

      <footer className="glass-panel !rounded-none border-b-0 border-x-0 py-8 text-center text-slate-500 font-mono text-sm mt-20">
        <p>System mapped and maintained by Mossaab Ratby.</p>
        <p className="mt-2 text-xs opacity-50">© 2026 Secure Connection Terminated.</p>
      </footer>
    </main>
  );
}