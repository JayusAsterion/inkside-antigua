import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { ImageLightbox } from '../components/ui/ImageLightbox'
import { siteData } from '../data/siteData'
import { getTattooImage } from '../data/tattooImages'
import { cn } from '../lib/utils'
import { cardReveal, scaleOnHover, staggerContainer, viewportReveal } from '../lib/animations'

type GalleryItemSize = 'large' | 'tall' | 'wide' | 'small'

const gallerySizeClass = {
  large: 'lg:col-span-2 lg:row-span-2',
  tall: 'lg:row-span-2',
  wide: 'lg:col-span-2',
  small: '',
} satisfies Record<GalleryItemSize, string>

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    category: string
    image: string
    title: string
  } | null>(null)

  return (
    <Section
      className="bg-ink-950"
      description={
        'Una selecci\u00f3n visual inspirada en piezas personalizadas, l\u00edneas limpias, sombras intensas y detalles pensados para durar.'
      }
      eyebrow={'Galer\u00eda'}
      id="galeria"
      title={'Galer\u00eda de piezas, tinta y detalle.'}
      titleAlign="center"
    >
      <motion.div
        className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {siteData.galleryItems.map((item, index) => {
          const image = getTattooImage(index)

          return (
            <motion.article
              className={cn(
                'group relative overflow-hidden border surface-line bg-bone-50/5 transition duration-300 hover:-translate-y-1 hover:border-bone-50/38',
                gallerySizeClass[item.size as GalleryItemSize],
              )}
              key={`${item.category}-${item.title}`}
              variants={cardReveal}
              whileHover={scaleOnHover}
            >
              {image ? (
                <img
                  alt={`${item.category}: ${item.title}`}
                  className="absolute inset-0 h-full w-full object-cover opacity-78 grayscale contrast-110 saturate-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:saturate-90"
                  src={image}
                />
              ) : (
                <div className="absolute inset-0 ink-gradient texture-vignette transition duration-500 group-hover:scale-105 group-hover:opacity-90" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-1000 via-ink-950/42 to-ink-1000/18" />
              <div className="absolute inset-0 texture-grid opacity-18" />
              <div className="absolute inset-0 bg-bone-50/0 transition duration-300 group-hover:bg-bone-50/8" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4">
                <Badge className="bg-ink-1000/65">{item.category}</Badge>
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-bone-200/45">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                {image ? (
                  <button
                    aria-label={`Ver imagen de ${item.title}`}
                    className="mb-5 flex h-16 w-24 items-center justify-center border border-bone-50/12 bg-ink-1000/35 text-bone-50/62 backdrop-blur transition hover:-translate-y-0.5 hover:border-bone-50/45 hover:bg-bone-50/10 hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50"
                    onClick={() =>
                      setSelectedImage({
                        category: item.category,
                        image,
                        title: item.title,
                      })
                    }
                    type="button"
                  >
                    <ArrowUpRight aria-hidden className="h-5 w-5" />
                  </button>
                ) : null}
                <h3 className="max-w-sm font-display text-4xl uppercase leading-[0.9] text-bone-50">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Button href={siteData.social.instagram}>{'Ver m\u00e1s en Instagram'}</Button>
      </div>
      <ImageLightbox
        category={selectedImage?.category}
        image={selectedImage?.image}
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.title}
      />
    </Section>
  )
}
