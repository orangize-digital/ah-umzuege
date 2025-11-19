# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A.H Entrümpelung & Umzüge is a professional moving services website for a German moving company, built with Nuxt 3. The site is in German (language: 'de') and provides information about various moving and clearance services. The project was recently migrated from a Vite/Vue 3 SPA to Nuxt 3 for better SEO and SSR capabilities.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production (SSR)
npm run build

# Generate static site (recommended for deployment)
npm run generate

# Preview production build
npm run preview
```

## Build Output

- **Static generation**: `.output/public` directory contains deployable static files
- **SSR build**: `.output` directory contains server and build artifacts
- **Server entry**: `.output/server/index.mjs` for Node.js deployment

## Architecture

### Framework Setup

- **Nuxt 3** with SSR/SSG capabilities
- **TypeScript** configured but with `strict: false` and `typeCheck: false` in nuxt.config.ts:15-18
- **Nuxt modules**:
  - `@nuxtjs/tailwindcss` - TailwindCSS integration
  - `@nuxtjs/sitemap` - Automatic sitemap generation
  - `@nuxtjs/robots` - robots.txt configuration

### Styling System

- **TailwindCSS** with custom CSS variables defined in `assets/main.css`
- **Color theming**: Uses CSS custom properties (e.g., `--primary`, `--background`) mapped to Tailwind utilities
- **Dark mode support**: Configured with `.dark` class variant in tailwind.config.js:6 and main.css
- **Animation library**: `tw-animate-css` package included
- **Smooth scrolling**: Enabled globally via `scroll-behavior: smooth` in main.css:132

### Component Architecture

Components are organized by page/section:

- **Shared components**: `NavHeader.vue`, `FooterSection.vue`, `ContactSection.vue`, etc.
- **Page-specific components**: Organized in subdirectories:
  - `components/Leistungen/*` - Services page sections
  - `components/Ueber-uns/*` - About page sections
  - `components/Referenzen/*` - References page sections
  - `components/Kontakt/*` - Contact page sections

### Pages and Routing

File-based routing in `pages/` directory:
- `/` - Home page (index.vue)
- `/leistungen` - Services page with anchor sections (#entruempelung, #firmenumzug, etc.)
- `/ueber-uns` - About us page
- `/referenzen` - References/testimonials page
- `/kontakt` - Contact page

### Icons

- **Lucide Vue Next**: All Lucide icons are registered globally via plugin at `plugins/lucide.ts`
- Import icons in components: `import { TruckIcon, PhoneIcon, MessageCircle } from 'lucide-vue-next'`
- Icons used throughout navigation and components

### Contact Information

- **Phone Number**: +49 163 0182135 (`tel:+491630182135`)
- **WhatsApp**: +49 163 0182135 (`https://wa.me/491630182135`)
- **Email**: kontakt@ah-umzuege.de
- **WhatsApp Color**: Primary green #25D366, hover #20BA5A

### SEO Implementation

Every page implements comprehensive SEO using Nuxt composables:

```typescript
useSeoMeta({
  title: '...',
  description: '...',
  ogTitle: '...',
  ogDescription: '...',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/...',
  twitterCard: 'summary_large_image',
  // ... etc
})

useHead({
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: '...' }]
})
```

**Important SEO patterns**:
- Base site URL: `https://mukhtar-umzuge.de` (configured in nuxt.config.ts:40)
- All pages use German language (`lang: 'de'`)
- Canonical URLs are always absolute and include full domain
- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt configured via `@nuxtjs/robots` module

### Navigation Structure

The `NavHeader.vue` component:
- Has sticky positioning (`sticky top-0 z-50`)
- Desktop dropdown menu for "Leistungen" (services) with hover interaction
- Mobile menu with collapsible sections
- Uses `ClientOnly` wrapper for mobile menu to prevent hydration issues
- Includes direct phone call CTA: `tel:+491630182135` and WhatsApp button: `https://wa.me/491630182135`

**Services submenu links** (both desktop and mobile):
- Entrümpelung (#entruempelung)
- Firmenumzug (#firmenumzug)
- Haushaltsauflösung (#haushaltsaufloesung)
- Wohnungsauflösung (#wohnungsaufloesung)
- Entsorgung (#entsorgung)
- Transport (#transport)
- Renovierungsarbeiten (#renovierung)

### State Management

- **Reactivity**: Uses Vue 3 Composition API with `ref()` for component state
- No global state management (Pinia/Vuex) - components are self-contained
- Example: Navigation menu state managed locally in NavHeader.vue:153-155

## Key Conventions

1. **Component imports**: Pages explicitly import their section components (not using auto-imports for clarity)
2. **Color palette**: Orange (`#ed7f11` / `orange-600`) is the primary brand color
3. **Component structure**: Pages are composed of multiple section components for better maintainability
4. **Scoped styles**: Use Tailwind `@apply` directive in `<style scoped>` blocks for component-specific utilities
5. **German language**: All user-facing content is in German

## Deployment

The site is optimized for static generation (`npm run generate`) for best SEO performance. Deploy the `.output/public` directory to static hosting services like Netlify, Vercel, or GitHub Pages. The site can also be deployed as a Node.js SSR application if needed.
