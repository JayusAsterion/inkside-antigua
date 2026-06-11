import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { SectionTitle } from '../components/ui/SectionTitle'
import { siteData } from '../data/siteData'

export function AboutSection() {
  return (
    <Section className="bg-ink-1000/72" id="estudio">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:items-center">
        <div>
          <SectionTitle
            eyebrow={siteData.about.eyebrow}
            title={siteData.about.title}
            description={siteData.about.description}
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {siteData.about.highlights.map((highlight) => (
              <div
                className="border surface-line bg-bone-50/5 px-4 py-5"
                key={highlight}
              >
                <p className="font-display text-3xl uppercase leading-none text-bone-50">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[30rem] overflow-hidden border surface-line ink-gradient texture-vignette">
          <div className="absolute inset-0 texture-grid opacity-35" />
          <div className="absolute left-8 top-8 h-40 w-40 border border-bone-50/12 bg-ink-1000/45" />
          <div className="absolute bottom-8 right-8 h-52 w-44 border border-bone-50/18 bg-bone-50/8 backdrop-blur-sm" />
          <div className="absolute right-10 top-12 h-64 w-52 border surface-line metal-sheen" />

          <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-3">
            {siteData.about.labels.map((label) => (
              <Badge className="justify-center bg-ink-1000/74 text-center" key={label}>
                {label}
              </Badge>
            ))}
          </div>

          <p className="absolute left-8 top-1/2 hidden -translate-y-1/2 text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-bone-200/42 [writing-mode:vertical-rl] sm:block">
            Permanent art / Antigua
          </p>
        </div>
      </div>
    </Section>
  )
}
