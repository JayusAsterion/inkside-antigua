import type { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'

type SmoothScrollProps = {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.08,
        easing: (time: number) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      }}
    >
      {children}
    </ReactLenis>
  )
}
