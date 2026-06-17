export const siteData = {
  name: 'Noir Ink Studio',
  shortName: 'Noir Ink',
  tagline: 'Premium Tattoo Studio Demo',
  location: 'Adaptable landing page for tattoo studios',
  description:
    'A dark cinematic landing page demo for custom tattoos, artist profiles, portfolio presentation, and consultation booking.',
  ctas: {
    primary: 'Book a Consultation',
    secondary: 'View Portfolio',
  },
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
  navItems: [
    { label: 'Home', href: '#inicio' },
    { label: 'Services', href: '#servicios' },
    { label: 'Artists', href: '#artistas' },
    { label: 'Gallery', href: '#galeria' },
    { label: 'Contact', href: '#contacto' },
  ],
  contactInfo: {
    title: 'Start your tattoo concept.',
    description:
      'Use this section to connect visitors to a consultation, intake form, Instagram, WhatsApp, or email flow.',
    note:
      'For quotes, collect references, approximate size, body placement, and a short concept note.',
    details: [
      { label: 'Focus', value: 'Custom tattoo design' },
      { label: 'Experience', value: 'Clean premium studio' },
      { label: 'Flow', value: 'Consultation / Design / Booking' },
    ],
  },
  footerLinks: [
    { label: 'Home', href: '#inicio' },
    { label: 'Services', href: '#servicios' },
    { label: 'Artists', href: '#artistas' },
    { label: 'Gallery', href: '#galeria' },
    { label: 'Contact', href: '#contacto' },
  ],
}

export type SiteData = typeof siteData
