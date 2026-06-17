import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  variant?: ButtonVariant
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
)

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-bone-50 bg-bone-50 text-ink-1000 shadow-[0_0_0_1px_rgb(138_31_45/0.28)] hover:border-white hover:bg-white hover:shadow-[0_0_0_1px_rgb(199_167_108/0.32)]',
  secondary:
    'border-bone-50/18 bg-bone-50/6 text-bone-50 hover:border-bone-50/45 hover:bg-bone-50/10',
  ghost:
    'border-transparent bg-transparent text-bone-200 hover:border-bone-50/10 hover:bg-bone-50/7 hover:text-bone-50',
}

export function Button({
  children,
  className,
  href,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isExternal = href?.startsWith('http')
  const buttonClassName = cn(
    'inline-flex min-h-11 items-center justify-center rounded-sm border px-5 py-2 text-sm font-extrabold uppercase tracking-[0.14em] transition-[border-color,background-color,color,box-shadow,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 active:scale-[0.98]',
    variants[variant],
    className,
  )

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={href}
        rel={isExternal ? 'noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={buttonClassName}
      type="button"
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
