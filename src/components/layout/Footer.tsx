import { ArrowUpRight } from 'lucide-react'
import inksideLogo from '../../assets/images/brand/inkside-logo.png'
import { siteData } from '../../data/siteData'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t surface-line bg-ink-1000 py-10 text-sm text-bone-200/68">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start">
          <div>
            <a
              className="group inline-flex flex-col items-start gap-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 sm:flex-row sm:items-center sm:gap-5"
              href="#inicio"
              aria-label="Inkside Antigua"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-bone-50/10 bg-black/30 p-2.5 backdrop-blur transition group-hover:border-bone-50/24 group-hover:bg-bone-50/6">
                <img
                  alt="Inkside Antigua"
                  className="h-full w-full object-contain opacity-95 transition group-hover:opacity-100"
                  src={inksideLogo}
                />
              </span>
              <span>
                <span className="block font-display text-4xl uppercase leading-none tracking-wide text-bone-50 transition group-hover:text-white">
                  {siteData.name}
                </span>
                <span className="mt-2 block text-xs font-extrabold uppercase tracking-[0.18em] text-bone-200/58">
                  {siteData.tagline}
                </span>
              </span>
            </a>
            <p className="mt-4 text-bone-200/58">{siteData.location}</p>
          </div>

          <nav className="grid gap-3 text-xs font-extrabold uppercase tracking-[0.18em]">
            {siteData.footerLinks.map((link) => (
              <a
                className="transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-3 text-xs font-extrabold uppercase tracking-[0.18em]">
            <a
              aria-label="Instagram de Inkside Antigua"
              className="inline-flex items-center gap-2 transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
              href={siteData.social.instagram}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
            <a
              aria-label="Facebook de Inkside Antigua"
              className="inline-flex items-center gap-2 transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
              href={siteData.social.facebook}
              rel="noreferrer"
              target="_blank"
            >
              Facebook
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t surface-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.16em] text-bone-200/48">
            {'\u00a9 2026 Inkside Antigua. All rights reserved.'}
          </p>
          <a
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-bone-200/48 transition hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
            href="#inicio"
          >
            Volver arriba
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
