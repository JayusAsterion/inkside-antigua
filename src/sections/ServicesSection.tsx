import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { LogoMark } from '../components/ui/LogoMark'
import { ServiceModal } from '../components/ui/ServiceModal'
import { useLanguage } from '../context/useLanguage'
import { getTattooImage } from '../data/tattooImages'
import { cardReveal, scaleOnHover, staggerContainer } from '../lib/animations'
import { cn } from '../lib/utils'

type ServiceCardTone = 'silver' | 'white' | 'steel'

type ServiceVisual = {
  className: string
  composition: 'hero' | 'vertical' | 'horizontal' | 'compact'
  tone: ServiceCardTone
}

const serviceVisuals: ServiceVisual[] = [
  {
    composition: 'hero',
    tone: 'silver',
    className: 'md:col-span-2 xl:col-span-7 xl:row-span-2 min-h-[29rem] xl:min-h-[38rem]',
  },
  {
    composition: 'compact',
    tone: 'white',
    className: 'md:col-span-1 xl:col-span-5 min-h-[18rem]',
  },
  {
    composition: 'vertical',
    tone: 'silver',
    className: 'md:col-span-1 xl:col-span-5 xl:row-span-2 min-h-[30rem] xl:min-h-[38rem]',
  },
  {
    composition: 'compact',
    tone: 'steel',
    className: 'md:col-span-1 xl:col-span-4 min-h-[18rem]',
  },
  {
    composition: 'compact',
    tone: 'silver',
    className: 'md:col-span-1 xl:col-span-4 min-h-[18rem]',
  },
  {
    composition: 'horizontal',
    tone: 'white',
    className: 'md:col-span-2 xl:col-span-8 min-h-[22rem]',
  },
]

const toneClass: Record<ServiceCardTone, string> = {
  silver: 'from-bone-50/10 via-ink-850/64 to-ink-1000/86 group-hover:border-bone-50/38',
  white: 'from-bone-50/8 via-ink-850/60 to-ink-1000/84 group-hover:border-bone-50/32',
  steel: 'from-steel-500/12 via-ink-850/64 to-ink-1000/86 group-hover:border-steel-500/45',
}

export function ServicesSection() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null)
  const { t } = useLanguage()
  const selectedService =
    selectedServiceIndex === null ? undefined : t.services[selectedServiceIndex]
  const selectedServiceImage =
    selectedServiceIndex === null || !selectedService
      ? undefined
      : getTattooImage(selectedService.imageIndex)

  return (
    <Section
      className="bg-ink-950"
      description={t.servicesSection.description}
      eyebrow={t.servicesSection.eyebrow}
      id="servicios"
      title={t.servicesSection.title}
      titleAlign="center"
    >
      <div className="relative mt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[46%] top-[61%] z-20 hidden h-48 w-72 -translate-x-1/2 -translate-y-1/2 select-none xl:flex xl:items-center xl:justify-center 2xl:h-56 2xl:w-80"
        >
          <LogoMark className="h-full w-full opacity-90" />
        </div>

        <motion.div
          animate="visible"
          className="relative z-10 grid auto-rows-[minmax(16rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12"
          initial={false}
          variants={staggerContainer}
        >
          {t.services.map((service, index) => {
            const visual = serviceVisuals[index]
            const image = getTattooImage(service.imageIndex)

            return (
              <motion.article
                className={cn(
                  'group relative overflow-hidden border surface-line bg-bone-50/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-bone-50/8 hover:shadow-[0_24px_90px_rgb(0_0_0/0.38)]',
                  visual?.className,
                  visual && toneClass[visual.tone],
                )}
                key={service.id}
                variants={cardReveal}
                whileHover={scaleOnHover}
              >
                {image ? (
                  <img
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-86 brightness-95 contrast-110 saturate-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-96 group-hover:brightness-105 group-hover:saturate-100 md:opacity-72 md:brightness-85 md:saturate-75"
                    src={image}
                  />
                ) : null}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-55 transition duration-500 group-hover:scale-[1.03] md:opacity-68',
                    visual && toneClass[visual.tone],
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/68 via-ink-950/18 to-ink-1000/10 md:from-ink-1000/78 md:via-ink-950/28 md:to-ink-1000/18" />
                <div className="absolute inset-0 texture-grid opacity-12 md:opacity-18" />
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-bone-50/8 blur-3xl transition group-hover:bg-bone-50/12" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-bone-50/32 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex h-full min-h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-display text-6xl uppercase leading-none text-bone-50/14 md:text-7xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Badge className="bg-ink-1000/62">{service.category}</Badge>
                  </div>

                  <div
                    className={cn(
                      'mt-10 flex flex-1 flex-col',
                      visual?.composition === 'hero' && 'justify-end',
                      visual?.composition === 'vertical' && 'justify-between',
                      visual?.composition === 'horizontal' && 'justify-end md:flex-row md:items-end md:gap-8',
                      visual?.composition === 'compact' && 'justify-end',
                    )}
                  >
                    <div className="relative">
                      <p
                        className={cn(
                          'pointer-events-none mb-4 font-display uppercase leading-none text-bone-50/8',
                          visual?.composition === 'hero' ? 'text-8xl sm:text-9xl' : 'text-6xl',
                        )}
                      >
                        {service.accentText}
                      </p>
                      <h3
                        className={cn(
                          'max-w-xl font-display uppercase leading-[0.86] text-bone-50',
                          visual?.composition === 'hero'
                            ? 'text-6xl sm:text-7xl lg:text-8xl'
                            : 'text-5xl lg:text-6xl',
                        )}
                      >
                        {service.name}
                      </h3>
                    </div>

                    <p
                      className={cn(
                        'mt-6 max-w-md text-sm leading-7 text-bone-200/72',
                        visual?.composition === 'horizontal' && 'md:mb-1 md:mt-0',
                      )}
                    >
                      {service.description}
                    </p>
                  </div>

                  {image ? (
                    <button
                      aria-label={`${t.serviceModal.open} ${service.name}`}
                      className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center border border-bone-50/12 bg-ink-1000/45 text-bone-50/62 backdrop-blur transition hover:-translate-y-0.5 hover:border-bone-50/45 hover:bg-bone-50/10 hover:text-bone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone-50 sm:h-20 sm:w-20"
                      onClick={() =>
                        setSelectedServiceIndex(index)
                      }
                      type="button"
                    >
                      <ArrowUpRight aria-hidden className="h-5 w-5" />
                    </button>
                  ) : null}
                  <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-[0.62rem] font-extrabold uppercase tracking-[0.32em] text-bone-200/28 [writing-mode:vertical-rl] xl:block">
                    {t.servicesSection.verticalText}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="#contacto">
          {t.servicesSection.cta}
          <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <ServiceModal
        image={selectedServiceImage}
        index={selectedServiceIndex ?? 0}
        isOpen={selectedServiceIndex !== null}
        onClose={() => setSelectedServiceIndex(null)}
        service={selectedService}
      />
    </Section>
  )
}
