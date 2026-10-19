"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Check, AlertCircle } from "lucide-react"
import { API_URL } from "@/lib/asset"

const contactInfo = [
  { icon: Mail, label: "Email", value: "brandonace07@gmail.com", href: "mailto:brandonace07@gmail.com" },
  { icon: MapPin, label: "Ubicación", value: "Barranquilla, Colombia", href: "#" },
  { icon: Phone, label: "Teléfono", value: "+57 3154143417", href: "tel:+573154143417" },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/brandonxf" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/brandonxf" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/brandxn__0/" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (!res.ok) throw new Error("Request failed")

      setFormState({ name: "", email: "", message: "" })
      setStatus("success")
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-12">
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
              Contacto
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            >
              ¿Listo para <span className="text-gradient">trabajar juntos</span>?
            </motion.h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes. 
                Ya sea que tengas un proyecto en mente o simplemente quieras saludar, 
                no dudes en contactarme.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="glass flex items-center gap-4 rounded-xl p-4 transition-all hover:border-glow"
                  >
                    <div className="rounded-lg bg-neon-blue/20 p-3">
                      <item.icon className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-4 text-sm text-muted-foreground">Sígueme en redes</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass rounded-full p-3 transition-all hover:border-glow hover:text-neon-cyan"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass space-y-6 rounded-2xl p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neon-blue py-4 font-medium text-background transition-all hover:glow-blue disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 rounded-full border-2 border-background border-t-transparent"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-neon-cyan"
                >
                  <Check size={16} />
                  ¡Mensaje enviado! Te responderé pronto.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-destructive"
                >
                  <AlertCircle size={16} />
                  Algo salió mal. Intenta de nuevo o escríbeme a brandonace07@gmail.com
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
