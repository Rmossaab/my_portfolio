import Navigation from "@/components/Navigation";
import TerminalHero from "@/components/TerminalHero";
import {
  About,
  Contact,
  Experience,
  Projects,
  SkillsAndCerts,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <TerminalHero />
        <div className="focus-strip">
          <div className="shell">
            <span>CLOUD SECURITY</span>
            <i aria-hidden="true">+</i>
            <span>THREAT DETECTION</span>
            <i aria-hidden="true">+</i>
            <span>SOC AUTOMATION</span>
          </div>
        </div>
        <About />
        <Experience />
        <Projects />
        <SkillsAndCerts />
        <Contact />
      </main>
      <footer className="shell site-footer">
        <a href="#home" className="wordmark">
          mr<span>.</span>
        </a>
        <p>© 2026 Mossaab Ratby</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
