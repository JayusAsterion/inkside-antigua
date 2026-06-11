import { motion } from 'motion/react'
import { Section } from '../components/layout/Section'
import { siteData } from '../data/siteData'
import { cardReveal, scaleOnHover, staggerContainer, viewportReveal } from '../lib/animations'

export function ProcessSection() {
  return (
    <Section
      className="bg-ink-1000/78"
      description={
        'Cada pieza pasa por un proceso pensado para que el resultado tenga intenci\u00f3n, est\u00e9tica y permanencia.'
      }
      eyebrow="Proceso"
      id="proceso"
      title="Del concepto a la piel."
    >
      <motion.div
        className="mt-12 grid gap-4 lg:grid-cols-4"
        initial="hidden"
        variants={staggerContainer}
        viewport={viewportReveal}
        whileInView="visible"
      >
        {siteData.processSteps.map((step) => (
          <motion.article
            className="group relative min-h-72 overflow-hidden border surface-line bg-bone-50/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-bone-50/38 hover:bg-bone-50/8"
            key={step.number}
            variants={cardReveal}
            whileHover={scaleOnHover}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-bone-50/0 via-bone-50/45 to-bone-50/0 opacity-0 transition group-hover:opacity-100" />
            <span className="font-display text-7xl uppercase leading-none text-bone-50/12 transition group-hover:text-bone-50/28">
              {step.number}
            </span>
            <h3 className="mt-10 font-display text-4xl uppercase leading-none text-bone-50">
              {step.title}
            </h3>
            <p className="mt-5 text-sm leading-7 text-bone-200/70">
              {step.description}
            </p>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-12 overflow-hidden border-y surface-line bg-ink-1000/70 py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.28em] text-bone-200/55">
          <span>Custom ink / Piercing / Antigua Guatemala /</span>
          <span>Custom ink / Piercing / Antigua Guatemala /</span>
          <span>Custom ink / Piercing / Antigua Guatemala /</span>
          <span>Custom ink / Piercing / Antigua Guatemala /</span>
        </div>
      </div>
    </Section>
  )
}
