import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useLanguage } from '../../context/useLanguage'
import type { Language } from '../../i18n/translations'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { LogoMark } from '../ui/LogoMark'

function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()
  const languages: Language[] = ['es', 'en']

  return (
    <div
      aria-label="Language selector"
      className={cn(
        'inline-flex items-center rounded-sm border border-bone-50/12 bg-bone-50/5 p-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em]',
        className,
      )}
    >
      {languages.map((item) => (
        <button
          className={cn(
            'px-2.5 py-1 transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone-50',
            language === item ? 'bg-bone-50 text-ink-1000' : 'text-bone-200/48',
          )}
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const updateScrolled = () => setHasScrolled(window.scrollY > 20)

    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition duration-300',
        hasScrolled || isOpen
          ? 'border-bone-50/12 bg-ink-1000/82 shadow-[0_18px_60px_rgb(0_0_0/0.28)]'
          : 'border-bone-50/8 bg-ink-1000/42',
      )}
    >
      <Container className="flex min-h-20 items-center justify-between gap-4 xl:grid xl:min-h-24 xl:grid-cols-[minmax(18rem,1fr)_auto_minmax(18rem,1fr)] xl:gap-8">
        <a
          className="group flex min-w-0 items-center gap-3 justify-self-start transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 sm:gap-4"
          href="#inicio"
          aria-label={t.brand.name}
          onClick={() => setIsOpen(false)}
        >
          <LogoMark
            className="transition duration-300 group-hover:scale-[1.04]"
            compact
          />
          <span className="grid min-w-0 gap-0.5">
            <span className="font-display text-3xl uppercase leading-none tracking-wide text-bone-50 transition group-hover:text-white sm:text-4xl xl:text-[2.45rem]">
              {t.brand.shortName}
            </span>
            <span className="hidden text-[0.62rem] font-extrabold uppercase tracking-[0.28em] text-bone-200/52 sm:block">
              Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 justify-self-center text-xs font-extrabold uppercase tracking-[0.16em] text-bone-200/72 xl:flex">
          {t.nav.items.map((item) => (
            <a
              className="relative transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-bone-50 after:transition-all hover:after:w-full"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 justify-self-end xl:flex">
          <LanguageSwitch />
          <Button href="#contacto">
            {t.nav.book}
            <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-bone-50/15 bg-bone-50/5 text-bone-50 transition hover:border-bone-50/45 hover:bg-bone-50/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 xl:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </Container>

      {isOpen ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-bone-50/10 bg-ink-1000/96 xl:hidden"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Container className="py-5">
            <nav className="grid gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-bone-200">
              {t.nav.items.map((item) => (
                <a
                  className="border border-bone-50/10 bg-bone-50/5 px-4 py-3 transition hover:border-bone-50/45 hover:bg-bone-50/8 hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <LanguageSwitch className="mt-4 w-full justify-center" />
            <Button className="mt-4 w-full" href="#contacto" onClick={() => setIsOpen(false)}>
              {t.nav.book}
              <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
            </Button>
          </Container>
        </motion.div>
      ) : null}
    </header>
  )
}
