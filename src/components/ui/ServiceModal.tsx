import { useEffect } from 'react'
import { ArrowUpRight, Check, Info, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { Service } from '../../data/siteData'
import { siteData } from '../../data/siteData'
import { Button } from './Button'

type ServiceModalProps = {
  image?: string
  index?: number
  isOpen: boolean
  onClose: () => void
  service?: Service
}

function DetailList({
  icon,
  items,
  title,
}: {
  icon: 'check' | 'sparkles'
  items: string[]
  title: string
}) {
  const Icon = icon === 'check' ? Check : Sparkles

  return (
    <div className="border surface-line bg-bone-50/5 p-5">
      <p className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
        <Icon aria-hidden className="h-3.5 w-3.5" />
        {title}
      </p>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-bone-200/70" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bone-50/45" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServiceModal({
  image,
  index = 0,
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && service ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-labelledby="service-modal-title"
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-ink-1000/88 p-4 backdrop-blur-xl sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative my-auto grid max-h-[92svh] w-full max-w-7xl overflow-y-auto border surface-line bg-ink-1000 shadow-[0_32px_120px_rgb(0_0_0/0.58)] lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,1.05fr)]"
            exit={{ opacity: 0, scale: 0.98, y: 18 }}
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 texture-grid opacity-12" />

            <div className="relative min-h-[20rem] overflow-hidden border-b surface-line bg-ink-950 lg:min-h-[44rem] lg:border-b-0 lg:border-r">
              {image ? (
                <img
                  alt={`${service.name} service`}
                  className="absolute inset-0 h-full w-full object-cover opacity-92 grayscale brightness-95 contrast-110 saturate-75 lg:brightness-90"
                  src={image}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/68 via-ink-950/12 to-transparent" />
              <div className="absolute left-6 top-6 font-display text-7xl uppercase leading-none text-bone-50/14 sm:text-8xl">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="absolute bottom-6 left-6 right-6 border border-bone-50/12 bg-ink-1000/42 p-4 backdrop-blur-sm sm:p-5">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  {service.category}
                </p>
                <p className="mt-2 max-w-xl font-display text-5xl uppercase leading-[0.86] text-bone-50 sm:text-6xl">
                  {service.name}
                </p>
              </div>
            </div>

            <aside className="relative p-6 sm:p-8 lg:p-10">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-bone-200/58">
                Service profile / Inkside Antigua
              </p>
              <h2
                className="mt-5 max-w-2xl font-display text-6xl uppercase leading-[0.82] text-bone-50 sm:text-7xl"
                id="service-modal-title"
              >
                {service.name}
              </h2>

              <p className="mt-6 text-base leading-8 text-bone-200/76">
                {service.longDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    className="border border-bone-50/12 bg-bone-50/6 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-bone-200/72"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-4 xl:grid-cols-2">
                <DetailList icon="sparkles" items={service.idealFor} title="Ideal para" />
                <DetailList icon="check" items={service.includes} title="Que incluye" />
              </div>

              <div className="mt-4 border surface-line bg-ink-950/72 p-5">
                <p className="flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  <Info aria-hidden className="h-3.5 w-3.5" />
                  Antes de reservar
                </p>
                <p className="mt-4 text-sm leading-7 text-bone-200/70">
                  {service.recommendation}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t surface-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-bone-200/45">
                  Inkside Antigua / Tattoo Studio
                </p>
                <Button className="w-full sm:w-auto" href={siteData.social.instagram}>
                  Cotizar este servicio
                  <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </aside>

            <button
              aria-label="Cerrar ficha del servicio"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-bone-50/15 bg-ink-1000/78 text-bone-50 backdrop-blur transition hover:border-bone-50/45 hover:bg-bone-50/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
              onClick={onClose}
              type="button"
            >
              <X aria-hidden className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
