# manuelsoberano.com

Sitio personal y portafolio de **Manuel Soberano** — desarrollador de software, emprendedor y creador de contenido técnico.

🌐 **[manuelsoberano.com](https://manuelsoberano.com)**

## Stack Tecnológico

- **[Astro](https://astro.build/)** — Framework web para sitios orientados a contenido
- **MDX** — Markdown con componentes
- **GitHub Pages** — Hosting con deploy automático via GitHub Actions
- **Vanilla CSS** — Sistema de diseño editorial con dark mode

## Estructura del Proyecto

```
├── public/
│   ├── CNAME              # Dominio custom
│   ├── images/            # Imágenes estáticas
│   └── favicon.ico
├── src/
│   ├── content/           # Content Collections
│   │   ├── articles/      # Posts en MDX
│   │   └── projects/      # Case studies
│   ├── data/
│   │   └── videos.json    # Catálogo de videos YouTube
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── articulos/
│   │   ├── proyectos/
│   │   ├── videos/
│   │   └── contacto.astro
│   └── styles/
│       └── global.css     # Design system
├── .github/workflows/
│   └── deploy.yml         # CI/CD GitHub Actions
└── astro.config.mjs
```

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

El servidor estará disponible en `http://localhost:4321`

## Contenido

### Artículos

Crear un nuevo artículo en `src/content/articles/`:

```mdx
---
title: 'Título del Artículo'
description: 'Descripción breve'
pubDate: 2026-01-01
tags: ['tag1', 'tag2']
---

# Contenido del artículo...
```

### Proyectos

Crear un case study en `src/content/projects/`:

```mdx
---
title: 'Nombre del Proyecto'
description: 'Descripción del proyecto'
date: 2026-01-01
stack: ['TypeScript', 'Node.js']
featured: true
---

# Detalles del proyecto...
```

### Videos

Agregar videos en `src/data/videos.json` siguiendo la estructura de series existente.

## Deploy

El sitio se despliega automáticamente a GitHub Pages cuando se hace push a `main`.

El workflow de GitHub Actions:
1. Instala dependencias
2. Ejecuta `npm run build`
3. Verifica que el archivo `CNAME` exista en `dist/`
4. Despliega a GitHub Pages

## Features

- ✅ **Dark mode** con toggle y persistencia
- ✅ **SEO** — Meta tags, OpenGraph, canonical URLs
- ✅ **RSS Feed** — `/rss.xml`
- ✅ **Sitemap** — Generado automáticamente
- ✅ **Accesibilidad** — Skip links, focus visible, contraste AA
- ✅ **Responsive** — Mobile-first design
- ✅ **Performance** — Astro static output, lazy loading

## Licencia

© Manuel Soberano. Todos los derechos reservados.
