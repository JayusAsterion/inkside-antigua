import type { TargetAndTransition, Variants } from 'motion/react'

export const viewportReveal = {
  once: true,
  amount: 0.18,
} as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const revealSection: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleOnHover: TargetAndTransition = {
  y: -5,
  scale: 1.01,
  transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
}

export const tapPress: TargetAndTransition = {
  scale: 0.98,
}
