# Roberto Lopez Calle - Portafolio Profesional

Portafolio web profesional construido con Next.js, TypeScript y Tailwind CSS.

## Stack Tecnologico

- **Framework**: Next.js 16
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Fuente**: Inter (Google Fonts)

## Estructura del Proyecto

```
app/
  page.tsx          # Pagina de inicio
  about/page.tsx    # Sobre mi (CV completo)
  projects/page.tsx # Proyectos
  projects/[slug]/  # Detalle de proyecto
  contact/page.tsx  # Contacto
  sitemap.ts        # Sitemap dinamico SEO
  robots.ts         # Robots.txt SEO
  layout.tsx        # Layout raiz
components/
  Header.tsx        # Header premium con logo
  Footer.tsx        # Footer 4 columnas
  QuoteForm.tsx     # Formulario cotizacion WhatsApp
  ProjectCard.tsx   # Card de proyecto
  WhatsAppButton.tsx# Boton flotante WhatsApp
lib/
  data.ts           # Datos del portafolio (usa NEXT_PUBLIC_SITE_URL)
types/
  index.ts          # Interfaces TypeScript
public/
  logo.png          # Logo de marca
  cv/               # CV descargable PDF
```

## Variables de Entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://lopezdev.fun
```

Para produccion en Vercel, agregar en Dashboard > Settings > Environment Variables:
- `NEXT_PUBLIC_SITE_URL` = `https://lopezdev.fun`

## Despliegue en Vercel

```bash
npm run build
npx vercel deploy
```

Luego en Vercel > Project > Domains agregar `lopezdev.fun` y configurar DNS.

## Desarrollo Local

```bash
npm install
npm run dev