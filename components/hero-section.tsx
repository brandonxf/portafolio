"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen">
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-15 sm:py-32 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16"
        >
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-full space-y-4 border-l-2 border-neon-cyan/50 pl-6 text-left sm:pl-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs sm:text-sm font-medium tracking-[0.3em] text-neon-cyan uppercase"
            >
              Desarrollador Full Stack
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient"
            >
              Brandon Acevedo
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug"
            >
              <span className="text-muted-foreground">Transformo ideas en </span>
              <span className="text-gradient">soluciones digitales</span>
            </motion.h2>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-neon-blue px-8 py-3 font-medium text-background transition-all hover:glow-blue"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <motion.div
                  className="absolute inset-0 bg-neon-cyan"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-glow bg-transparent px-8 py-3 font-medium text-foreground transition-all hover:bg-neon-blue/10"
              >
                Contactar
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: Github, href: "https://github.com/brandonxf", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/brandonxf", label: "LinkedIn" },
                { icon: Mail, href: "mailto:brandonace07@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground transition-colors hover:text-neon-cyan"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="shrink-0 lg:-translate-x-4"
          >
            <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-cyan-500/5 backdrop-blur-2xl">
              <div className="relative h-80 w-full overflow-hidden sm:h-90">
                <Image
                  src="/brandon.png"
                  alt="Brandon Acevedo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/0 to-transparent" />
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Perfil</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">Brandon Acevedo</h3>
                </div>

                <div className="divide-y divide-white/10 border-t border-white/10 text-sm">
                  <div className="flex items-center justify-between py-3 text-slate-200">
                    <span className="text-xs uppercase tracking-wider text-cyan-300/70">Edad</span>
                    <span>19 años</span>
                  </div>
                  <div className="flex items-center justify-between py-3 text-slate-200">
                    <span className="text-xs uppercase tracking-wider text-cyan-300/70">Ubicación</span>
                    <span>Barranquilla, Colombia</span>
                  </div>
                </div>

                <p className="text-xs leading-5 text-slate-400">
                  Desarrollador Full Stack con pasión por crear interfaces limpias, modernas y funcionales.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-neon-cyan"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}