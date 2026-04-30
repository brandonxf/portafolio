"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen">
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-15 sm:py-32 lg:px-10 lg:py-7">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-16"
        >
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient"
            >
              Brandon Acevedo
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg font-medium tracking-widest text-neon-cyan uppercase"
            >
              Desarrollador Full Stack
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight"
            >
              <span className="text-muted-foreground">Transformo ideas en</span>
              <br />
              <span className="text-gradient">soluciones digitales</span>
            </motion.h2>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0 lg:-translate-x-4"
          >
            <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/90 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
              <div className="relative h-80 w-full overflow-hidden bg-slate-900 sm:h-90">
                <Image
                  src="/brandon.png"
                  alt="Brandon Acevedo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-6 text-slate-200">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Perfil</p>
                  <h3 className="mt-2 text-2xl font-semibold">Brandon Acevedo</h3>
                </div>

                <div className="grid gap-3 rounded-3xl bg-slate-900/80 p-4 text-sm">
                  <div className="flex items-center justify-between text-slate-100">
                    <span className="text-xs uppercase text-cyan-300">Edad</span>
                    <span>19 años</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-100">
                    <span className="text-xs uppercase text-cyan-300">Ubicación</span>
                    <span>Barranquilla, Colombia</span>
                  </div>
                  <div className="text-xs leading-5 text-slate-300">
                    Desarrollador Full Stack con pasión por crear interfaces limpias, modernas y funcionales.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Buttons and social icons - left aligned below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-8 lg:items-start lg:-mt-25"
        >
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 pt-4"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:dev@example.com", label: "Email" },
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