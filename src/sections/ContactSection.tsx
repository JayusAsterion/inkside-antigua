import { ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { useLanguage } from '../context/useLanguage'
import { siteData } from '../data/siteData'
import { cardReveal, fadeInUp, staggerContainer, viewportReveal } from '../lib/animations'

export function ContactSection() {
  const { t } = useLanguage()

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
                  {detail.label === t.contact.details[0].label ? (
                    <MapPin aria-hidden className="mr-2 inline h-3.5 w-3.5" />
                  ) : null}
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

            <div className="relative aspect-[4/3] overflow-hidden border surface-line bg-ink-1000 sm:aspect-[16/10] xl:min-h-[34rem]">
              <iframe
                className="h-full w-full brightness-90 contrast-105 saturate-75 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={siteData.contactInfo.mapEmbedUrl}
                title={t.contact.mapTitle}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(2,2,2,0.32)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-1000/44 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-1000/56 to-transparent" />
            </div>

            <div className="mt-5 flex flex-col gap-4 border surface-line bg-ink-1000/62 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
                  {t.contact.temporaryLocation}
                </p>
                <p className="mt-2 font-display text-3xl uppercase leading-none text-bone-50">
                  Inkside Antigua
                </p>
              </div>
              <Button href={siteData.contactInfo.mapSearchUrl} variant="secondary">
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
