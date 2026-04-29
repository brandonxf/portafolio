"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
          >
            {"<Dev />"}
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            © {currentYear} • Hecho con{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 fill-neon-cyan text-neon-cyan" />
            </motion.span>{" "}
            en México
          </motion.p>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <motion.a
              href="#"
              whileHover={{ color: "var(--neon-cyan)" }}
              className="transition-colors"
            >
              Privacidad
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "var(--neon-cyan)" }}
              className="transition-colors"
            >
              Términos
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
