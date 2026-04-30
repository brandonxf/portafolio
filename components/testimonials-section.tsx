"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content: "Brandon transformó completamente nuestra presencia digital. Su atención al detalle y capacidad para entender nuestros requerimientos fue excepcional. El resultado final superó todas nuestras expectativas.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Producto, InnovateLab",
    content: "Trabajar con Brandon fue una experiencia increíble. No solo entregó el proyecto a tiempo, sino que también nos proporcionó insights valiosos sobre UX/UI que mejoraron significativamente nuestro producto.",
    rating: 5,
    image: "/api/placeholder/64/64"
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, DigitalFlow",
    content: "La calidad del código y la arquitectura que Brandon implementó es impresionante. Su enfoque profesional y su capacidad para resolver problemas complejos nos permitió escalar rápidamente.",
    rating: 5,
    image: "/api/placeholder/64/64"
  }
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="relative py-12 scroll-mt-5 lg:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-widest text-neon-cyan uppercase"
          >
            Testimonios
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Lo que dicen mis <span className="text-gradient">clientes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            La satisfacción de mis clientes es mi mayor motivación. Aquí algunos testimonios de quienes han confiado en mi trabajo.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass group relative rounded-2xl p-6 transition-all hover:border-glow"
            >
              <div className="absolute -top-3 left-6">
                <div className="rounded-full bg-neon-cyan p-2">
                  <Quote size={16} className="text-background" />
                </div>
              </div>

              <div className="mb-4 flex items-center gap-1">
                {renderStars(testimonial.rating)}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-700">
                  <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-300">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}