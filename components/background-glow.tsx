const glows = [
  { top: "2%", side: "right" as const, color: "bg-neon-cyan/10" },
  { top: "14%", side: "left" as const, color: "bg-neon-blue/10" },
  { top: "28%", side: "right" as const, color: "bg-neon-purple/10" },
  { top: "42%", side: "left" as const, color: "bg-neon-cyan/10" },
  { top: "56%", side: "right" as const, color: "bg-neon-blue/10" },
  { top: "68%", side: "left" as const, color: "bg-neon-purple/10" },
  { top: "80%", side: "right" as const, color: "bg-neon-cyan/10" },
  { top: "92%", side: "left" as const, color: "bg-neon-blue/10" },
]

export function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {glows.map((glow, index) => (
        <div
          key={index}
          className={`absolute h-96 w-96 rounded-full blur-3xl ${glow.color} ${
            glow.side === "left" ? "-left-40" : "-right-40"
          }`}
          style={{ top: glow.top }}
        />
      ))}
    </div>
  )
}
