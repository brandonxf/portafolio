"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
  SiFigma,
  SiGithub,
  SiVercel,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNpm,
  SiPnpm,
  SiGit,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const technologies = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Neon", icon: SiPostgresql, color: "#00E5FF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "npm", icon: SiNpm, color: "#CB3837" },
  { name: "pnpm", icon: SiPnpm, color: "#F69220" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "APIs", icon: TbApi, color: "#8B5CF6" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-12 scroll-mt-5 lg:scroll-mt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-neon-blue/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-neon-purple/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
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
              Habilidades
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            >
              Tecnologías que <span className="text-gradient">domino</span>
            </motion.h2>
          </div>

          {/* Tech Logos Grid */}
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass flex flex-col items-center justify-center rounded-2xl p-4 transition-all hover:border-glow hover:shadow-lg hover:shadow-neon-cyan/10"
              >
                <tech.icon className="h-10 w-10" style={{ color: tech.color }} />
                <span className="mt-3 text-center text-xs font-medium text-muted-foreground">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
