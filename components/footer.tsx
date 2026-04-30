"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/brandonxf", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/brandonxf", label: "LinkedIn" },
    { icon: Mail, href: "brandonace07@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative border-t border-border bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gradient">Brandon Acevedo</h3>
            <p className="text-sm text-muted-foreground">
              Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y de alto impacto.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-neon-cyan" />
              Barranquilla, Colombia
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "#hero" },
                { name: "Sobre Mí", href: "#about" },
                { name: "Proyectos", href: "#projects" },
                { name: "Contacto", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4, color: "var(--neon-cyan)" }}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
                  >
                    {link.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2">
              {[
                "Desarrollo Web",
                "Diseño UI/UX",
                "Consultoría",
                "Optimización",
              ].map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-neon-cyan" />
                <a href="mailto:brandonace07@gmail.com" className="hover:text-neon-cyan transition-colors">
                  brandonace07@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-neon-cyan" />
                <a href="tel:+573154143417" className="hover:text-neon-cyan transition-colors">
                  +57 315 414 3417
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center gap-6 border-t border-border pt-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground transition-colors hover:text-neon-cyan"
                aria-label={social.label}
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 border-t border-border pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Brandon Acevedo. Todos los derechos reservados. Hecho en{" "}
            <span className="font-semibold text-neon-cyan">Colombia 🇨🇴</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
