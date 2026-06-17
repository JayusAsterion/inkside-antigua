export type Language = 'es' | 'en'

export const translations = {
  es: {
    brand: {
      name: 'Noir Ink Studio',
      shortName: 'Noir Ink',
      tagline: 'Premium Tattoo Studio Demo',
      location: 'Plantilla adaptable para estudios de tatuaje',
    },
    nav: {
      items: [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Artistas', href: '#artistas' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Contacto', href: '#contacto' },
      ],
      book: 'Reservar consulta',
      closeMenu: 'Cerrar menu',
      openMenu: 'Abrir menu',
    },
    hero: {
      badge: 'Noir Ink Studio',
      eyebrow: 'Demo premium para estudios de tatuaje',
      title: 'Tinta atemporal. Historias propias.',
      description:
        'Arte de tatuaje premium creado con precision, intencion y respeto por cada historia.',
      primaryCta: 'Reservar consulta',
      secondaryCta: 'Ver portafolio',
      specialties: ['Custom Tattoo', 'Fine Line', 'Blackwork'],
      verticalText: 'Noir / Custom / Ink',
      focus: 'Studio focus',
      marquee: 'Noir Ink Studio / Custom tattoos / Artist portfolio / Booking flow /',
    },
    about: {
      eyebrow: 'El estudio',
      title: 'Un demo oscuro, editorial y listo para adaptar.',
      description:
        'Noir Ink Studio presenta una experiencia de estudio premium: consulta clara, artistas con criterio, higiene visible y un portafolio pensado para convertir interes en reservas.',
      labels: ['Custom ink', 'Clean studio', 'Artist-led'],
      highlights: ['Diseno custom', 'Artistas expertos', 'Experiencia premium'],
      verticalText: 'Permanent art / Noir',
    },
    servicesSection: {
      eyebrow: 'Servicios',
      title: 'Servicios para convertir ideas en tinta.',
      description:
        'Una oferta clara para estudios que quieren vender piezas personalizadas, sesiones de diseno y una experiencia limpia desde el primer contacto.',
      cta: 'Empezar concepto',
      verticalText: 'Noir Ink / Services',
    },
    services: [
      {
        id: 'custom-tattoos',
        name: 'Tatuajes custom',
        category: 'Custom',
        accentText: 'INK',
        description:
          'Piezas creadas desde cero para transformar una idea personal en arte permanente.',
        longDescription:
          'Una ruta de diseno para piezas unicas, basada en referencias, historia, ubicacion del cuerpo y estilo visual. Cada propuesta se trabaja con composicion, escala e intencion.',
        idealFor: [
          'Clientes que buscan una pieza unica',
          'Ideas con significado personal',
          'Composiciones medianas o grandes',
        ],
        includes: [
          'Consulta inicial de concepto',
          'Revision de referencias',
          'Propuesta visual personalizada',
          'Guia de ubicacion y tamano',
        ],
        recommendation:
          'Para cotizar, comparte referencias, tamano aproximado, zona del cuerpo y una breve explicacion de la idea.',
        tags: ['Custom', 'Concept', 'Identity'],
        imageIndex: 0,
      },
      {
        id: 'fine-line',
        name: 'Fine line',
        category: 'Linework',
        accentText: 'FINE',
        description:
          'Lineas limpias, detalles sutiles y composiciones minimalistas con precision.',
        longDescription:
          'Piezas de linea fina enfocadas en detalles delicados, composicion limpia y una estetica ligera. Ideal para trabajos simbolicos, florales, ornamentales o de alto detalle.',
        idealFor: [
          'Tatuajes pequenos o medianos',
          'Disenos delicados',
          'Piezas simbolicas o minimalistas',
        ],
        includes: [
          'Ajuste de composicion',
          'Recomendacion de tamano minimo',
          'Guia sobre zonas del cuerpo',
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
          'Contraste, tinta negra y presencia grafica para piezas intensas y atemporales.',
        longDescription:
          'Piezas en tinta negra con contraste profundo, fuerza visual y composicion grafica. Ideal para trabajos ornamentales, geometricos o de alto impacto.',
        idealFor: [
          'Piezas de alto contraste',
          'Disenos ornamentales o graficos',
          'Tatuajes medianos o grandes',
        ],
        includes: [
          'Evaluacion de contraste',
          'Composicion visual',
          'Guia de ubicacion',
        ],
        recommendation:
          'Este estilo luce mejor cuando se respeta el tamano necesario para que la tinta y los detalles respiren.',
        tags: ['Blackwork', 'Bold ink', 'Graphic'],
        imageIndex: 2,
      },
      {
        id: 'studio-experience',
        name: 'Experiencia studio',
        category: 'Care',
        accentText: 'CARE',
        description:
          'Preparacion, higiene y acompamiento para que la sesion se sienta clara y cuidada.',
        longDescription:
          'Un bloque pensado para comunicar limpieza, cuidado y confianza sin prometer certificaciones especificas. Presenta la experiencia del estudio como parte del valor premium.',
        idealFor: [
          'Primer tatuaje',
          'Clientes que necesitan guia',
          'Estudios que venden una experiencia cuidada',
        ],
        includes: [
          'Preparacion previa',
          'Indicaciones de cuidado',
          'Guia de cicatrizacion',
        ],
        recommendation:
          'Comparte cualquier duda antes de reservar para preparar mejor la sesion.',
        tags: ['Hygiene', 'Care', 'Guidance'],
        imageIndex: 3,
      },
      {
        id: 'cover-ups',
        name: 'Cover ups',
        category: 'Rework',
        accentText: 'REWORK',
        description:
          'Reinterpretamos piezas existentes con disenos pensados para cubrir y transformar.',
        longDescription:
          'Un servicio para transformar tatuajes existentes en una nueva propuesta visual. La composicion considera contraste, tamano y estilo para mejorar la pieza anterior.',
        idealFor: [
          'Tatuajes antiguos',
          'Disenos que ya no representan al cliente',
          'Piezas que necesitan reinterpretacion',
        ],
        includes: [
          'Evaluacion del tatuaje existente',
          'Propuesta de cobertura',
          'Recomendacion de estilo y tamano',
        ],
        recommendation:
          'Para cotizar un cover up, envia una foto clara del tatuaje actual con buena luz.',
        tags: ['Cover up', 'Rework', 'Transform'],
        imageIndex: 4,
      },
      {
        id: 'custom-design',
        name: 'Diseno de concepto',
        category: 'Design',
        accentText: 'CUSTOM',
        description:
          'Acompamiento visual para definir concepto, composicion e identidad antes de tatuar.',
        longDescription:
          'Una sesion de direccion visual para construir el diseno antes de pasar a la piel. Se definen concepto, referencias, estilo, escala y composicion.',
        idealFor: [
          'Ideas que aun no estan definidas',
          'Piezas conceptuales',
          'Clientes que quieren construir algo unico',
        ],
        includes: [
          'Exploracion de concepto',
          'Seleccion de referencias',
          'Definicion de estilo',
          'Recomendacion de composicion',
        ],
        recommendation:
          'Trae referencias visuales, ideas base y ejemplos de estilos que te gustan.',
        tags: ['Design', 'Concept', 'Identity'],
        imageIndex: 5,
      },
    ],
    artistsSection: {
      eyebrow: 'Artistas',
      title: 'Artistas con criterio, tecnica y mirada propia.',
      description:
        'Una seccion pensada para presentar perfiles adaptables, especialidades claras y razones para reservar con cada artista.',
    },
    artists: [
      {
        name: 'Linework Artist',
        specialty: 'Fine line',
        shortDescription:
          'Trazos limpios, composiciones delicadas y piezas sutiles pensadas para durar con elegancia.',
        longDescription:
          'Perfil demo para un artista especializado en linea fina, detalle minimalista y composicion delicada. El enfoque comunica precision y calma visual.',
        approach:
          'Ideal para piezas pequenas, simbolicas, florales, ornamentales y disenos con alto nivel de detalle.',
        tags: ['Minimal', 'Linework', 'Detail'],
        imageIndex: 1,
      },
      {
        name: 'Blackwork Artist',
        specialty: 'Blackwork',
        shortDescription:
          'Contraste profundo, tinta negra y una mirada grafica para piezas con presencia intensa.',
        longDescription:
          'Perfil demo para un artista orientado a sombras, ornamentos y piezas de alto impacto. El foco es fuerza visual sin perder composicion.',
        approach:
          'Ideal para blackwork, ornamentos, sombras, piezas grandes y composiciones de alto contraste.',
        tags: ['Bold ink', 'Shadow', 'Graphic'],
        imageIndex: 2,
      },
      {
        name: 'Custom Artist',
        specialty: 'Custom tattoo',
        shortDescription:
          'Disenos personalizados que nacen de referencias, historia y una identidad visual propia.',
        longDescription:
          'Perfil demo para un artista que construye piezas desde cero, tomando como punto de partida referencias, historia personal, ubicacion y estilo.',
        approach:
          'Ideal para piezas personalizadas, cover ups conceptuales, disenos mixtos y proyectos con narrativa visual.',
        tags: ['Custom', 'Concept', 'Identity'],
        imageIndex: 3,
      },
    ],
    gallerySection: {
      eyebrow: 'Galeria',
      title: 'Portafolio visual para vender confianza.',
      description:
        'Una galeria adaptable para mostrar piezas custom, lineas limpias, sombras intensas y detalles que ayudan a decidir una reserva.',
      cta: 'Ver portafolio',
    },
    galleryItems: [
      { category: 'Fine line', title: 'Lineas limpias', size: 'large' },
      { category: 'Blackwork', title: 'Sombra intensa', size: 'small' },
      { category: 'Care', title: 'Detalle limpio', size: 'tall' },
      { category: 'Custom', title: 'Pieza con historia', size: 'small' },
      { category: 'Blackwork', title: 'Contraste permanente', size: 'wide' },
      { category: 'Fine line', title: 'Precision sutil', size: 'small' },
    ],
    processSection: {
      eyebrow: 'Proceso',
      title: 'Del concepto a la piel.',
      description:
        'Un flujo simple para que cada visitante entienda como pasar de una idea inicial a una sesion reservada.',
      marquee: 'Custom ink / Consultation / Artist portfolio / Clean studio /',
    },
    processSteps: [
      {
        number: '01',
        title: 'Consulta',
        description:
          'Se conversa la idea, referencias, ubicacion del tatuaje y estilo buscado.',
      },
      {
        number: '02',
        title: 'Diseno',
        description:
          'El concepto se convierte en una propuesta visual clara y personalizada.',
      },
      {
        number: '03',
        title: 'Reserva',
        description:
          'Se coordinan fecha, preparacion y detalles importantes antes de la sesion.',
      },
      {
        number: '04',
        title: 'Sesion',
        description:
          'La pieza se trabaja cuidando tecnica, higiene, comodidad y resultado final.',
      },
    ],
    contact: {
      eyebrow: 'Booking',
      title: 'Empieza tu concepto de tatuaje.',
      description:
        'Una llamada a la accion clara para convertir interes en consulta: idea, referencias, estilo, tamano y ubicacion.',
      instagramCta: 'Reservar consulta',
      facebookCta: 'Ver portafolio',
      note:
        'Demo adaptable: conecta estos botones a Instagram, WhatsApp, email o el formulario real del estudio.',
      details: [
        { label: 'Enfoque', value: 'Custom tattoo design' },
        { label: 'Experiencia', value: 'Clean premium studio' },
        { label: 'Flujo', value: 'Consultation / Design / Booking' },
      ],
      mapBadge: 'Concept brief',
      mapLocation: 'Premium demo',
      temporaryLocation: 'Noir Ink Studio',
      mapTitle: 'Noir Ink Studio booking preview',
      mapCta: 'Abrir portafolio',
    },
    footer: {
      copyright: '© 2026 Noir Ink Studio. Demo landing page template.',
      backToTop: 'Volver arriba',
      instagramAria: 'Instagram de Noir Ink Studio',
      facebookAria: 'Portafolio de Noir Ink Studio',
    },
    serviceModal: {
      profile: 'Service profile / Noir Ink Studio',
      idealFor: 'Ideal para',
      includes: 'Que incluye',
      beforeBooking: 'Antes de reservar',
      cta: 'Cotizar servicio',
      studio: 'Noir Ink Studio / Premium tattoo demo',
      close: 'Cerrar ficha del servicio',
      open: 'Ver ficha de',
    },
    artistModal: {
      profile: 'Artist profile / Noir Ink Studio',
      approach: 'Enfoque artistico',
      cta: 'Reservar con este artista',
      close: 'Cerrar perfil del artista',
      open: 'Ver perfil de',
    },
    lightbox: {
      fallbackCategory: 'Noir Ink Studio',
      titleFallback: 'Imagen ampliada',
      viewPiece: 'Ver pieza',
      studio: 'Noir Ink Studio / Portfolio preview',
      close: 'Cerrar imagen',
      open: 'Ver imagen de',
    },
  },
  en: {
    brand: {
      name: 'Noir Ink Studio',
      shortName: 'Noir Ink',
      tagline: 'Premium Tattoo Studio Demo',
      location: 'Adaptable landing page for tattoo studios',
    },
    nav: {
      items: [
        { label: 'Home', href: '#inicio' },
        { label: 'Services', href: '#servicios' },
        { label: 'Artists', href: '#artistas' },
        { label: 'Gallery', href: '#galeria' },
        { label: 'Contact', href: '#contacto' },
      ],
      book: 'Book a Consultation',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
    },
    hero: {
      badge: 'Noir Ink Studio',
      eyebrow: 'Premium tattoo studio demo',
      title: 'Timeless Ink. Custom Stories.',
      description:
        'Premium tattoo artistry crafted with precision, intention, and respect for your story.',
      primaryCta: 'Book a Consultation',
      secondaryCta: 'View Portfolio',
      specialties: ['Custom Tattoo', 'Fine Line', 'Blackwork'],
      verticalText: 'Noir / Custom / Ink',
      focus: 'Studio focus',
      marquee: 'Noir Ink Studio / Custom tattoos / Artist portfolio / Booking flow /',
    },
    about: {
      eyebrow: 'The studio',
      title: 'A dark editorial demo, ready to adapt.',
      description:
        'Noir Ink Studio presents a premium studio experience: clear consultation, artist-led design, visible care, and a portfolio built to turn interest into bookings.',
      labels: ['Custom ink', 'Clean studio', 'Artist-led'],
      highlights: ['Custom design', 'Experienced artists', 'Premium studio'],
      verticalText: 'Permanent art / Noir',
    },
    servicesSection: {
      eyebrow: 'Services',
      title: 'Services shaped to turn ideas into ink.',
      description:
        'A clear offer for studios selling custom pieces, design sessions, and a clean experience from first contact.',
      cta: 'Start Your Tattoo Concept',
      verticalText: 'Noir Ink / Services',
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
          'A design route for one-of-one work, shaped around references, story, placement, and visual style. Each piece is developed with composition, scale, and intention.',
        idealFor: [
          'Clients looking for a unique piece',
          'Ideas with personal meaning',
          'Medium or large compositions',
        ],
        includes: [
          'Initial concept consultation',
          'Reference review',
          'Custom visual proposal',
          'Placement and size guidance',
        ],
        recommendation:
          'To request a quote, share references, approximate size, body placement, and a brief note about the idea.',
        tags: ['Custom', 'Concept', 'Identity'],
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
          'Fine line pieces focused on delicate detail, clean composition, and a lighter visual presence. Ideal for symbolic, floral, ornamental, or highly detailed work.',
        idealFor: [
          'Small or medium tattoos',
          'Delicate designs',
          'Symbolic or minimal pieces',
        ],
        includes: [
          'Composition refinement',
          'Minimum size guidance',
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
          'Black ink work with deep contrast, graphic strength, and strong composition. Ideal for ornamental, geometric, or high-impact pieces.',
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
        id: 'studio-experience',
        name: 'Studio experience',
        category: 'Care',
        accentText: 'CARE',
        description:
          'Preparation, hygiene, and guidance so the session feels clear and cared for.',
        longDescription:
          'A service block designed to communicate cleanliness, care, and confidence without making specific real-business claims. It positions the studio experience as part of the premium value.',
        idealFor: [
          'First tattoos',
          'Clients who need guidance',
          'Studios selling a polished experience',
        ],
        includes: [
          'Pre-session preparation',
          'Aftercare direction',
          'Healing guidance',
        ],
        recommendation:
          'Share any questions before booking so the session can be prepared with care.',
        tags: ['Hygiene', 'Care', 'Guidance'],
        imageIndex: 3,
      },
      {
        id: 'cover-ups',
        name: 'Cover ups',
        category: 'Rework',
        accentText: 'REWORK',
        description:
          'Existing pieces reinterpreted with designs built to cover and transform.',
        longDescription:
          'A service for turning existing tattoos into a stronger visual proposal. The composition considers contrast, size, and style to improve the previous piece.',
        idealFor: [
          'Older tattoos',
          'Designs that no longer fit the client',
          'Pieces that need reinterpretation',
        ],
        includes: [
          'Existing tattoo evaluation',
          'Cover concept',
          'Style and size recommendation',
        ],
        recommendation:
          'To quote a cover up, send a clear photo of the current tattoo in good light.',
        tags: ['Cover up', 'Rework', 'Transform'],
        imageIndex: 4,
      },
      {
        id: 'custom-design',
        name: 'Concept design',
        category: 'Design',
        accentText: 'CUSTOM',
        description:
          'Visual guidance to define concept, composition, and identity before tattooing.',
        longDescription:
          'A visual direction session for shaping the design before it reaches skin. Concept, references, style, scale, and composition are defined together.',
        idealFor: [
          'Ideas that are not fully defined yet',
          'Conceptual pieces',
          'Clients who want to build something unique',
        ],
        includes: [
          'Concept exploration',
          'Reference selection',
          'Style definition',
          'Composition guidance',
        ],
        recommendation:
          'Bring visual references, base ideas, and examples of styles you like.',
        tags: ['Design', 'Concept', 'Identity'],
        imageIndex: 5,
      },
    ],
    artistsSection: {
      eyebrow: 'Artists',
      title: 'Artists with technique, taste, and a point of view.',
      description:
        'A section for adaptable artist profiles, clear specialties, and booking reasons that feel specific without naming a real shop.',
    },
    artists: [
      {
        name: 'Linework Artist',
        specialty: 'Fine line',
        shortDescription:
          'Clean strokes, delicate compositions, and subtle pieces designed to age with elegance.',
        longDescription:
          'Demo profile for an artist specializing in fine line, minimal detail, and delicate composition. The positioning communicates precision and visual calm.',
        approach:
          'Ideal for small, symbolic, floral, ornamental pieces and designs with a high level of detail.',
        tags: ['Minimal', 'Linework', 'Detail'],
        imageIndex: 1,
      },
      {
        name: 'Blackwork Artist',
        specialty: 'Blackwork',
        shortDescription:
          'Deep contrast, black ink, and a graphic eye for pieces with serious presence.',
        longDescription:
          'Demo profile for an artist oriented around shading, ornament, and high-impact work. The focus is visual strength without losing composition.',
        approach:
          'Ideal for blackwork, ornaments, shading, large pieces, and high-contrast compositions.',
        tags: ['Bold ink', 'Shadow', 'Graphic'],
        imageIndex: 2,
      },
      {
        name: 'Custom Artist',
        specialty: 'Custom tattoo',
        shortDescription:
          'Custom designs built from references, personal story, and a visual identity of their own.',
        longDescription:
          'Demo profile for an artist who builds pieces from scratch, using references, personal story, body placement, and desired style as the starting point.',
        approach:
          'Ideal for custom pieces, conceptual cover ups, mixed-style designs, and projects with visual narrative.',
        tags: ['Custom', 'Concept', 'Identity'],
        imageIndex: 3,
      },
    ],
    gallerySection: {
      eyebrow: 'Gallery',
      title: 'A portfolio built to sell confidence.',
      description:
        'An adaptable gallery for custom work, clean lines, deep shadows, and details that help visitors decide to book.',
      cta: 'View Portfolio',
    },
    galleryItems: [
      { category: 'Fine line', title: 'Clean lines', size: 'large' },
      { category: 'Blackwork', title: 'Deep shadow', size: 'small' },
      { category: 'Care', title: 'Clean detail', size: 'tall' },
      { category: 'Custom', title: 'Piece with story', size: 'small' },
      { category: 'Blackwork', title: 'Permanent contrast', size: 'wide' },
      { category: 'Fine line', title: 'Subtle precision', size: 'small' },
    ],
    processSection: {
      eyebrow: 'Process',
      title: 'From concept to skin.',
      description:
        'A simple flow that helps visitors understand how an idea becomes a reserved session.',
      marquee: 'Custom ink / Consultation / Artist portfolio / Clean studio /',
    },
    processSteps: [
      {
        number: '01',
        title: 'Consultation',
        description:
          'The idea, references, tattoo placement, and desired style are discussed first.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'The concept becomes a clear custom visual proposal.',
      },
      {
        number: '03',
        title: 'Booking',
        description:
          'Date, preparation, and key details are coordinated before the session.',
      },
      {
        number: '04',
        title: 'Session',
        description:
          'The piece is executed with attention to technique, hygiene, comfort, and final result.',
      },
    ],
    contact: {
      eyebrow: 'Booking',
      title: 'Start your tattoo concept.',
      description:
        'A clear conversion section for turning interest into a consultation: idea, references, style, size, and placement.',
      instagramCta: 'Book a Consultation',
      facebookCta: 'View Portfolio',
      note:
        'Demo-ready: connect these CTAs to Instagram, WhatsApp, email, or a real studio intake form.',
      details: [
        { label: 'Focus', value: 'Custom tattoo design' },
        { label: 'Experience', value: 'Clean premium studio' },
        { label: 'Flow', value: 'Consultation / Design / Booking' },
      ],
      mapBadge: 'Concept brief',
      mapLocation: 'Premium demo',
      temporaryLocation: 'Noir Ink Studio',
      mapTitle: 'Noir Ink Studio booking preview',
      mapCta: 'Open Portfolio',
    },
    footer: {
      copyright: '© 2026 Noir Ink Studio. Demo landing page template.',
      backToTop: 'Back to top',
      instagramAria: 'Noir Ink Studio Instagram',
      facebookAria: 'Noir Ink Studio portfolio',
    },
    serviceModal: {
      profile: 'Service profile / Noir Ink Studio',
      idealFor: 'Ideal for',
      includes: 'What it includes',
      beforeBooking: 'Before booking',
      cta: 'Request a Quote',
      studio: 'Noir Ink Studio / Premium tattoo demo',
      close: 'Close service profile',
      open: 'View service profile for',
    },
    artistModal: {
      profile: 'Artist profile / Noir Ink Studio',
      approach: 'Artistic approach',
      cta: 'Book with this Artist',
      close: 'Close artist profile',
      open: 'View profile of',
    },
    lightbox: {
      fallbackCategory: 'Noir Ink Studio',
      titleFallback: 'Expanded image',
      viewPiece: 'View piece',
      studio: 'Noir Ink Studio / Portfolio preview',
      close: 'Close image',
      open: 'View image of',
    },
  },
} as const

export type Translation = (typeof translations)[Language]
export type ServiceTranslation = Translation['services'][number]
export type ArtistTranslation = Translation['artists'][number]
export type GalleryItemTranslation = Translation['galleryItems'][number]
