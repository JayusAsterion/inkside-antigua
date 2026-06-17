import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type LogoMarkProps = HTMLAttributes<HTMLSpanElement> & {
  compact?: boolean
}

export function LogoMark({ className, compact = false, ...props }: LogoMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-visible bg-transparent',
        compact ? 'h-12 w-12' : 'h-20 w-20',
        className,
      )}
      {...props}
    >
      <img
        alt=""
        className="h-full w-full object-contain"
        src="/favicon.png"
      />
    </span>
  )
}
