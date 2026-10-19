"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea"

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Outer ring trails slightly behind for a bit of life; the dot itself tracks instantly.
  const ringSpring = { damping: 30, stiffness: 600, mass: 0.3 }
  const ringXSpring = useSpring(cursorX, ringSpring)
  const ringYSpring = useSpring(cursorY, ringSpring)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handlePointerOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR)) setIsPointer(true)
    }
    const handlePointerOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR)) setIsPointer(false)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handlePointerOver)
    document.addEventListener("mouseout", handlePointerOut)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handlePointerOver)
      document.removeEventListener("mouseout", handlePointerOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-9999 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan mix-blend-difference md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isPointer ? 0.5 : 1,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-9998 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan/50 md:block"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 500 }}
      />
    </>
  )
}
