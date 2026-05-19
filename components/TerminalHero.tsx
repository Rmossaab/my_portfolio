"use client"
import { motion } from "framer-motion"
import { Terminal,Link, Mail, ShieldAlert } from "lucide-react"

export default function TerminalHero() {
  const codeLines = [
    "> Initializing SOC environment...",
    "> Establishing secure connection...",
    "> Authenticating user: Mossaab Ratby...",
    "> Access Granted. Welcome, Engineer."
  ];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-1 flex items-center gap-2 mb-8 w-fit"
      >
        <span className="bg-primary/20 text-primary px-3 py-1 rounded-lg font-mono text-sm flex items-center gap-2">
          <ShieldAlert size={16} /> Secure Session Active
        </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
      >
        MOSSAAB <span className="text-primary">RATBY</span>
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-xl md:text-2xl text-secondary font-mono mb-8"
      >
        Cybersecurity & Cloud Computing Engineering Student
      </motion.h2>

      {/* Terminal Typing Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass-panel p-6 border-slate-700 font-mono text-sm md:text-base text-slate-400 max-w-2xl glow-primary"
      >
        <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + (i * 0.4) }}
            className="mb-1"
          >
            {i === codeLines.length - 1 ? (
              <span className="text-primary">{line}</span>
            ) : (
              line
            )}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-5 bg-primary mt-2"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="flex gap-4 mt-10"
      >
        <a href="https://github.com/Rmossaab" target="_blank" rel="noreferrer" className="p-3 glass-panel hover:border-primary transition-colors hover:text-primary">
          <Link size={24} />
        </a>
        <a href="https://linkedin.com/in/mossaab-ratby-89918a252/" target="_blank" rel="noreferrer" className="p-3 glass-panel hover:border-secondary transition-colors hover:text-secondary">
          <Link size={24} />
        </a>
        <a href="mailto:ratbymossab@gmail.com" className="p-3 glass-panel hover:border-primary transition-colors hover:text-primary">
          <Mail size={24} />
        </a>
      </motion.div>
    </section>
  );
}