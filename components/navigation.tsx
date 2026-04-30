"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Code, Settings, MessageSquare, Mail, ChevronRight, ChevronLeft } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "#hero", icon: Home },
  { name: "Sobre Mí", href: "#about", icon: User },
  { name: "Proyectos", href: "#projects", icon: Briefcase },
  { name: "Habilidades", href: "#skills", icon: Code },
  { name: "Servicios", href: "#services", icon: Settings },
  { name: "Testimonios", href: "#testimonials", icon: MessageSquare },
  { name: "Contacto", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-6 top-1/2 z-50 -translate-y-1/2"
    >
      <motion.div
        animate={{ width: isExpanded ? 200 : 64 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="glass rounded-2xl p-2 shadow-2xl"
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.replace("#", "")

            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-neon-cyan/20 text-neon-cyan shadow-lg shadow-neon-cyan/20"
                    : "text-muted-foreground hover:bg-slate-800/50 hover:text-neon-cyan"
                }`}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={20} />
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10, width: 0 }}
                      animate={{ opacity: 1, x: 0, width: "auto" }}
                      exit={{ opacity: 0, x: -10, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="whitespace-nowrap text-sm font-medium overflow-hidden"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
            )
          })}

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative mt-4 flex items-center justify-center rounded-xl bg-slate-800/50 p-3 text-muted-foreground transition-all duration-300 hover:bg-neon-cyan/20 hover:text-neon-cyan"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight size={16} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
