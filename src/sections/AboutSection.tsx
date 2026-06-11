import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { SectionTitle } from '../components/ui/SectionTitle'
import { siteData } from '../data/siteData'
import { getTattooImage } from '../data/tattooImages'

export function AboutSection() {
  const aboutImages = {
    floating: getTattooImage(1),
    main: getTattooImage(4),
    topLeft: getTattooImage(3),
    vertical: getTattooImage(0),
  }

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

        <div className="group relative min-h-[30rem] overflow-hidden border surface-line ink-gradient texture-vignette">
          {aboutImages.main ? (
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-72 brightness-95 contrast-110 saturate-90 transition duration-700 group-hover:scale-[1.03] group-hover:brightness-100 group-hover:saturate-100 md:opacity-62 md:brightness-85 md:saturate-75 md:group-hover:brightness-95"
              src={aboutImages.main}
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-br from-ink-1000/38 via-ink-950/18 to-ink-1000/56 md:from-ink-1000/50 md:to-ink-1000/66" />
          <div className="absolute inset-0 texture-grid opacity-24 md:opacity-30" />

          <div className="absolute left-8 top-8 h-40 w-40 overflow-hidden border border-bone-50/12 bg-ink-1000/45 shadow-[0_22px_70px_rgb(0_0_0/0.34)]">
            {aboutImages.topLeft ? (
              <img
                alt=""
                className="h-full w-full object-cover opacity-92 brightness-100 contrast-110 saturate-90 transition duration-500 hover:scale-105 hover:brightness-105 hover:saturate-100 md:opacity-82 md:brightness-90 md:saturate-80"
                src={aboutImages.topLeft}
              />
            ) : null}
            <div className="absolute inset-0 bg-ink-1000/12 md:bg-ink-1000/18" />
          </div>

          <div className="absolute bottom-8 right-8 h-52 w-44 overflow-hidden border border-bone-50/18 bg-bone-50/8 shadow-[0_22px_80px_rgb(0_0_0/0.4)] backdrop-blur-sm">
            {aboutImages.floating ? (
              <img
                alt=""
                className="h-full w-full object-cover opacity-92 brightness-100 contrast-110 saturate-90 transition duration-500 hover:scale-105 hover:brightness-105 hover:saturate-100 md:opacity-84 md:brightness-90 md:saturate-80"
                src={aboutImages.floating}
              />
            ) : null}
            <div className="absolute inset-0 bg-ink-1000/14 md:bg-ink-1000/20" />
          </div>

          <div className="absolute right-10 top-12 h-64 w-52 overflow-hidden border surface-line bg-ink-1000/40 shadow-[0_22px_90px_rgb(0_0_0/0.42)]">
            {aboutImages.vertical ? (
              <img
                alt=""
                className="h-full w-full object-cover opacity-92 brightness-95 contrast-110 saturate-90 transition duration-500 hover:scale-105 hover:brightness-105 hover:saturate-100 md:opacity-86 md:brightness-85 md:saturate-75"
                src={aboutImages.vertical}
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-1000/24 via-transparent to-ink-1000/10 md:from-ink-1000/36 md:to-ink-1000/16" />
          </div>

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
