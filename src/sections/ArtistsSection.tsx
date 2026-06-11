import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { ArtistModal } from '../components/ui/ArtistModal'
import { Badge } from '../components/ui/Badge'
import { siteData } from '../data/siteData'
import { getTattooImage } from '../data/tattooImages'
import { cardReveal, scaleOnHover, staggerContainer, viewportReveal } from '../lib/animations'

export function ArtistsSection() {
  const [selectedArtistIndex, setSelectedArtistIndex] = useState<number | null>(null)
  const selectedArtist =
    selectedArtistIndex === null ? undefined : siteData.artists[selectedArtistIndex]
  const selectedArtistImage =
    selectedArtistIndex === null || !selectedArtist
      ? undefined
      : getTattooImage(selectedArtist.imageIndex)

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
        {siteData.artists.map((artist, index) => {
          const image = getTattooImage(artist.imageIndex)

          return (
            <motion.article
              className="group border surface-line bg-bone-50/5 transition duration-300 hover:-translate-y-1 hover:border-bone-50/38 hover:bg-bone-50/8"
              key={artist.name}
              variants={cardReveal}
              whileHover={scaleOnHover}
            >
              <div className="relative aspect-[4/5] overflow-hidden border-b surface-line ink-gradient texture-vignette">
                {image ? (
                  <img
                    alt={`${artist.name} visual`}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 brightness-95 contrast-110 saturate-90 transition duration-500 group-hover:scale-105 group-hover:opacity-98 group-hover:brightness-105 group-hover:saturate-100 md:opacity-82 md:brightness-85 md:saturate-75"
                    src={image}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/72 via-ink-950/20 to-bone-50/6 md:from-ink-1000/82 md:via-ink-950/28" />
                <div className="absolute inset-0 texture-grid opacity-16 md:opacity-22" />
                <div className="absolute left-6 top-6 text-xs font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <motion.button
                  aria-label={`Ver perfil de ${artist.name}`}
                  className="absolute bottom-6 right-6 z-10 flex h-16 w-20 items-center justify-center border border-bone-50/14 bg-ink-1000/45 text-bone-50/64 backdrop-blur transition hover:-translate-y-0.5 hover:border-bone-50/45 hover:bg-bone-50/10 hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 group-hover:border-bone-50/32 group-hover:text-bone-50"
                  onClick={() => setSelectedArtistIndex(index)}
                  type="button"
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowUpRight aria-hidden className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="p-6">
                <Badge>{artist.specialty}</Badge>
                <h3 className="mt-5 font-display text-5xl uppercase leading-[0.9] text-bone-50">
                  {artist.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-bone-200/70">
                  {artist.shortDescription}
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
          )
        })}
      </motion.div>
      <ArtistModal
        artist={selectedArtist}
        image={selectedArtistImage}
        index={selectedArtistIndex ?? 0}
        isOpen={selectedArtistIndex !== null}
        onClose={() => setSelectedArtistIndex(null)}
      />
    </Section>
  )
}
