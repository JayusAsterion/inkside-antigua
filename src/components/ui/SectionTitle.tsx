import { cn } from '../../lib/utils'
import { Badge } from './Badge'

type SectionTitleProps = {
  align?: 'left' | 'center'
  eyebrow?: string
  title: string
  description?: string
}

export function SectionTitle({
  align = 'left',
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      {eyebrow ? <Badge className="mb-5">{eyebrow}</Badge> : null}
      <h2 className="text-balance font-display text-5xl uppercase leading-[0.9] text-bone-50 sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-7 text-bone-200/74 sm:text-lg',
            isCentered && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
