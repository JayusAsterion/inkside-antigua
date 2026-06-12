import { useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useLanguage } from '../../context/useLanguage'

type ImageLightboxProps = {
  category?: string
  image?: string
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function ImageLightbox({
  category,
  image,
  isOpen,
  onClose,
  title,
}: ImageLightboxProps) {
  const { t } = useLanguage()

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
      {isOpen && image ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-1000/88 p-4 backdrop-blur-xl sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-lightbox-title"
        >
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-6xl overflow-hidden border surface-line bg-ink-1000 shadow-[0_32px_120px_rgb(0_0_0/0.58)]"
            exit={{ opacity: 0, scale: 0.98, y: 18 }}
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 texture-grid opacity-15" />
            <div className="relative grid gap-0 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="relative flex min-h-[60svh] items-center justify-center bg-ink-1000 p-3 sm:p-5">
                <img
                  alt={title ?? t.lightbox.titleFallback}
                  className="max-h-[72svh] w-full object-contain brightness-100 contrast-105 saturate-90"
                  src={image}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_64%,rgba(2,2,2,0.22)_100%)]" />
              </div>

              <aside className="relative border-t surface-line bg-ink-1000/92 p-5 lg:border-l lg:border-t-0">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-bone-100/82">
                  {category ?? t.lightbox.fallbackCategory}
                </p>
                <h2
                  className="mt-4 font-display text-5xl uppercase leading-[0.88] text-bone-50"
                  id="image-lightbox-title"
                >
                  {title ?? t.lightbox.titleFallback}
                </h2>
                <p className="mt-5 border-l border-bone-50/24 pl-4 text-sm leading-7 text-bone-200/68">
                  {t.lightbox.studio}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-bone-200/45">
                  {t.lightbox.viewPiece}
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                </div>
              </aside>
            </div>

            <button
              aria-label={t.lightbox.close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-bone-50/15 bg-ink-1000/78 text-bone-50 backdrop-blur transition hover:border-bone-50/45 hover:bg-bone-50/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
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
