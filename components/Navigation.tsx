"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Credentials", "certifications"],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <nav className="shell navigation" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#home"
          aria-label="Mossaab Ratby, home"
          onClick={() => setOpen(false)}
        >
          mr<span>.</span>
          <span className="wordmark-name">MOSSAAB RATBY</span>
        </a>
        <div className="desktop-links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div id="mobile-navigation" className="mobile-links" hidden={!open}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </header>
  );
}
