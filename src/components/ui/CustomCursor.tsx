import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const hoverElements = document.querySelectorAll("button, a")
    const handleMouseEnter = () => setHovering(true)
    const handleMouseLeave = () => setHovering(false)

    hoverElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      hoverElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className={`hidden lg:block fixed top-0 left-0 pointer-events-none z-50 rounded-full
        transition-transform duration-75 ease-out
        ${hovering ? "w-12 h-12 bg-indigo-500/50" : "w-6 h-6 bg-indigo-accent"}`}
        style={{transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`}}
    />
  )
}
