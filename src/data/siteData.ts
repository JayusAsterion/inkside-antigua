export const siteData = {
  name: 'Inkside Antigua',
  shortName: 'Inkside',
  tagline: 'Tattoo & Piercing Studio',
  location: 'Antigua Guatemala',
  description:
    'Un sistema visual oscuro, editorial e intenso para un estudio de tatuajes y piercings premium.',
  ctas: {
    primary: 'Reservar cita',
    secondary: 'Ver trabajos',
  },
  social: {
    facebook: 'https://www.facebook.com/Inksideantigua/?locale=es_LA',
    instagram: 'https://www.instagram.com/inksideantigua/?hl=es-la',
  },
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Artistas', href: '#artistas' },
    { label: 'Galer\u00eda', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Arte permanente',
    title: 'Arte permanente',
    subtitle: 'Tatuajes y piercings en Antigua Guatemala',
    statement: 'Dise\u00f1os \u00fanicos, tinta con identidad',
    specialties: ['Tattoo', 'Piercing', 'Custom Design'],
    marquee: 'Inkside Antigua / Tattoo / Piercing / Custom Design /',
  },
  about: {
    eyebrow: 'Identidad del estudio',
    title: 'No hacemos tatuajes gen\u00e9ricos. Creamos piezas con identidad.',
    description:
      'Inkside Antigua es un estudio de tatuajes y piercings donde cada dise\u00f1o nace de una idea, una historia y una intenci\u00f3n. Trabajamos piezas personalizadas con una est\u00e9tica limpia, art\u00edstica y permanente, cuidando cada detalle desde el concepto hasta la piel.',
    labels: ['Antigua Guatemala', 'Custom Ink', 'Tattoo Studio'],
    highlights: ['Custom designs', 'Tattoo & piercing', 'Antigua Guatemala'],
  },
  services: [
    {
      name: 'Tatuajes personalizados',
      category: 'Custom',
      description:
        'Piezas creadas desde cero para convertir una idea personal en arte permanente.',
      longDescription:
        'Creamos dise\u00f1os \u00fanicos a partir de tu idea, referencias y estilo visual. Cada pieza se trabaja de forma personalizada para que tenga intenci\u00f3n, composici\u00f3n y una identidad propia.',
      idealFor: [
        'Personas que buscan una pieza \u00fanica',
        'Dise\u00f1os con historia o significado personal',
        'Composiciones medianas o grandes',
      ],
      includes: [
        'Asesor\u00eda inicial de concepto',
        'Revisi\u00f3n de referencias',
        'Propuesta visual personalizada',
        'Recomendaciones de ubicaci\u00f3n y tama\u00f1o',
      ],
      recommendation:
        'Para cotizar, env\u00eda referencias, tama\u00f1o aproximado, zona del cuerpo y una breve explicaci\u00f3n de la idea.',
      tags: ['Custom', 'Identity', 'Concept'],
      imageIndex: 0,
    },
    {
      name: 'Fine line',
      category: 'Linework',
      description:
        'L\u00edneas limpias, detalles sutiles y composiciones minimalistas con precisi\u00f3n.',
      longDescription:
        'Dise\u00f1os de l\u00ednea fina con enfoque en detalles sutiles, composici\u00f3n limpia y una est\u00e9tica delicada. Ideal para piezas minimalistas, florales, simb\u00f3licas o de alto detalle.',
      idealFor: [
        'Tatuajes peque\u00f1os o medianos',
        'Dise\u00f1os delicados',
        'Piezas simb\u00f3licas o minimalistas',
      ],
      includes: [
        'Ajuste de composici\u00f3n',
        'Recomendaci\u00f3n de tama\u00f1o m\u00ednimo',
        'Asesor\u00eda sobre zonas del cuerpo',
      ],
      recommendation:
        'Para mejores resultados, evita reducir demasiado piezas con mucho detalle.',
      tags: ['Fine line', 'Minimal', 'Detail'],
      imageIndex: 1,
    },
    {
      name: 'Blackwork',
      category: 'Blackwork',
      description:
        'Contraste, tinta negra y presencia gr\u00e1fica para piezas intensas y atemporales.',
      longDescription:
        'Piezas de tinta negra con alto contraste, presencia gr\u00e1fica y fuerza visual. Ideal para composiciones intensas, ornamentales, geom\u00e9tricas o de gran impacto.',
      idealFor: [
        'Piezas con alto contraste',
        'Dise\u00f1os ornamentales o gr\u00e1ficos',
        'Tatuajes medianos o grandes',
      ],
      includes: [
        'Evaluaci\u00f3n de contraste',
        'Composici\u00f3n visual',
        'Asesor\u00eda de ubicaci\u00f3n',
      ],
      recommendation:
        'Este estilo luce mejor cuando se respeta el tama\u00f1o necesario para que la tinta y los detalles respiren.',
      tags: ['Blackwork', 'Bold ink', 'Graphic'],
      imageIndex: 2,
    },
    {
      name: 'Piercings',
      category: 'Piercing',
      description:
        'Perforaciones cuidadas con enfoque profesional, est\u00e9tico e higi\u00e9nico.',
      longDescription:
        'Perforaciones realizadas con enfoque profesional, est\u00e9tico e higi\u00e9nico. Te asesoramos sobre ubicaci\u00f3n, tipo de joyer\u00eda, cuidado inicial y proceso de cicatrizaci\u00f3n.',
      idealFor: [
        'Piercings est\u00e9ticos',
        'Primera perforaci\u00f3n',
        'Cambio o asesor\u00eda de joyer\u00eda',
      ],
      includes: [
        'Asesor\u00eda de ubicaci\u00f3n',
        'Indicaciones de cuidado',
        'Recomendaciones de cicatrizaci\u00f3n',
      ],
      recommendation:
        'Consulta disponibilidad y tipo de piercing antes de llegar al estudio.',
      tags: ['Piercing', 'Hygiene', 'Metal'],
      imageIndex: 3,
    },
    {
      name: 'Cover ups',
      category: 'Cover',
      description:
        'Reinterpretamos piezas existentes con dise\u00f1os pensados para cubrir y transformar.',
      longDescription:
        'Transformamos piezas existentes en nuevos dise\u00f1os pensados para cubrir, reinterpretar y mejorar visualmente un tatuaje anterior.',
      idealFor: [
        'Tatuajes antiguos',
        'Dise\u00f1os que ya no representan al cliente',
        'Piezas que necesitan reinterpretaci\u00f3n',
      ],
      includes: [
        'Evaluaci\u00f3n de tatuaje existente',
        'Propuesta de cobertura',
        'Recomendaci\u00f3n de estilo y tama\u00f1o',
      ],
      recommendation:
        'Para cotizar un cover up, env\u00eda una foto clara del tatuaje actual con buena luz.',
      tags: ['Cover up', 'Rework', 'Transform'],
      imageIndex: 4,
    },
    {
      name: 'Dise\u00f1o personalizado',
      category: 'Antigua',
      description:
        'Acompa\u00f1amiento visual para definir concepto, composici\u00f3n e identidad antes de tatuar.',
      longDescription:
        'Acompa\u00f1amiento visual para construir un dise\u00f1o desde cero antes de tatuar. Definimos concepto, composici\u00f3n, referencias, estilo e identidad visual.',
      idealFor: [
        'Ideas que a\u00fan no est\u00e1n definidas',
        'Piezas conceptuales',
        'Clientes que quieren construir un dise\u00f1o \u00fanico',
      ],
      includes: [
        'Exploraci\u00f3n de concepto',
        'Selecci\u00f3n de referencias',
        'Definici\u00f3n de estilo',
        'Recomendaci\u00f3n de composici\u00f3n',
      ],
      recommendation:
        'Trae referencias visuales, ideas base y ejemplos de estilos que te gustan.',
      tags: ['Design', 'Concept', 'Identity'],
      imageIndex: 5,
    },
  ],
  artists: [
    {
      name: 'Artist 01',
      specialty: 'Fine line',
      shortDescription:
        'Trazos limpios, composiciones delicadas y piezas sutiles pensadas para llevar significado sin exceso.',
      longDescription:
        'Especialista en l\u00edneas finas, detalles minimalistas y composiciones delicadas. Su enfoque se centra en transformar ideas personales en piezas limpias, elegantes y con intenci\u00f3n visual.',
      approach:
        'Ideal para piezas peque\u00f1as, simb\u00f3licas, florales, ornamentales y dise\u00f1os con alto nivel de detalle.',
      tags: ['Minimal', 'Linework', 'Detail'],
      imageIndex: 1,
    },
    {
      name: 'Artist 02',
      specialty: 'Blackwork',
      shortDescription:
        'Contraste fuerte, tinta negra y una mirada gr\u00e1fica para piezas con presencia intensa.',
      longDescription:
        'Trabaja composiciones de alto contraste, sombras intensas y piezas con car\u00e1cter gr\u00e1fico. Su estilo se orienta a dise\u00f1os con presencia, fuerza visual y est\u00e9tica atemporal.',
      approach:
        'Ideal para blackwork, ornamentos, sombras, piezas grandes y composiciones de alto impacto.',
      tags: ['Bold ink', 'Shadow', 'Graphic'],
      imageIndex: 2,
    },
    {
      name: 'Artist 03',
      specialty: 'Custom tattoo',
      shortDescription:
        'Dise\u00f1os personalizados que nacen de referencias, historia e identidad visual propia.',
      longDescription:
        'Enfocado en crear piezas personalizadas desde cero, tomando como punto de partida referencias, historia personal, ubicaci\u00f3n de la pieza y estilo visual deseado.',
      approach:
        'Ideal para piezas personalizadas, cover ups conceptuales, dise\u00f1os mixtos y proyectos con narrativa visual.',
      tags: ['Custom', 'Concept', 'Identity'],
      imageIndex: 3,
    },
  ],
  galleryItems: [
    {
      category: 'Fine line',
      title: 'L\u00edneas limpias',
      size: 'large',
    },
    {
      category: 'Blackwork',
      title: 'Sombra intensa',
      size: 'small',
    },
    {
      category: 'Piercing',
      title: 'Metal preciso',
      size: 'tall',
    },
    {
      category: 'Custom',
      title: 'Pieza con identidad',
      size: 'small',
    },
    {
      category: 'Blackwork',
      title: 'Contraste permanente',
      size: 'wide',
    },
    {
      category: 'Fine line',
      title: 'Detalle sutil',
      size: 'small',
    },
  ],
  processSteps: [
    {
      number: '01',
      title: 'Consulta',
      description:
        'Conversamos sobre tu idea, referencias, ubicaci\u00f3n del tatuaje o piercing y el estilo que buscas.',
    },
    {
      number: '02',
      title: 'Dise\u00f1o',
      description:
        'Transformamos tu concepto en una propuesta visual personalizada.',
    },
    {
      number: '03',
      title: 'Cita',
      description:
        'Coordinamos fecha, preparaci\u00f3n y detalles importantes antes de trabajar la pieza.',
    },
    {
      number: '04',
      title: 'Tinta o piercing',
      description:
        'Realizamos el trabajo cuidando t\u00e9cnica, higiene, est\u00e9tica y experiencia.',
    },
  ],
  contactInfo: {
    title: '\u00bfListo para llevar tu idea a la piel?',
    description:
      'Reserva tu cita o escr\u00edbenos para cotizar tu pr\u00f3xima pieza. Cu\u00e9ntanos tu idea, estilo, tama\u00f1o y zona del cuerpo.',
    note:
      'Para cotizaciones, env\u00eda referencias, tama\u00f1o aproximado y ubicaci\u00f3n de la pieza.',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Inkside%20Antigua%20Tattoo%20Studio%20Antigua%20Guatemala&output=embed',
    mapSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=Inkside%20Antigua%20Tattoo%20Studio%20Antigua%20Guatemala',
    details: [
      { label: 'Ubicaci\u00f3n', value: 'Antigua Guatemala' },
      { label: 'Estudio', value: 'Tattoo & Piercing Studio' },
      { label: 'Estilo', value: 'Custom designs / Fine line / Blackwork / Piercing' },
    ],
  },
  footerLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Artistas', href: '#artistas' },
    { label: 'Galer\u00eda', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],
}

export type Artist = (typeof siteData.artists)[number]
export type Service = (typeof siteData.services)[number]
