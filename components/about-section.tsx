"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const stats = [
  { value: "5+", label: "Años de Experiencia" },
  { value: "50+", label: "Proyectos Completados" },
  { value: "30+", label: "Clientes Satisfechos" },
  { value: "100%", label: "Compromiso" },
]

const values = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Escribo código mantenible, escalable y bien documentado.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Siempre buscando las mejores soluciones tecnológicas.",
  },
  {
    icon: Rocket,
    title: "Rendimiento",
    description: "Aplicaciones rápidas y optimizadas para el usuario.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo y comunicación efectiva.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-2"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium tracking-widest text-neon-cyan uppercase"
              >
                Sobre Mí
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="mt-4 text-3xl font-bold sm:text-4xl"
              >
                Desarrollador apasionado por crear{" "}
                <span className="text-gradient">experiencias digitales</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Desarrollador web con pasión por crear experiencias digitales modernas y funcionales.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Values */}
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass group rounded-2xl p-6 transition-all hover:border-glow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 inline-flex rounded-xl bg-neon-blue/20 p-3"
                >
                  <value.icon className="h-6 w-6 text-neon-cyan" />
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
