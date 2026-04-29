"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Smartphone, Database, Palette, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Sitios web y aplicaciones web modernas, rápidas y optimizadas para SEO usando las últimas tecnologías.",
    features: ["React/Next.js", "Responsive Design", "SEO Optimizado", "Alto Rendimiento"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones móviles nativas y multiplataforma con experiencias de usuario fluidas y atractivas.",
    features: ["React Native", "iOS & Android", "UX/UI Moderno", "Offline First"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Arquitecturas de servidor robustas y APIs RESTful/GraphQL escalables y seguras.",
    features: ["Node.js/Python", "Microservicios", "Base de Datos", "API Design"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces de usuario atractivas y experiencias de usuario intuitivas centradas en el cliente.",
    features: ["Design System", "Prototipado", "User Research", "Accesibilidad"],
  },
  {
    icon: Zap,
    title: "Optimización",
    description:
      "Mejora del rendimiento, velocidad de carga y experiencia general de aplicaciones existentes.",
    features: ["Performance Audit", "Core Web Vitals", "Caching", "CDN Setup"],
  },
  {
    icon: Shield,
    title: "Consultoría",
    description:
      "Asesoramiento técnico y estratégico para startups y empresas en transformación digital.",
    features: ["Tech Strategy", "Code Review", "Architecture", "Best Practices"],
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest text-neon-cyan uppercase"
            >
              Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            >
              ¿Cómo puedo <span className="text-gradient">ayudarte</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            >
              Ofrezco una amplia gama de servicios de desarrollo para llevar tu proyecto al siguiente nivel
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass group relative overflow-hidden rounded-2xl p-8 transition-all hover:border-glow"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-6 inline-flex rounded-xl bg-neon-blue/20 p-4"
                >
                  <service.icon className="h-8 w-8 text-neon-cyan" />
                </motion.div>

                <h3 className="relative mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="relative mb-6 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="relative space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-neon-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="mb-6 text-muted-foreground">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-neon-blue px-8 py-3 font-medium text-background transition-all hover:glow-blue"
            >
              Empezar Proyecto
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
