"use client"
import { motion } from "framer-motion"
import { Shield, Network, Cloud, Lock, Server, Terminal } from "lucide-react"

const SectionHeader = ({ title, id }: { title: string, id: string }) => (
  <div className="flex items-center gap-4 mb-8 pt-20" id={id}>
    <h2 className="text-3xl font-bold text-white font-mono">{title}</h2>
    <div className="h-px bg-slate-800 flex-1"></div>
  </div>
);

export function About() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="./about-me.sh" id="about" />
      <div className="glass-panel p-8 text-lg text-slate-300 leading-relaxed border-l-4 border-l-primary">
        <p className="mb-4">
          Engineering student specializing in Cybersecurity and Cloud Computing at <span className="text-white font-semibold">ENSAM Casablanca</span> (2022 – 2027). 
          Passionate about network security, SOC automation, SIEM architectures, and cloud technologies.
        </p>
        <p>
          Focused on building practical cybersecurity solutions using Python, OpenSearch, Wazuh, automation pipelines, and modern infrastructure technologies.
        </p>
      </div>
    </section>
  )
}

export function Experience() {
  const experiences = [
    {
      title: "Network Security Engineer Intern",
      company: "Sofretim Casablanca",
      date: "July 2025 – August 2025",
      points: [
        "Developed an automated pipeline for collecting and analyzing network logs using tcpdump and Logstash",
        "Implemented indexing and dynamic search capabilities using OpenSearch",
        "Created interactive network topology visualizations for infrastructure monitoring"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "ShadowFox",
      date: "June 2025 – July 2025",
      points: [
        "Performed reconnaissance and web application testing",
        "Practiced password cracking and VeraCrypt file decryption",
        "Executed Metasploit-based reverse shell exploitation in controlled environments"
      ]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="./experience.log" id="experience" />
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div 
            whileHover={{ scale: 1.01 }}
            key={i} 
            className="glass-panel p-6 glow-primary transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
            <div className="flex justify-between items-center text-secondary font-mono text-sm mb-4 mt-2">
              <span>@ {exp.company}</span>
              <span>{exp.date}</span>
            </div>
            <ul className="space-y-2 text-slate-400">
              {exp.points.map((pt, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-primary mt-1">▹</span> {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: "SOC Copilot",
      desc: "AI-powered SOC automation platform integrating Wazuh, LangGraph, Mistral AI, Neo4j, and RAG pipelines.",
      icon: <Terminal className="text-primary" />
    },
    {
      title: "WAZUH-ML UEBA",
      desc: "Behavioral analysis platform using Wazuh and Machine Learning for anomaly detection across 200k+ user and system logs.",
      icon: <Shield className="text-secondary" />
    },
    {
      title: "Web Application Firewall",
      desc: "Comparison and implementation of custom vs open-source WAF architectures.",
      icon: <Lock className="text-primary" />
    },
    {
      title: "Python Network Sniffer",
      desc: "Packet sniffer built in Python for detailed network traffic analysis and monitoring.",
      icon: <Network className="text-secondary" />
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="./projects.exe" id="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.div 
            whileHover={{ y: -5 }}
            key={i} 
            className="glass-panel p-6 hover:border-slate-600 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors">
                {proj.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export function SkillsAndCerts() {
  const certs = ["Fortinet FCP-SASE", "FortiGate 7.4 Administrator", "FortiSASE & SD-WAN 7.6 Core", "Google Cybersecurity Professional", "Cisco Cybersecurity Essentials", "AWS Academy Cloud Foundations"];
  const skills = ["SIEM", "Log Analysis", "Network Security", "Wazuh", "OpenSearch", "Python", "Virtualization", "Firewall Configuration"];

  return (
    <section className="max-w-5xl mx-auto px-6 pb-32">
      <SectionHeader title="./capabilities.json" id="skills" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-mono text-secondary mb-4 flex items-center gap-2">
            <Server size={18} /> "Certifications"
          </h3>
          <div className="flex flex-col gap-3">
            {certs.map((cert, i) => (
              <div key={i} className="glass-panel px-4 py-3 text-sm text-slate-300 border-l-2 border-l-secondary">
                {cert}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-mono text-primary mb-4 flex items-center gap-2">
            <Cloud size={18} /> "Core_Skills"
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="glass-panel px-4 py-2 text-sm text-primary bg-primary/5 hover:bg-primary/10 cursor-default transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8">
             <h3 className="text-lg font-mono text-slate-400 mb-4 flex items-center gap-2">
              <Network size={18} /> "Leadership_&_Volunteer"
            </h3>
            <div className="glass-panel p-4 text-sm text-slate-400">
              <p className="mb-2"><strong className="text-white">Treasurer / Vice President</strong> - Sawaid Al Amal ENSAM Casablanca (2024–Present)</p>
              <p><strong className="text-white">Motatawi3 Participant</strong> - MJCC Ministry of Youth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}