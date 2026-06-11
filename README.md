# Inkside Antigua Landing Page

Landing page dark premium para **Inkside Antigua**, un estudio de tatuajes y piercings en Antigua Guatemala. El proyecto fue construido como pieza de portafolio, enfocada en dirección visual, composición editorial, experiencia interactiva y una arquitectura frontend limpia con React.

## Descripción

La landing combina estética tattoo studio, diseño editorial y una interfaz monocromática con fotografías en color desaturado. La experiencia incluye secciones comerciales completas, navegación responsive, modales de servicio/artista, galería visual, mapa integrado y animaciones suaves.

El objetivo visual fue crear una presencia digital intensa y moderna sin copiar plantillas de referencia: dark, artística, premium y alineada al logo real de Inkside.

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4
- Motion
- Lenis
- Lucide React
- clsx + tailwind-merge

## Funcionalidades

- Navbar responsive con logo real de Inkside.
- Hero editorial con collage visual.
- Sección About con composición tipo collage.
- ServicesSection tipo bento/masonry con imágenes y ficha modal por servicio.
- ArtistsSection con cards interactivas y modal de perfil.
- GallerySection con collage visual y lightbox.
- ProcessSection con pasos del proceso.
- ContactSection con CTA a redes y mapa a color.
- Footer con marca, navegación y redes sociales.
- Smooth scroll con Lenis.
- Animaciones de entrada y hover con Motion.
- Favicon personalizado con el logo de Inkside.

## Estructura Principal

```txt
src/
  assets/
    images/
      brand/
      tattoos/
  components/
    layout/
    ui/
  data/
  lib/
  sections/
  styles/
  App.tsx
  main.tsx
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Por defecto Vite levanta el proyecto en:

```txt
http://localhost:5173
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Preview de Producción

```bash
npm run preview
```

## Imágenes

Las imágenes de prueba están en:

```txt
src/assets/images/tattoos/
```

El proyecto detecta imágenes con este patrón:

```txt
tattoo-*.jpg
tattoo-*.jpeg
tattoo-*.png
tattoo-*.webp
```

Para reemplazarlas, conserva nombres como:

```txt
tattoo-01.png
tattoo-02.png
tattoo-03.png
tattoo-04.png
tattoo-05.png
tattoo-06.png
```

El logo de marca se encuentra en:

```txt
src/assets/images/brand/inkside-logo.png
```

Y el favicon público en:

```txt
public/favicon.png
```

## Datos Editables

El contenido reutilizable vive en:

```txt
src/data/siteData.ts
```

Desde ahí se administran:

- Información general de marca.
- CTAs.
- Redes sociales.
- Servicios.
- Artistas.
- Galería.
- Proceso.
- Contacto.

## Decisiones de Diseño

- Interfaz black & white / grayscale para respetar la identidad de marca.
- Fotografías en color desaturado para conservar textura, piel, tinta y realismo.
- Bordes finos, fondos oscuros, overlays sutiles y jerarquía editorial.
- Cards con interacción visual sin perder legibilidad.
- Modales informativos pensados para conversión: reservar, cotizar y contactar por Instagram.

## Estado del Proyecto

Proyecto frontend estático, listo para despliegue en servicios como Vercel, Netlify, Cloudflare Pages o cualquier hosting que soporte apps Vite.

