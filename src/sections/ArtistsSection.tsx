import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { siteData } from '../data/siteData'
import { getTattooImage } from '../data/tattooImages'
import { cardReveal, scaleOnHover, staggerContainer, viewportReveal } from '../lib/animations'

export function ArtistsSection() {
  return (
    <Section
      className="bg-ink-1000/76"
      description={
        'Cada pieza nace desde una conversaci\u00f3n, una referencia visual y una intenci\u00f3n clara: crear arte con identidad.'
      }
      eyebrow="Artistas"
      id="artistas"
      title="Artistas que convierten ideas en piezas permanentes."
    >
      <motion.div
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {siteData.artists.map((artist, index) => (
          <motion.article
            className="group border surface-line bg-bone-50/5 transition duration-300 hover:-translate-y-1 hover:border-bone-50/38 hover:bg-bone-50/8"
            key={artist.name}
            variants={cardReveal}
            whileHover={scaleOnHover}
          >
            <div className="relative aspect-[4/5] overflow-hidden border-b surface-line ink-gradient texture-vignette">
              {getTattooImage(index + 3) ? (
                <img
                  alt={`${artist.name} visual placeholder`}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale contrast-110 saturate-75 transition duration-500 group-hover:scale-105 group-hover:opacity-82"
                  src={getTattooImage(index + 3)}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-1000 via-ink-950/38 to-bone-50/8" />
              <div className="absolute inset-0 texture-grid opacity-25" />
              <div className="absolute left-6 top-6 text-xs font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="absolute bottom-6 left-6 right-6 h-28 border border-bone-50/12 bg-ink-1000/38 backdrop-blur-sm transition group-hover:bg-bone-50/8" />
              <div className="absolute right-6 top-16 h-40 w-24 border border-bone-50/16 bg-bone-50/7" />
            </div>

            <div className="p-6">
              <Badge>{artist.specialty}</Badge>
              <h3 className="mt-5 font-display text-5xl uppercase leading-[0.9] text-bone-50">
                {artist.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-bone-200/70">
                {artist.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {artist.tags.map((tag) => (
                  <span
                    className="border border-bone-50/10 bg-ink-1000/55 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-bone-200/68 transition group-hover:border-bone-50/24 group-hover:text-bone-200"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
