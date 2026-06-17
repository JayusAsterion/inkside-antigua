import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { LogoMark } from '../components/ui/LogoMark'
import { useLanguage } from '../context/useLanguage'
import { getTattooImage } from '../data/tattooImages'
import { fadeInUp, staggerContainer } from '../lib/animations'

export function HeroSection() {
  const heroImages = [getTattooImage(0), getTattooImage(1), getTattooImage(2)]
  const { t } = useLanguage()

  return (
    <section
      className="relative flex min-h-[100dvh] overflow-hidden bg-ink-950 pt-24"
      id="inicio"
    >
      <div className="absolute inset-0 texture-grid opacity-45" />
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-bone-50/8 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-steel-500/8 blur-3xl" />

      <Container className="relative z-10 grid flex-1 items-center gap-12 pb-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:pb-14">
        <motion.div
          animate="visible"
          className="max-w-5xl"
          initial="hidden"
          variants={staggerContainer}
        >
          <Badge>{t.hero.badge}</Badge>

          <motion.h1
            className="mt-6 max-w-5xl text-balance font-display text-[clamp(3.7rem,7.8vw,7.6rem)] uppercase leading-[0.86] text-bone-50"
            variants={fadeInUp}
          >
            {t.hero.title}
          </motion.h1>

          <motion.div
            className="mt-8 grid gap-6 border-l border-bone-50/14 pl-5 2xl:grid-cols-[minmax(0,1fr)_auto] 2xl:items-end"
            variants={fadeInUp}
          >
            <p className="max-w-xl text-lg leading-8 text-bone-200/78 sm:text-xl">
              {t.hero.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#contacto">
                {t.hero.primaryCta}
                <ArrowUpRight aria-hidden className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#galeria" variant="secondary">
                {t.hero.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative min-h-[28rem] sm:min-h-[32rem] lg:min-h-[40rem]"
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute left-0 top-8 hidden text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-bone-200/45 [writing-mode:vertical-rl] lg:block">
            {t.hero.verticalText}
          </div>

          <div className="absolute right-0 top-0 h-[72%] w-[76%] overflow-hidden border surface-line ink-gradient texture-vignette">
            {heroImages[0] ? (
              <img
                alt=""
                className="h-full w-full object-cover opacity-90 brightness-95 contrast-110 saturate-90 md:opacity-80 md:brightness-85 md:saturate-75"
                src={heroImages[0]}
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-br from-ink-1000/18 via-bone-50/6 to-ink-1000/58 md:to-ink-1000/68" />
            <div className="absolute inset-0 texture-grid opacity-14 md:opacity-18" />
            <div
            aria-hidden="true"
            className="absolute right-5 top-5 h-16 w-24 overflow-hidden border border-bone-50/10 bg-black/35 opacity-55 mix-blend-screen sm:h-20 sm:w-32"
          >
              <LogoMark className="h-full w-full border-0 bg-transparent opacity-90" />
            </div>
          </div>
          <div className="absolute bottom-8 left-0 h-[46%] w-[52%] overflow-hidden border surface-line metal-sheen">
            {heroImages[1] ? (
              <img
                alt=""
                className="h-full w-full object-cover opacity-88 brightness-95 contrast-110 saturate-90 md:opacity-78 md:brightness-85 md:saturate-75"
                src={heroImages[1]}
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/52 via-ink-950/10 to-bone-50/6 md:from-ink-1000/62" />
          </div>
          <div className="absolute bottom-0 right-[10%] h-[34%] w-[38%] overflow-hidden border border-bone-50/18 bg-bone-50/8 shadow-[0_0_60px_rgb(255_255_255/0.08)] backdrop-blur-sm">
            {heroImages[2] ? (
              <img
                alt=""
                className="h-full w-full object-cover opacity-86 brightness-95 contrast-110 saturate-80 md:opacity-74 md:brightness-85 md:saturate-65"
                src={heroImages[2]}
              />
            ) : null}
            <div className="absolute inset-0 bg-ink-1000/18 md:bg-ink-1000/30" />
          </div>

          <div className="absolute right-4 top-12 border surface-line bg-ink-1000/78 p-4 shadow-[0_22px_70px_rgb(0_0_0/0.35)] backdrop-blur-md sm:right-10">
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-bone-100/82">
              {t.hero.focus}
            </p>
            <div className="mt-4 grid gap-2">
              {t.hero.specialties.map((item) => (
                <span
                  className="border border-bone-50/10 bg-bone-50/6 px-3 py-2 font-display text-2xl uppercase leading-none text-bone-50 transition hover:border-bone-50/35 hover:bg-bone-50/10"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-14 left-6 right-0 overflow-hidden border-y surface-line bg-ink-1000/72 py-3 backdrop-blur-sm">
            <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.28em] text-bone-200/60">
              <span>{t.hero.marquee}</span>
              <span>{t.hero.marquee}</span>
              <span>{t.hero.marquee}</span>
              <span>{t.hero.marquee}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
