"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos integrados y panel de administración.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-neon-cyan/20 to-neon-blue/20",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Dashboard interactivo con visualizaciones de datos en tiempo real y análisis predictivo con IA.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-neon-purple/20 to-neon-blue/20",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Aplicación social con mensajería en tiempo real, feed personalizado y sistema de notificaciones.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    id: 4,
    title: "SaaS Platform",
    description: "Plataforma SaaS completa con autenticación, suscripciones y gestión de equipos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "Stripe", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-neon-blue/20 to-neon-cyan/20",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="relative py-32">
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
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            >
              Proyectos <span className="text-gradient">Destacados</span>
            </motion.h2>
          </div>

          {/* Featured Project */}
          <div className="relative mb-12">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`glass overflow-hidden rounded-3xl bg-gradient-to-br ${projects[activeIndex].color}`}
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden lg:h-auto">
                  <Image
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-2 text-sm text-neon-cyan"
                  >
                    Proyecto {activeIndex + 1}/{projects.length}
                  </motion.span>
                  <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {projects[activeIndex].description}
                  </p>

                  {/* Tags */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {projects[activeIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neon-blue/20 px-3 py-1 text-xs font-medium text-neon-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={projects[activeIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full border-glow px-6 py-2 text-sm font-medium transition-all hover:bg-neon-blue/10"
                    >
                      <Github size={18} />
                      Código
                    </motion.a>
                    <motion.a
                      href={projects[activeIndex].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full bg-neon-blue px-6 py-2 text-sm font-medium text-background transition-all hover:glow-blue"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className="glass rounded-full p-3 transition-all hover:border-glow"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className="glass rounded-full p-3 transition-all hover:border-glow"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          {/* Project Thumbnails */}
          <div className="mt-12 flex justify-center gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-16 w-24 overflow-hidden rounded-lg transition-all ${
                  index === activeIndex ? "ring-2 ring-neon-cyan" : "opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
