import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { siteData } from '../../data/siteData'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

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
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <a
          className="font-display text-3xl uppercase leading-none tracking-wide text-bone-50 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          {siteData.shortName}
        </a>

        <nav className="hidden items-center gap-7 text-xs font-extrabold uppercase tracking-[0.16em] text-bone-200/72 lg:flex">
          {siteData.navItems.map((item) => (
            <a
              className="relative transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-bone-50 after:transition-all hover:after:w-full"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto">
            {siteData.ctas.primary}
            <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="flex h-11 w-11 items-center justify-center border border-bone-50/15 bg-bone-50/5 text-bone-50 transition hover:border-bone-50/45 hover:bg-bone-50/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </Container>

      {isOpen ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-bone-50/10 bg-ink-1000/96 lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Container className="py-5">
            <nav className="grid gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-bone-200">
              {siteData.navItems.map((item) => (
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
            <Button className="mt-4 w-full" href="#contacto" onClick={() => setIsOpen(false)}>
              {siteData.ctas.primary}
              <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
            </Button>
          </Container>
        </motion.div>
      ) : null}
    </header>
  )
}
