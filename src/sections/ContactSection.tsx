import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { useLanguage } from '../context/useLanguage'
import { siteData } from '../data/siteData'
import { getTattooImage } from '../data/tattooImages'
import { cardReveal, fadeInUp, staggerContainer, viewportReveal } from '../lib/animations'

export function ContactSection() {
  const { t } = useLanguage()
  const bookingImage = getTattooImage(5)

  return (
    <Section className="bg-ink-950" id="contacto">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] xl:items-stretch">
        <motion.div
          className="flex flex-col justify-between"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportReveal}
          whileInView="visible"
        >
          <div>
            <Badge>{t.contact.eyebrow}</Badge>
            <motion.h2
              className="mt-6 max-w-5xl text-balance font-display text-6xl uppercase leading-[0.82] text-bone-50 sm:text-7xl lg:text-8xl"
              variants={fadeInUp}
            >
              {t.contact.title}
            </motion.h2>
            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-bone-200/74"
              variants={fadeInUp}
            >
              {t.contact.description}
            </motion.p>

            <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={fadeInUp}>
              <Button aria-label={t.contact.instagramCta} href={siteData.social.instagram}>
                <Calendar aria-hidden className="mr-2 h-4 w-4" />
                {t.contact.instagramCta}
                <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
              </Button>
              <Button href={siteData.social.facebook} variant="secondary">
                {t.contact.facebookCta}
                <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3 xl:mt-14"
            variants={staggerContainer}
          >
            {t.contact.details.map((detail) => (
              <motion.div
                className="border surface-line bg-bone-50/5 p-5"
                key={detail.label}
                variants={cardReveal}
              >
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  {detail.label}
                </p>
                <p className="mt-3 font-display text-2xl uppercase leading-none text-bone-50 sm:text-3xl">
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-6 border-l border-bone-50/24 pl-4 text-sm leading-7 text-bone-200/68">
            {t.contact.note}
          </p>
        </motion.div>

        <motion.aside
          className="relative overflow-hidden border surface-line bg-bone-50/5 p-4 shadow-[0_28px_100px_rgb(0_0_0/0.34)] sm:p-5"
          initial="hidden"
          variants={cardReveal}
          viewport={viewportReveal}
          whileHover={{ y: -4 }}
          whileInView="visible"
        >
          <div className="absolute inset-0 ink-gradient opacity-70" />
          <div className="absolute inset-0 texture-grid opacity-20" />
          <div className="relative">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Badge>
                <Sparkles aria-hidden className="mr-2 h-3.5 w-3.5" />
                {t.contact.mapBadge}
              </Badge>
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-bone-200/45">
                {t.contact.mapLocation}
              </span>
            </div>

            <div className="relative min-h-[32rem] overflow-hidden border surface-line bg-ink-1000 xl:min-h-[34rem]">
              {bookingImage ? (
                <img
                  alt={t.contact.mapTitle}
                  className="absolute inset-0 h-full w-full object-cover opacity-82 brightness-90 contrast-110 saturate-75"
                  src={bookingImage}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-br from-ink-1000/72 via-ink-950/38 to-wine-700/24" />
              <div className="absolute inset-0 texture-grid opacity-20" />
              <div className="absolute left-5 right-5 top-5 border border-bone-50/12 bg-ink-1000/68 p-5 backdrop-blur-sm sm:left-7 sm:right-7 sm:top-7">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  {t.contact.mapBadge}
                </p>
                <p className="mt-4 max-w-xl font-display text-5xl uppercase leading-[0.86] text-bone-50 sm:text-6xl">
                  {t.contact.temporaryLocation}
                </p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 border border-bone-50/12 bg-ink-1000/72 p-5 backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7 sm:grid-cols-3">
                {t.contact.details.map((detail) => (
                  <div key={`booking-${detail.label}`}>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-bone-200/50">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-bone-50">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 border surface-line bg-ink-1000/62 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  {t.contact.mapLocation}
                </p>
                <p className="mt-2 font-display text-3xl uppercase leading-none text-bone-50">
                  {t.brand.name}
                </p>
              </div>
              <Button href={siteData.social.instagram} variant="secondary">
                {t.contact.mapCta}
                <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.aside>
      </div>
    </Section>
  )
}
