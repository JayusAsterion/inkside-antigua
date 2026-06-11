import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-sm border border-bone-50/18 bg-ink-1000/45 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
