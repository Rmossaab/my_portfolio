export const profile = {
  name: "Mossaab Ratby",
  role: "Cybersecurity & Cloud Computing Engineering Student",
  email: "ratbymossab@gmail.com",
  location: "Casablanca, Morocco",
  github: "https://github.com/Rmossaab",
  linkedin: "https://www.linkedin.com/in/mossaab-ratby-89918a252/",
  resume: "/Mossaab-Ratby-CV.pdf",
  availability: "Seeking a PFE internship · January 2027",
};

export const experiences = [
  {
    role: "Cloud Security Intern",
    company: "Dataprotect",
    location: "Casablanca",
    period: "Jul — Sep 2026",
    logo: "/logos/dataprotect.svg",
    website: "https://www.dataprotect.ma/",
    tags: ["AWS", "CSPM", "S3", "IAM", "Risk assessment"],
    points: [
      "Developed an automated cloud security posture management (CSPM) tool to discover cloud resources and identify misconfigurations across S3, IAM, and orphaned assets.",
      "Implemented risk assessment and scoring aligned with AWS Foundational Security Best Practices, prioritizing findings by severity, exposure, and security impact.",
    ],
  },
  {
    role: "Network Security Engineer Intern",
    company: "Sofretim",
    location: "Casablanca",
    period: "Jul — Aug 2025",
    logo: "/logos/sofretim.jpg",
    website: "https://www.sofretim.com/",
    tags: ["tcpdump", "Logstash", "OpenSearch", "Network monitoring"],
    points: [
      "Developed an automated pipeline for collecting and analyzing network logs with tcpdump and Logstash.",
      "Implemented data indexing and dynamic search with OpenSearch, and built interactive network topology visualizations for infrastructure monitoring.",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "ShadowFox",
    location: "",
    period: "Jun — Jul 2025",
    logo: null,
    website: "https://www.shadowfox.in/",
    tags: ["Web security", "Metasploit", "VeraCrypt"],
    points: [
      "Performed reconnaissance and web application testing, with password cracking and VeraCrypt decryption exercises.",
      "Practiced Metasploit reverse shell exploitation in controlled environments.",
    ],
  },
];

export const projects = [
  {
    title: "SOC Copilot",
    category: "Security automation",
    summary:
      "Bringing AI-assisted investigation to the security operations center.",
    description:
      "An AI-powered SOC automation platform integrating Wazuh, LangGraph, Mistral, Neo4j, and retrieval-augmented generation (RAG) pipelines.",
    focus: "Security alert investigation and incident response automation.",
    stack: ["Wazuh", "LangGraph", "Mistral", "Neo4j", "RAG"],
    repository: "https://github.com/Rmossaab/SOC-Copilot",
    highlight: "AI + security operations",
  },
  {
    title: "Wazuh-ML · UEBA",
    category: "Threat detection",
    summary:
      "Finding unusual behavior in more than 200,000 user and system logs.",
    description:
      "Designed a user and entity behavior analytics (UEBA) system using Wazuh and machine learning to detect anomalies in user and system activity.",
    focus: "Behavioral analysis across 200k+ user and system logs.",
    stack: ["Wazuh", "Machine learning", "Log analysis", "UEBA"],
    repository: null,
    highlight: "200k+ logs analyzed",
  },
  {
    title: "Web Application Firewall",
    category: "Application security",
    summary:
      "Exploring custom and open-source approaches to protecting web applications.",
    description:
      "A project comparing and implementing custom versus open-source web application firewall architectures.",
    focus: "Web traffic inspection and application-layer defense.",
    stack: ["WAF", "Web security", "Traffic inspection"],
    repository: "https://github.com/Rmossaab/Custom-Waf",
    highlight: "Custom vs. open source",
  },
  {
    title: "Python Packet Sniffer",
    category: "Network visibility",
    summary: "A closer look at network traffic, one packet at a time.",
    description:
      "A Python network packet sniffer using raw sockets for detailed traffic analysis and monitoring.",
    focus: "Packet capture and understanding network communications.",
    stack: ["Python", "Raw sockets", "Networking"],
    repository: "https://github.com/Rmossaab/packet-sniffer",
    highlight: "Built with Python",
  },
];

// Issuer logos identify the provider; they are not credential verification links.
export const credentials = [
  {
    issuer: "Amazon Web Services",
    logo: "/logos/aws-cloud-practitioner.png",
    title: "AWS Certified Cloud Practitioner",
    detail: "CLF-C02 · Foundational certification",
    featured: true,
  },
  {
    issuer: "Fortinet",
    logo: "/logos/fortinet.svg",
    title: "FCP — SASE",
    detail:
      "FortiGate 7.4 Administrator · FortiSASE and SD-WAN 7.6 Core Administrator",
    featured: false,
  },
  {
    issuer: "Google",
    logo: "/logos/google.svg",
    title: "Google Cybersecurity",
    detail: "Cybersecurity specialization",
    featured: false,
  },
  {
    issuer: "Cisco",
    logo: "/logos/cisco.svg",
    title: "Cybersecurity Essentials & Network Defense",
    detail: "Networking and defensive security",
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "Cloud & infrastructure",
    skills: ["AWS", "Cloud security", "CSPM", "IAM", "Virtualization"],
  },
  {
    title: "Detection & defense",
    skills: [
      "SIEM",
      "Wazuh",
      "OpenSearch",
      "Log analysis",
      "Network security",
      "Firewall configuration",
    ],
  },
  {
    title: "Code & automation",
    skills: ["Python", "Logstash", "tcpdump", "LangGraph", "RAG pipelines"],
  },
];
