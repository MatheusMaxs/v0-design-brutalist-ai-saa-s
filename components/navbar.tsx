"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Sobre", href: "#sobre" },
  { label: "Participar", href: "#participar" },
  { label: "Tecnologias", href: "#tecnologias" },
]

export function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 lg:px-6 lg:pt-6"
    >
      <nav className="w-full border border-foreground/20 bg-background/80 backdrop-blur-sm px-6 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <a href="#home" className="text-xs font-mono tracking-[0.15em] uppercase font-bold hover:text-accent transition-colors duration-200">
              {"</> SDP"}
            </a>
          </motion.div>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right side: Login + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
            <a
              href="https://discord.gg/programador"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-xs font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Discord
            </a>
            <motion.a
              href="https://discord.gg/programador"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background px-4 py-2 text-xs font-mono tracking-widest uppercase"
            >
              Junte-se
            </motion.a>
          </motion.div>
        </div>
      </nav>
    </motion.div>
  )
}
