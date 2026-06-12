export type Language = 'es' | 'en'

export const translations = {
  es: {
    brand: {
      name: 'Inkside Antigua',
      shortName: 'Inkside',
      tagline: 'Tattoo & Piercing Studio',
      location: 'Antigua Guatemala',
    },
    nav: {
      items: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Artistas', href: '#artistas' },
        { label: 'Galería', href: '#galeria' },
        { label: 'Contacto', href: '#contacto' },
      ],
      book: 'Reservar cita',
      closeMenu: 'Cerrar menú',
      openMenu: 'Abrir menú',
    },
    hero: {
      badge: 'Arte permanente',
      eyebrow: 'Tatuajes y piercings en Antigua Guatemala',
      title: 'Arte permanente',
      description:
        'Diseños únicos, tinta con identidad. Un lenguaje visual para piel, metal y memoria en el corazón de Antigua Guatemala.',
      primaryCta: 'Reservar cita',
      secondaryCta: 'Ver galería',
      specialties: ['Tattoo', 'Piercing', 'Custom Design'],
      verticalText: 'Inkside / Antigua / Studio',
      focus: 'Studio focus',
      marquee: 'Inkside Antigua / Tattoo / Piercing / Custom Design /',
    },
    about: {
      eyebrow: 'Identidad del estudio',
      title: 'No hacemos tatuajes genéricos. Creamos piezas con identidad.',
      description:
        'Inkside Antigua es un estudio de tatuajes y piercings donde cada diseño nace de una idea, una historia y una intención. Trabajamos piezas personalizadas con una estética limpia, artística y permanente, cuidando cada detalle desde el concepto hasta la piel.',
      labels: ['Antigua Guatemala', 'Custom Ink', 'Tattoo Studio'],
      highlights: ['Custom designs', 'Tattoo & piercing', 'Antigua Guatemala'],
      verticalText: 'Permanent art / Antigua',
    },
    servicesSection: {
      eyebrow: 'Servicios',
      title: 'Servicios diseñados para convertir ideas en tinta.',
      description:
        'Desde piezas minimalistas hasta composiciones más intensas, cada servicio está pensado para crear una experiencia visual y personal.',
      cta: 'Reservar cita',
      verticalText: 'Tattoo studio / Antigua',
    },
    services: [
      {
        id: 'custom-tattoos',
        name: 'Tatuajes personalizados',
        category: 'Custom',
        accentText: 'INK',
        description:
          'Piezas creadas desde cero para convertir una idea personal en arte permanente.',
        longDescription:
          'Creamos diseños únicos a partir de tu idea, referencias y estilo visual. Cada pieza se trabaja de forma personalizada para que tenga intención, composición y una identidad propia.',
        idealFor: [
          'Personas que buscan una pieza única',
          'Diseños con historia o significado personal',
          'Composiciones medianas o grandes',
        ],
        includes: [
          'Asesoría inicial de concepto',
          'Revisión de referencias',
          'Propuesta visual personalizada',
          'Recomendaciones de ubicación y tamaño',
        ],
        recommendation:
          'Para cotizar, envía referencias, tamaño aproximado, zona del cuerpo y una breve explicación de la idea.',
        tags: ['Custom', 'Identity', 'Concept'],
        imageIndex: 0,
      },
      {
        id: 'fine-line',
        name: 'Fine line',
        category: 'Linework',
        accentText: 'FINE',
        description:
          'Líneas limpias, detalles sutiles y composiciones minimalistas con precisión.',
        longDescription:
          'Diseños de línea fina con enfoque en detalles sutiles, composición limpia y una estética delicada. Ideal para piezas minimalistas, florales, simbólicas o de alto detalle.',
        idealFor: [
          'Tatuajes pequeños o medianos',
          'Diseños delicados',
          'Piezas simbólicas o minimalistas',
        ],
        includes: [
          'Ajuste de composición',
          'Recomendación de tamaño mínimo',
          'Asesoría sobre zonas del cuerpo',
        ],
        recommendation:
          'Para mejores resultados, evita reducir demasiado piezas con mucho detalle.',
        tags: ['Fine line', 'Minimal', 'Detail'],
        imageIndex: 1,
      },
      {
        id: 'blackwork',
        name: 'Blackwork',
        category: 'Blackwork',
        accentText: 'BLACK',
        description:
          'Contraste, tinta negra y presencia gráfica para piezas intensas y atemporales.',
        longDescription:
          'Piezas de tinta negra con alto contraste, presencia gráfica y fuerza visual. Ideal para composiciones intensas, ornamentales, geométricas o de gran impacto.',
        idealFor: [
          'Piezas con alto contraste',
          'Diseños ornamentales o gráficos',
          'Tatuajes medianos o grandes',
        ],
        includes: [
          'Evaluación de contraste',
          'Composición visual',
          'Asesoría de ubicación',
        ],
        recommendation:
          'Este estilo luce mejor cuando se respeta el tamaño necesario para que la tinta y los detalles respiren.',
        tags: ['Blackwork', 'Bold ink', 'Graphic'],
        imageIndex: 2,
      },
      {
        id: 'piercings',
        name: 'Piercings',
        category: 'Piercing',
        accentText: 'METAL',
        description:
          'Perforaciones cuidadas con enfoque profesional, estético e higiénico.',
        longDescription:
          'Perforaciones realizadas con enfoque profesional, estético e higiénico. Te asesoramos sobre ubicación, tipo de joyería, cuidado inicial y proceso de cicatrización.',
        idealFor: [
          'Piercings estéticos',
          'Primera perforación',
          'Cambio o asesoría de joyería',
        ],
        includes: [
          'Asesoría de ubicación',
          'Indicaciones de cuidado',
          'Recomendaciones de cicatrización',
        ],
        recommendation:
          'Consulta disponibilidad y tipo de piercing antes de llegar al estudio.',
        tags: ['Piercing', 'Hygiene', 'Metal'],
        imageIndex: 3,
      },
      {
        id: 'cover-ups',
        name: 'Cover ups',
        category: 'Cover',
        accentText: 'REWORK',
        description:
          'Reinterpretamos piezas existentes con diseños pensados para cubrir y transformar.',
        longDescription:
          'Transformamos piezas existentes en nuevos diseños pensados para cubrir, reinterpretar y mejorar visualmente un tatuaje anterior.',
        idealFor: [
          'Tatuajes antiguos',
          'Diseños que ya no representan al cliente',
          'Piezas que necesitan reinterpretación',
        ],
        includes: [
          'Evaluación de tatuaje existente',
          'Propuesta de cobertura',
          'Recomendación de estilo y tamaño',
        ],
        recommendation:
          'Para cotizar un cover up, envía una foto clara del tatuaje actual con buena luz.',
        tags: ['Cover up', 'Rework', 'Transform'],
        imageIndex: 4,
      },
      {
        id: 'custom-design',
        name: 'Diseño personalizado',
        category: 'Antigua',
        accentText: 'CUSTOM DESIGN',
        description:
          'Acompañamiento visual para definir concepto, composición e identidad antes de tatuar.',
        longDescription:
          'Acompañamiento visual para construir un diseño desde cero antes de tatuar. Definimos concepto, composición, referencias, estilo e identidad visual.',
        idealFor: [
          'Ideas que aún no están definidas',
          'Piezas conceptuales',
          'Clientes que quieren construir un diseño único',
        ],
        includes: [
          'Exploración de concepto',
          'Selección de referencias',
          'Definición de estilo',
          'Recomendación de composición',
        ],
        recommendation:
          'Trae referencias visuales, ideas base y ejemplos de estilos que te gustan.',
        tags: ['Design', 'Concept', 'Identity'],
        imageIndex: 5,
      },
    ],
    artistsSection: {
      eyebrow: 'Artistas',
      title: 'Artistas que convierten ideas en piezas permanentes.',
      description:
        'Cada pieza nace desde una conversación, una referencia visual y una intención clara: crear arte con identidad.',
    },
    artists: [
      {
        name: 'Artist 01',
        specialty: 'Fine line',
        shortDescription:
          'Trazos limpios, composiciones delicadas y piezas sutiles pensadas para llevar significado sin exceso.',
        longDescription:
          'Especialista en líneas finas, detalles minimalistas y composiciones delicadas. Su enfoque se centra en transformar ideas personales en piezas limpias, elegantes y con intención visual.',
        approach:
          'Ideal para piezas pequeñas, simbólicas, florales, ornamentales y diseños con alto nivel de detalle.',
        tags: ['Minimal', 'Linework', 'Detail'],
        imageIndex: 1,
      },
      {
        name: 'Artist 02',
        specialty: 'Blackwork',
        shortDescription:
          'Contraste fuerte, tinta negra y una mirada gráfica para piezas con presencia intensa.',
        longDescription:
          'Trabaja composiciones de alto contraste, sombras intensas y piezas con carácter gráfico. Su estilo se orienta a diseños con presencia, fuerza visual y estética atemporal.',
        approach:
          'Ideal para blackwork, ornamentos, sombras, piezas grandes y composiciones de alto impacto.',
        tags: ['Bold ink', 'Shadow', 'Graphic'],
        imageIndex: 2,
      },
      {
        name: 'Artist 03',
        specialty: 'Custom tattoo',
        shortDescription:
          'Diseños personalizados que nacen de referencias, historia e identidad visual propia.',
        longDescription:
          'Enfocado en crear piezas personalizadas desde cero, tomando como punto de partida referencias, historia personal, ubicación de la pieza y estilo visual deseado.',
        approach:
          'Ideal para piezas personalizadas, cover ups conceptuales, diseños mixtos y proyectos con narrativa visual.',
        tags: ['Custom', 'Concept', 'Identity'],
        imageIndex: 3,
      },
    ],
    gallerySection: {
      eyebrow: 'Galería',
      title: 'Galería de piezas, tinta y detalle.',
      description:
        'Una selección visual inspirada en piezas personalizadas, líneas limpias, sombras intensas y detalles pensados para durar.',
      cta: 'Ver más en Instagram',
    },
    galleryItems: [
      { category: 'Fine line', title: 'Líneas limpias', size: 'large' },
      { category: 'Blackwork', title: 'Sombra intensa', size: 'small' },
      { category: 'Piercing', title: 'Metal preciso', size: 'tall' },
      { category: 'Custom', title: 'Pieza con identidad', size: 'small' },
      { category: 'Blackwork', title: 'Contraste permanente', size: 'wide' },
      { category: 'Fine line', title: 'Detalle sutil', size: 'small' },
    ],
    processSection: {
      eyebrow: 'Proceso',
      title: 'Del concepto a la piel.',
      description:
        'Cada pieza pasa por un proceso pensado para que el resultado tenga intención, estética y permanencia.',
      marquee: 'Custom ink / Piercing / Antigua Guatemala /',
    },
    processSteps: [
      {
        number: '01',
        title: 'Consulta',
        description:
          'Conversamos sobre tu idea, referencias, ubicación del tatuaje o piercing y el estilo que buscas.',
      },
      {
        number: '02',
        title: 'Diseño',
        description:
          'Transformamos tu concepto en una propuesta visual personalizada.',
      },
      {
        number: '03',
        title: 'Cita',
        description:
          'Coordinamos fecha, preparación y detalles importantes antes de trabajar la pieza.',
      },
      {
        number: '04',
        title: 'Tinta o piercing',
        description:
          'Realizamos el trabajo cuidando técnica, higiene, estética y experiencia.',
      },
    ],
    contact: {
      eyebrow: 'Reservas',
      title: '¿Listo para llevar tu idea a la piel?',
      description:
        'Reserva tu cita o escríbenos para cotizar tu próxima pieza. Cuéntanos tu idea, estilo, tamaño y zona del cuerpo.',
      instagramCta: 'Reservar por Instagram',
      facebookCta: 'Contactar por Facebook',
      note:
        'Para cotizaciones, envía referencias, tamaño aproximado y ubicación de la pieza.',
      details: [
        { label: 'Ubicación', value: 'Antigua Guatemala' },
        { label: 'Estudio', value: 'Tattoo & Piercing Studio' },
        { label: 'Estilo', value: 'Custom designs / Fine line / Blackwork / Piercing' },
      ],
      mapBadge: 'Booking / Location / Custom ink',
      mapLocation: 'Antigua Guatemala',
      temporaryLocation: 'Ubicación temporal',
      mapTitle: 'Mapa de Inkside Antigua',
      mapCta: 'Abrir en Google Maps',
    },
    footer: {
      copyright: '© 2026 Inkside Antigua. Todos los derechos reservados.',
      backToTop: 'Volver arriba',
      instagramAria: 'Instagram de Inkside Antigua',
      facebookAria: 'Facebook de Inkside Antigua',
    },
    serviceModal: {
      profile: 'Service profile / Inkside Antigua',
      idealFor: 'Ideal para',
      includes: 'Que incluye',
      beforeBooking: 'Antes de reservar',
      cta: 'Cotizar este servicio',
      studio: 'Inkside Antigua / Tattoo Studio',
      close: 'Cerrar ficha del servicio',
      open: 'Ver ficha de',
    },
    artistModal: {
      profile: 'Artist profile / Inkside Antigua',
      approach: 'Enfoque artístico',
      cta: 'Reservar con este artista',
      close: 'Cerrar perfil del artista',
      open: 'Ver perfil de',
    },
    lightbox: {
      fallbackCategory: 'Inkside Antigua',
      titleFallback: 'Imagen ampliada',
      viewPiece: 'Ver pieza',
      studio: 'Inkside Antigua / Tattoo Studio',
      close: 'Cerrar imagen',
      open: 'Ver imagen de',
    },
  },
  en: {
    brand: {
      name: 'Inkside Antigua',
      shortName: 'Inkside',
      tagline: 'Tattoo & Piercing Studio',
      location: 'Antigua Guatemala',
    },
    nav: {
      items: [
        { label: 'Home', href: '#inicio' },
        { label: 'Services', href: '#servicios' },
        { label: 'Artists', href: '#artistas' },
        { label: 'Gallery', href: '#galeria' },
        { label: 'Contact', href: '#contacto' },
      ],
      book: 'Book appointment',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
    },
    hero: {
      badge: 'Permanent Art',
      eyebrow: 'Tattoos and piercings in Antigua Guatemala',
      title: 'Permanent Art',
      description:
        'Unique designs, ink with identity. A visual language for skin, metal, and memory in the heart of Antigua Guatemala.',
      primaryCta: 'Book appointment',
      secondaryCta: 'View gallery',
      specialties: ['Tattoo', 'Piercing', 'Custom Design'],
      verticalText: 'Inkside / Antigua / Studio',
      focus: 'Studio focus',
      marquee: 'Inkside Antigua / Tattoo / Piercing / Custom Design /',
    },
    about: {
      eyebrow: 'Studio Identity',
      title: 'We do not make generic tattoos. We create pieces with identity.',
      description:
        'Inkside Antigua is a tattoo and piercing studio where every design begins with an idea, a story, and an intention. We create custom pieces with a clean, artistic, and permanent aesthetic, caring for every detail from concept to skin.',
      labels: ['Antigua Guatemala', 'Custom Ink', 'Tattoo Studio'],
      highlights: ['Custom designs', 'Tattoo & piercing', 'Antigua Guatemala'],
      verticalText: 'Permanent art / Antigua',
    },
    servicesSection: {
      eyebrow: 'Services',
      title: 'Services designed to turn ideas into ink.',
      description:
        'From minimalist pieces to more intense compositions, each service is built to create a visual and personal experience.',
      cta: 'Book appointment',
      verticalText: 'Tattoo studio / Antigua',
    },
    services: [
      {
        id: 'custom-tattoos',
        name: 'Custom tattoos',
        category: 'Custom',
        accentText: 'INK',
        description:
          'Pieces created from scratch to turn a personal idea into permanent art.',
        longDescription:
          'We create unique designs from your idea, references, and visual style. Each piece is developed personally so it carries intention, composition, and its own identity.',
        idealFor: [
          'People looking for a unique piece',
          'Designs with personal meaning or story',
          'Medium or large compositions',
        ],
        includes: [
          'Initial concept guidance',
          'Reference review',
          'Custom visual proposal',
          'Placement and size recommendations',
        ],
        recommendation:
          'To request a quote, send references, approximate size, body placement, and a brief explanation of the idea.',
        tags: ['Custom', 'Identity', 'Concept'],
        imageIndex: 0,
      },
      {
        id: 'fine-line',
        name: 'Fine line',
        category: 'Linework',
        accentText: 'FINE',
        description:
          'Clean lines, subtle details, and minimal compositions with precision.',
        longDescription:
          'Fine line designs focused on subtle detail, clean composition, and a delicate aesthetic. Ideal for minimalist, floral, symbolic, or highly detailed pieces.',
        idealFor: [
          'Small or medium tattoos',
          'Delicate designs',
          'Symbolic or minimalist pieces',
        ],
        includes: [
          'Composition adjustment',
          'Minimum size recommendation',
          'Body placement guidance',
        ],
        recommendation:
          'For best results, avoid making highly detailed pieces too small.',
        tags: ['Fine line', 'Minimal', 'Detail'],
        imageIndex: 1,
      },
      {
        id: 'blackwork',
        name: 'Blackwork',
        category: 'Blackwork',
        accentText: 'BLACK',
        description:
          'Contrast, black ink, and graphic presence for intense and timeless pieces.',
        longDescription:
          'Black ink pieces with high contrast, graphic presence, and visual strength. Ideal for intense, ornamental, geometric, or high-impact compositions.',
        idealFor: [
          'High-contrast pieces',
          'Ornamental or graphic designs',
          'Medium or large tattoos',
        ],
        includes: [
          'Contrast evaluation',
          'Visual composition',
          'Placement guidance',
        ],
        recommendation:
          'This style looks best when the necessary size is respected so the ink and details can breathe.',
        tags: ['Blackwork', 'Bold ink', 'Graphic'],
        imageIndex: 2,
      },
      {
        id: 'piercings',
        name: 'Piercings',
        category: 'Piercing',
        accentText: 'METAL',
        description:
          'Careful piercings with a professional, aesthetic, and hygienic approach.',
        longDescription:
          'Piercings performed with a professional, aesthetic, and hygienic approach. We guide you on placement, jewelry type, initial care, and healing process.',
        idealFor: [
          'Aesthetic piercings',
          'First piercing',
          'Jewelry change or guidance',
        ],
        includes: [
          'Placement guidance',
          'Aftercare instructions',
          'Healing recommendations',
        ],
        recommendation:
          'Ask about availability and piercing type before visiting the studio.',
        tags: ['Piercing', 'Hygiene', 'Metal'],
        imageIndex: 3,
      },
      {
        id: 'cover-ups',
        name: 'Cover ups',
        category: 'Cover',
        accentText: 'REWORK',
        description:
          'We reinterpret existing pieces with designs built to cover and transform.',
        longDescription:
          'We transform existing tattoos into new designs created to cover, reinterpret, and visually improve a previous piece.',
        idealFor: [
          'Old tattoos',
          'Designs that no longer represent the client',
          'Pieces that need reinterpretation',
        ],
        includes: [
          'Existing tattoo evaluation',
          'Cover proposal',
          'Style and size recommendation',
        ],
        recommendation:
          'To quote a cover up, send a clear photo of the current tattoo with good light.',
        tags: ['Cover up', 'Rework', 'Transform'],
        imageIndex: 4,
      },
      {
        id: 'custom-design',
        name: 'Custom design',
        category: 'Antigua',
        accentText: 'CUSTOM DESIGN',
        description:
          'Visual guidance to define concept, composition, and identity before tattooing.',
        longDescription:
          'Visual guidance to build a design from scratch before tattooing. We define concept, composition, references, style, and visual identity.',
        idealFor: [
          'Ideas that are not fully defined yet',
          'Conceptual pieces',
          'Clients who want to build a unique design',
        ],
        includes: [
          'Concept exploration',
          'Reference selection',
          'Style definition',
          'Composition recommendation',
        ],
        recommendation:
          'Bring visual references, base ideas, and examples of styles you like.',
        tags: ['Design', 'Concept', 'Identity'],
        imageIndex: 5,
      },
    ],
    artistsSection: {
      eyebrow: 'Artists',
      title: 'Artists who turn ideas into permanent pieces.',
      description:
        'Every piece begins with a conversation, a visual reference, and a clear intention: to create art with identity.',
    },
    artists: [
      {
        name: 'Artist 01',
        specialty: 'Fine line',
        shortDescription:
          'Clean strokes, delicate compositions, and subtle pieces made to carry meaning without excess.',
        longDescription:
          'Specialized in fine lines, minimalist details, and delicate compositions. Their approach focuses on transforming personal ideas into clean, elegant pieces with visual intention.',
        approach:
          'Ideal for small, symbolic, floral, ornamental pieces and designs with a high level of detail.',
        tags: ['Minimal', 'Linework', 'Detail'],
        imageIndex: 1,
      },
      {
        name: 'Artist 02',
        specialty: 'Blackwork',
        shortDescription:
          'Strong contrast, black ink, and a graphic eye for pieces with intense presence.',
        longDescription:
          'Works with high-contrast compositions, intense shading, and pieces with graphic character. Their style is oriented toward designs with presence, visual strength, and timeless aesthetics.',
        approach:
          'Ideal for blackwork, ornaments, shading, large pieces, and high-impact compositions.',
        tags: ['Bold ink', 'Shadow', 'Graphic'],
        imageIndex: 2,
      },
      {
        name: 'Artist 03',
        specialty: 'Custom tattoo',
        shortDescription:
          'Custom designs born from references, personal stories, and a visual identity of their own.',
        longDescription:
          'Focused on creating custom pieces from scratch, starting from references, personal story, body placement, and the desired visual style.',
        approach:
          'Ideal for custom pieces, conceptual cover ups, mixed-style designs, and projects with visual narrative.',
        tags: ['Custom', 'Concept', 'Identity'],
        imageIndex: 3,
      },
    ],
    gallerySection: {
      eyebrow: 'Gallery',
      title: 'A gallery of pieces, ink, and detail.',
      description:
        'A visual selection inspired by custom pieces, clean lines, deep shadows, and details made to last.',
      cta: 'See more on Instagram',
    },
    galleryItems: [
      { category: 'Fine line', title: 'Clean lines', size: 'large' },
      { category: 'Blackwork', title: 'Deep shadow', size: 'small' },
      { category: 'Piercing', title: 'Precise metal', size: 'tall' },
      { category: 'Custom', title: 'Piece with identity', size: 'small' },
      { category: 'Blackwork', title: 'Permanent contrast', size: 'wide' },
      { category: 'Fine line', title: 'Subtle detail', size: 'small' },
    ],
    processSection: {
      eyebrow: 'Process',
      title: 'From concept to skin.',
      description:
        'Every piece moves through a process designed so the result has intention, aesthetics, and permanence.',
      marquee: 'Custom ink / Piercing / Antigua Guatemala /',
    },
    processSteps: [
      {
        number: '01',
        title: 'Consultation',
        description:
          'We talk about your idea, references, tattoo or piercing placement, and the style you are looking for.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'We turn your concept into a custom visual proposal.',
      },
      {
        number: '03',
        title: 'Appointment',
        description:
          'We coordinate date, preparation, and important details before working on the piece.',
      },
      {
        number: '04',
        title: 'Ink or piercing',
        description:
          'We perform the work with care for technique, hygiene, aesthetics, and experience.',
      },
    ],
    contact: {
      eyebrow: 'Booking',
      title: 'Ready to bring your idea to skin?',
      description:
        'Book your appointment or write to us to quote your next piece. Tell us your idea, style, size, and body placement.',
      instagramCta: 'Book on Instagram',
      facebookCta: 'Contact on Facebook',
      note:
        'For quotes, send references, approximate size, and placement of the piece.',
      details: [
        { label: 'Location', value: 'Antigua Guatemala' },
        { label: 'Studio', value: 'Tattoo & Piercing Studio' },
        { label: 'Style', value: 'Custom designs / Fine line / Blackwork / Piercing' },
      ],
      mapBadge: 'Booking / Location / Custom ink',
      mapLocation: 'Antigua Guatemala',
      temporaryLocation: 'Temporary location',
      mapTitle: 'Inkside Antigua map',
      mapCta: 'Open in Google Maps',
    },
    footer: {
      copyright: '© 2026 Inkside Antigua. All rights reserved.',
      backToTop: 'Back to top',
      instagramAria: 'Inkside Antigua Instagram',
      facebookAria: 'Inkside Antigua Facebook',
    },
    serviceModal: {
      profile: 'Service profile / Inkside Antigua',
      idealFor: 'Ideal for',
      includes: 'What it includes',
      beforeBooking: 'Before booking',
      cta: 'Request a quote',
      studio: 'Inkside Antigua / Tattoo Studio',
      close: 'Close service profile',
      open: 'View service profile for',
    },
    artistModal: {
      profile: 'Artist profile / Inkside Antigua',
      approach: 'Artistic approach',
      cta: 'Book with this artist',
      close: 'Close artist profile',
      open: 'View profile of',
    },
    lightbox: {
      fallbackCategory: 'Inkside Antigua',
      titleFallback: 'Expanded image',
      viewPiece: 'View piece',
      studio: 'Inkside Antigua / Tattoo Studio',
      close: 'Close image',
      open: 'View image of',
    },
  },
} as const

export type Translation = (typeof translations)[Language]
export type ServiceTranslation = Translation['services'][number]
export type ArtistTranslation = Translation['artists'][number]
export type GalleryItemTranslation = Translation['galleryItems'][number]
