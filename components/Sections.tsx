import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  ChevronDown,
  Download,
  GraduationCap,
  HeartHandshake,
  Languages,
  Mail,
  MapPin,
  Network,
  Shield,
  Terminal,
  Lock,
} from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import {
  credentials,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio";
import CopyEmail from "./CopyEmail";

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">
          {number} / {title.toUpperCase()}
        </p>
        <h2>{description}</h2>
      </div>
      <span className="section-rule" />
    </div>
  );
}

export function About() {
  return (
    <section className="shell section" id="about" aria-label="About me">
      <SectionHeader
        number="01"
        title="About"
        description="A builder with a security mindset."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I’m <strong>Mossaab Ratby</strong>, an engineering student
            specializing in <strong>Cybersecurity and Cloud Computing</strong>{" "}
            at ENSAM Casablanca.
          </p>
          <p>
            I enjoy connecting the dots between infrastructure, data, and
            defense: making cloud risks visible, turning logs into useful
            signals, and automating security workflows.
          </p>
          <p>
            Through internships and hands-on projects, I’m developing practical
            experience in cloud security, network monitoring, and security
            operations.
          </p>
          <div className="language-row">
            <Languages size={18} />
            <span>English · Full proficiency</span>
            <span>French · Professional</span>
          </div>
        </div>
        <div className="education-card">
          <GraduationCap size={25} />
          <p className="eyebrow">EDUCATION</p>
          <h3>ENSAM Casablanca</h3>
          <p>
            Engineering degree in Cybersecurity
            <br />
            &amp; Cloud Computing
          </p>
          <span className="education-period">
            2022 — 2027 · Expected graduation
          </span>
          <div className="education-previous">
            <strong>Physical Sciences Baccalaureate</strong>
            <span>English option · Lycée Molay Abdellah · 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section
      className="shell section"
      id="experience"
      aria-label="Professional experience"
    >
      <SectionHeader
        number="02"
        title="Experience"
        description="Learning by solving real problems."
      />
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <article className="experience-row" key={exp.company}>
            <div className="experience-side">
              <span className="experience-period">{exp.period}</span>
              <a
                href={exp.website}
                target="_blank"
                rel="noreferrer"
                className={`company-logo ${exp.company === "Sofretim" ? "logo-light" : ""}`}
                aria-label={`${exp.company} website`}
              >
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={140}
                    height={46}
                  />
                ) : (
                  <span className="company-monogram" aria-hidden="true">
                    SF
                  </span>
                )}
              </a>
            </div>
            <div className="experience-content">
              <div className="experience-heading">
                <div>
                  <p className="company-name">
                    {exp.company}
                    {exp.location && <span> / {exp.location}</span>}
                  </p>
                  <h3>{exp.role}</h3>
                </div>
                {i === 0 && (
                  <span className="small-label">LATEST EXPERIENCE</span>
                )}
              </div>
              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {exp.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const icons = [Terminal, Shield, Lock, Network];
  return (
    <section
      className="shell section"
      id="projects"
      aria-label="Selected projects"
    >
      <SectionHeader
        number="03"
        title="Selected projects"
        description="Ideas turned into working tools."
      />
      <div className="project-grid">
        {projects.map((project, i) => {
          const Icon = icons[i];
          return (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-icon">
                  <Icon size={23} />
                </span>
                <span className="project-number">0{i + 1}</span>
              </div>
              <p className="eyebrow project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <details className="project-details">
                <summary>
                  Project overview <ChevronDown size={16} />
                </summary>
                <div>
                  <p>{project.description}</p>
                  <p>
                    <strong>Focus:</strong> {project.focus}
                  </p>
                </div>
              </details>
              <div className="project-footer">
                <span>{project.highlight}</span>
                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    Code <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent("Tell me about Wazuh-ML UEBA")}`}
                  >
                    Ask about it <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="text-link all-projects"
      >
        <Github size={17} /> More on GitHub <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

export function SkillsAndCerts() {
  return (
    <>
      <section
        className="shell section"
        id="certifications"
        aria-label="Certifications and skills"
      >
        <SectionHeader
          number="04"
          title="Credentials & skills"
          description="The knowledge behind the work."
        />
        <div className="capabilities-grid">
          <div className="credentials">
            <h3 className="column-title">
              <Award size={18} /> Certifications &amp; training
            </h3>
            {credentials.map((cert) => (
              <article
                key={cert.issuer}
                className={`credential-card ${cert.featured ? "credential-featured" : ""}`}
              >
                <div
                  className={`credential-logo ${cert.featured ? "badge-logo" : ""}`}
                >
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} ${cert.featured ? "Cloud Practitioner badge" : "logo"}`}
                    width={64}
                    height={64}
                  />
                </div>
                <div>
                  <p className="credential-issuer">{cert.issuer}</p>
                  <h4>{cert.title}</h4>
                  <p className="credential-detail">{cert.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="skill-groups" id="skills">
            <h3 className="column-title">
              <Terminal size={18} /> Technical toolkit
            </h3>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="tags skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="working-style">
              <p className="eyebrow">HOW I WORK</p>
              <p>Teamwork. Responsibility. Organization.</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="shell community-section"
        aria-labelledby="community-heading"
      >
        <div>
          <HeartHandshake size={24} />
          <h2 id="community-heading">Beyond the technical work</h2>
          <p>Taking responsibility and contributing to my community.</p>
        </div>
        <div className="community-roles">
          <div>
            <h3>Treasurer / Vice President</h3>
            <p>Sawaid Al Amal · ENSAM Casablanca</p>
            <span>September 2024 — Present</span>
          </div>
          <div>
            <h3>Motatawi3 program · 2nd edition</h3>
            <p>Ministry of Youth, Culture and Communication</p>
            <span>July — August 2024</span>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  return (
    <section
      className="shell section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-card">
        <div>
          <p className="eyebrow">05 / LET’S CONNECT</p>
          <h2 id="contact-heading">
            Have a security challenge?
            <br />
            <span>Let’s talk.</span>
          </h2>
          <p>
            I’m seeking an end-of-studies (PFE) internship starting in{" "}
            <strong>January 2027</strong>, with a focus on cybersecurity, cloud
            security, or SOC automation.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={24} />
          </a>
          <CopyEmail email={profile.email} />
        </div>
        <div className="contact-aside">
          <span>
            <MapPin size={17} /> {profile.location}
          </span>
          <a
            className="button button-primary"
            href={`mailto:${profile.email}?subject=${encodeURIComponent("PFE internship opportunity — January 2027")}`}
          >
            <Mail size={17} /> Get in touch <ArrowUpRight size={17} />
          </a>
          <a className="button button-secondary" href={profile.resume} download>
            <Download size={17} /> Download CV
          </a>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
