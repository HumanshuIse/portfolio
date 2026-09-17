"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { useSound } from "@/hooks/soundcn/use-sound"
import { metalClickSound } from "@/lib/metal-click"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

export function SpotlightLogo() {
  const id = useId()
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    faceFill: `spotlight-logo-face-fill-${id}`,
    stroke: `spotlight-logo-stroke-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)
  const [play] = useSound(metalClickSound)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  // 1. Coordinates updated to match the absolute tightest bounding box
  const cx = useSpring(useTransform(mouseX, [0, 1], [502, 55]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })
  const cy = useSpring(useTransform(mouseY, [0, 1], [48, 338]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = ref.current?.getBoundingClientRect()
      if (!bounds) return

      mouseX.set((event.clientX - bounds.left) / bounds.width)
      mouseY.set((event.clientY - bounds.top) / bounds.height)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      // 2. Added scale-y-[1.2] and scale-x-[-1.2] to enlarge it by exactly 20% natively
      className="h-auto w-full touch-manipulation scale-x-[-1.2] scale-y-[1.2] [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      // 3. Viewbox is now hugging the pixels with exactly 1px of padding
      viewBox="55 48 447 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern id={ids.facePattern} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2" stroke="var(--pattern)" strokeWidth="1" />
        </pattern>

        <motion.g
          id={ids.faceFill}
          variants={{
            normal: { transform: "translate(0px, 0px)" },
            pressed: { transform: "translate(0px, 16px)" },
          }}
          transition={transition}
        >
          {/* Top face of "H" (Shifted to right position) */}
          <path d="M333.86 113.00 L389.29 145.00 L333.86 177.00 L389.29 209.00 L444.72 177.00 L500.15 209.00 L333.86 305.00 L278.43 273.00 L333.86 241.00 L278.43 209.00 L223.00 241.00 L167.57 209.00 Z" />
          {/* Top face of "I" (Shifted to left position) */}
          <path d="M223.00 49.00 L278.43 81.00 L112.14 177.00 L56.71 145.00 Z" />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                "M333.86 113.00 L389.29 145.00 L333.86 177.00 L389.29 209.00 L444.72 177.00 L500.15 209.00 L333.86 305.00 L278.43 273.00 L333.86 241.00 L278.43 209.00 L223.00 241.00 L167.57 209.00 Z ",
                "M223.00 49.00 L278.43 81.00 L112.14 177.00 L56.71 145.00 Z ",
                "M167.57 209.00 V241.00 M223.00 241.00 V273.00 M278.43 209.00 V241.00 M333.86 241.00 V273.00 M278.43 273.00 V305.00 M333.86 305.00 V337.00 M500.15 209.00 V241.00 ",
                "M389.29 145.00 V177.00 M333.86 177.00 V209.00 M389.29 209.00 V241.00 ",
                "M56.71 145.00 V177.00 M112.14 177.00 V209.00 M278.43 81.00 V113.00 ",
                "M167.57 241.00 L223.00 273.00 L278.43 241.00 L333.86 273.00 L278.43 305.00 L333.86 337.00 L500.15 241.00 ",
                "M389.29 177.00 L333.86 209.00 L389.29 241.00 ",
                "M56.71 177.00 L112.14 209.00 L278.43 113.00"
              ].join(""),
            },
            pressed: {
              d: [
                "M333.86 129.00 L389.29 161.00 L333.86 193.00 L389.29 225.00 L444.72 193.00 L500.15 225.00 L333.86 321.00 L278.43 289.00 L333.86 257.00 L278.43 225.00 L223.00 257.00 L167.57 225.00 Z ",
                "M223.00 65.00 L278.43 97.00 L112.14 193.00 L56.71 161.00 Z ",
                "M167.57 225.00 V241.00 M223.00 257.00 V273.00 M278.43 225.00 V241.00 M333.86 257.00 V273.00 M278.43 289.00 V305.00 M333.86 321.00 V337.00 M500.15 225.00 V241.00 ",
                "M389.29 161.00 V177.00 M333.86 193.00 V209.00 M389.29 225.00 V241.00 ",
                "M56.71 161.00 V177.00 M112.14 193.00 V209.00 M278.43 97.00 V113.00 ",
                "M167.57 241.00 L223.00 273.00 L278.43 241.00 L333.86 273.00 L278.43 305.00 L333.86 337.00 L500.15 241.00 ",
                "M389.29 177.00 L333.86 209.00 L389.29 241.00 ",
                "M56.71 177.00 L112.14 209.00 L278.43 113.00"
              ].join(""),
            },
          }}
          transition={transition}
        />

        <motion.radialGradient id={ids.radialGradient} cx={cx} cy={cy} r="170" gradientUnits="userSpaceOnUse">
          <stop className="dark:[stop-color:#fff]" stopColor="var(--foreground)" />
          <stop offset="0.35" stopColor="var(--foreground)" stopOpacity="0.8" />
          <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        <motion.path 
          variants={{ 
            normal: { d: "M167.57 209.00 L223.00 241.00 L278.43 209.00 L333.86 241.00 L278.43 273.00 L333.86 305.00 L500.15 209.00 V241.00 L333.86 337.00 L278.43 305.00 L333.86 273.00 L278.43 241.00 L223.00 273.00 L167.57 241.00 Z" }, 
            pressed: { d: "M167.57 225.00 L223.00 257.00 L278.43 225.00 L333.86 257.00 L278.43 289.00 L333.86 321.00 L500.15 225.00 V241.00 L333.86 337.00 L278.43 305.00 L333.86 273.00 L278.43 241.00 L223.00 273.00 L167.57 241.00 Z" } 
          }} 
          transition={transition} 
        />
        <motion.path 
          variants={{ 
            normal: { d: "M389.29 145.00 L333.86 177.00 L389.29 209.00 V241.00 L333.86 209.00 L389.29 177.00 Z" }, 
            pressed: { d: "M389.29 161.00 L333.86 193.00 L389.29 225.00 V241.00 L333.86 209.00 L389.29 177.00 Z" } 
          }} 
          transition={transition} 
        />
        <motion.path 
          variants={{ 
            normal: { d: "M56.71 145.00 L112.14 177.00 L278.43 81.00 V113.00 L112.14 209.00 L56.71 177.00 Z" }, 
            pressed: { d: "M56.71 161.00 L112.14 193.00 L278.43 97.00 V113.00 L112.14 209.00 L56.71 177.00 Z" } 
          }} 
          transition={transition} 
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />
      <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />
    </motion.svg>
  )
}