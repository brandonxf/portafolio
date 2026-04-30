"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function PixelRobot() {
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("¡Hola, soy Siriloooo! 🐱")

  const handleClick = () => {
    const messages = [
      "¡Hola, soy Pantera! 🐱",
      "¡Miau! 🐾",
      "¿Qué quieres? 🤔",
      "¡Purr... 😌",
      "¡Mrrrow~! 🎵",
    ]
    setMessage(messages[Math.floor(Math.random() * messages.length)])
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2500)
  }

  return (
    <motion.div
      className="fixed bottom-1 left-0 z-50 flex flex-col items-center gap-2"
      animate={{ 
        x: [0, "calc(100vw - 80px)", "calc(100vw - 80px)", 0],
        scaleX: [1, 1, -1, -1]
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }}
    >
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-xl border border-cyan-500/50 bg-background px-3 py-2 font-mono text-xs text-cyan-400"
          >
            {message}
            <div 
              className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-cyan-500/50 bg-background"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleClick}
        className="cursor-pointer focus:outline-none"
        aria-label="Saludar a Siriloooo"
      >
        <Image
          src="/mxjfiles-cat-23414_256.gif"
          alt="Siriloooo el gato"
          width={105}
          height={80}
          className="drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]"
          unoptimized
        />
      </button>
    </motion.div>
  )
}