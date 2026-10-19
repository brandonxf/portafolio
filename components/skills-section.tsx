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

const midpoint = Math.ceil(technologies.length / 2)
const firstRow = technologies.slice(0, midpoint)
const secondRow = technologies.slice(midpoint)

function TechPill({ tech }: { tech: (typeof technologies)[number] }) {
  return (
    <div className="glass flex shrink-0 items-center gap-3 rounded-full border border-white/10 px-5 py-3 transition-colors hover:border-neon-cyan/30">
      <tech.icon className="h-6 w-6 shrink-0" style={{ color: tech.color }} />
      <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">{tech.name}</span>
    </div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-12">
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

          {/* Tech Logos Marquee */}
          <div className="relative flex flex-col gap-6 overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-4 animate-[marquee-left_32s_linear_infinite] hover:paused">
              {[...firstRow, ...firstRow].map((tech, index) => (
                <TechPill key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </div>

            <div className="flex w-max gap-4 animate-[marquee-right_38s_linear_infinite] hover:paused">
              {[...secondRow, ...secondRow].map((tech, index) => (
                <TechPill key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
