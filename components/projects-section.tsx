"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { asset } from "@/lib/asset"

const projects = [
  {
    id: 1,
    title: "NeuroCres",
    description: "Aplicación de psicología infantil para el seguimiento del desarrollo neurológico y conductual de pacientes.",
    image: "/projects/neurocres.png",
    tags: ["TypeScript", "Next.js", "Vercel"],
    github: "https://github.com/brandonxf/NeuroCres",
    live: "https://neurocres.vercel.app",
    color: "from-neon-cyan/20 to-neon-blue/20",
  },
  {
    id: 2,
    title: "LifeOS 2.0",
    description: "Sistema personal para organizar tareas, hábitos y metas, pensado para tomar control total de tu vida diaria.",
    image: "/projects/lifeos.png",
    tags: ["TypeScript", "Next.js", "Vercel"],
    github: "https://github.com/brandonxf/LifeOS-2.0",
    live: "https://life-os-2-0-client.vercel.app",
    color: "from-neon-purple/20 to-neon-blue/20",
  },
  {
    id: 3,
    title: "ServiMatch",
    description: "Marketplace de servicios bajo demanda que conecta clientes con trabajadores calificados (plomeros, electricistas, soldadores) por geolocalización, con chat y calificaciones en tiempo real.",
    image: "/projects/servimatch.png",
    tags: ["TypeScript", "Next.js", "Geolocalización"],
    github: "https://github.com/brandonxf/ServiMatch",
    live: "https://servi-match.vercel.app",
    color: "from-neon-cyan/20 to-neon-purple/20",
  },
  {
    id: 4,
    title: "IntegraSEO",
    description: "Sistema de gestión de contratos y operaciones multi-usuario, con autenticación y base de datos en tiempo real.",
    image: "/projects/integraseo.png",
    tags: ["Next.js", "React", "Firebase", "TypeScript"],
    github: "https://github.com/brandonxf/integraseo",
    live: "https://integraseo.vercel.app",
    color: "from-neon-blue/20 to-neon-cyan/20",
  },
  {
    id: 5,
    title: "CitaGest",
    description: "Sistema de gestión y agendamiento de citas para negocios y profesionales independientes.",
    image: "/projects/citagest.png",
    tags: ["TypeScript", "Next.js", "Vercel"],
    github: "https://github.com/brandonxf/CitaGest",
    live: "https://cita-gest.vercel.app",
    color: "from-neon-purple/20 to-neon-cyan/20",
  },
  {
    id: 6,
    title: "Downly",
    description: "Página web para descargar video o audio a partir de un link, con procesamiento en el servidor.",
    image: "/projects/downly.png",
    tags: ["Python", "Render"],
    github: "https://github.com/brandonxf/Downly",
    live: "https://downly-8a0h.onrender.com",
    color: "from-neon-blue/20 to-neon-purple/20",
  },
  {
    id: 7,
    title: "Granja Colombia Verde",
    description: "Sitio web para una granja colombiana, con presentación de productos y contacto para clientes.",
    image: "/projects/granja.png",
    tags: ["JavaScript", "Vercel"],
    github: "https://github.com/brandonxf/granja",
    live: "https://granja-nu.vercel.app",
    color: "from-neon-cyan/20 to-neon-blue/20",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-12">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-widest text-neon-cyan uppercase"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            >
              Proyectos <span className="text-gradient">Destacados</span>
            </motion.h2>
          </div>

          {/* Project list */}
          <div className="flex flex-col gap-24">
            {projects.map((project, index) => {
              const isReversed = index % 2 === 1

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`group flex flex-col items-center gap-8 lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2">
                    <div
                      className={`absolute -inset-4 -z-10 rounded-3xl bg-linear-to-br ${project.color} opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80`}
                    />
                    <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 sm:h-80">
                      <Image
                        src={asset(project.image)}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <span className="text-sm text-neon-cyan">
                      Proyecto {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-neon-blue/20 bg-neon-blue/10 px-3 py-1 text-xs font-medium text-neon-cyan"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex gap-4">
                      <motion.a
                        href={project.github}
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
                        href={project.live}
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
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
