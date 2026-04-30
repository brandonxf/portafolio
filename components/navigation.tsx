"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Code, Settings, MessageSquare, Mail, Menu, X } from "lucide-react"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Mobile: Hamburger Button - Fixed top left */}
      <div className="fixed left-4 top-4 z-[60] md:hidden">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass flex items-center justify-center rounded-xl p-3 shadow-2xl transition-all hover:border-glow"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile: Full-screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel - Slides from left */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-sidebar pt-20 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.href.replace("#", "")

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`group flex items-center gap-3 rounded-xl px-4 py-4 transition-all duration-300 ${
                        isActive
                          ? "bg-neon-cyan/20 text-neon-cyan shadow-lg shadow-neon-cyan/20"
                          : "text-muted-foreground hover:bg-slate-800/50 hover:text-neon-cyan"
                      }`}
                    >
                      <Icon size={22} />
                      <span className="text-base font-medium">{item.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Desktop: Original Sidebar Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      >
        <motion.div
          animate={{ width: 64 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="glass rounded-2xl p-2 shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.href.replace("#", "")

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative flex items-center justify-center rounded-xl p-3 transition-all duration-300 ${
                    isActive
                      ? "bg-neon-cyan/20 text-neon-cyan shadow-lg shadow-neon-cyan/20"
                      : "text-muted-foreground hover:bg-slate-800/50 hover:text-neon-cyan"
                  }`}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
