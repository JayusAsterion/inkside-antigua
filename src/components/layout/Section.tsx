import type { ReactNode } from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'
import { cn } from '../../lib/utils'
import { revealSection, viewportReveal } from '../../lib/animations'
import { Container } from '../ui/Container'
import { SectionTitle } from '../ui/SectionTitle'

type SectionProps = Omit<HTMLMotionProps<'section'>, 'title'> & {
  children?: ReactNode
  description?: string
  eyebrow?: string
  titleAlign?: 'left' | 'center'
  title?: string
}

export function Section({
  children,
  className,
  description,
  eyebrow,
  titleAlign,
  title,
  ...props
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={shouldReduceMotion ? false : 'hidden'}
      className={cn('section-shell scroll-mt-24 border-t surface-line py-20 lg:py-28', className)}
      variants={shouldReduceMotion ? undefined : revealSection}
      viewport={viewportReveal}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      {...props}
    >
      <Container>
        {title ? (
          <SectionTitle
            align={titleAlign}
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        ) : null}
        {children}
      </Container>
    </motion.section>
  )
}
