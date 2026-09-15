import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profile } from "@/lib/portfolio";

export default function TerminalHero() {
  return (
    <section className="shell hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability">
          <span />
          {profile.availability}
        </div>
        <p className="eyebrow hero-intro">HELLO, I’M MOSSAAB</p>
        <h1 id="hero-title">
          Securing systems.
          <br />
          <span>
            Understanding
            <br className="desktop-break" /> what’s underneath.
          </span>
        </h1>
        <p className="hero-description">
          Cybersecurity &amp; Cloud Computing engineering student at ENSAM
          Casablanca. I build tools for cloud security, threat detection, and
          SOC automation.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work <ArrowUpRight size={18} />
          </a>
          <a href={profile.resume} download className="button button-secondary">
            <Download size={17} /> Download CV
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={14} />
            {profile.location}
          </span>
          <span className="meta-divider" />
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="terminal-card">
        <div className="terminal-bar">
          <div className="terminal-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>mossaab@portfolio:~</span>
          <ShieldCheck size={15} aria-hidden="true" />
        </div>
        <div className="terminal-body">
          <p className="terminal-command">
            <span>❯</span> cat profile.yaml
          </p>
          <div className="terminal-code">
            <p>
              <span>name:</span> Mossaab Ratby
            </p>
            <p>
              <span>education:</span> ENSAM Casablanca
            </p>
            <p>
              <span>graduation:</span> 2027
            </p>
            <p>
              <span>focus:</span>
            </p>
            <p className="code-indent">- cloud_security</p>
            <p className="code-indent">- threat_detection</p>
            <p className="code-indent">- soc_automation</p>
          </div>
          <div className="terminal-separator" />
          <p className="terminal-command">
            <span>❯</span> cat approach.txt
          </p>
          <div className="pipeline">
            <span>Discover</span>
            <span aria-hidden="true">→</span>
            <span>Analyze</span>
            <span aria-hidden="true">→</span>
            <span>Defend</span>
          </div>
          <p className="terminal-note">
            From infrastructure visibility
            <br />
            to actionable security findings.
          </p>
          <p className="terminal-prompt" aria-hidden="true">
            ❯ <span />
          </p>
        </div>
        <div className="terminal-footer">
          <span className="status-dot" />
          Curiosity is part of the toolkit.
        </div>
      </div>
      <a className="scroll-link" href="#about">
        <ArrowDown size={14} /> A little more about me
      </a>
    </section>
  );
}
