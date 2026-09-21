# Portfolio — Francisco Javier Rosa

Portfolio personal de Francisco Javier Rosa, Full Stack Developer, construido con Astro, Tailwind CSS v4 y JavaScript nativo.

## 🧑‍💻 Características

- Single-page con navegación por anclas (`#about`, `#timeline`, `#projects`) y scroll suave nativo.
- Secciones: Introducción, About, Timeline (experiencia laboral) y Projects.
- Imágenes optimizadas con el componente `<Image>` de Astro.
- SEO: metadatos Open Graph/Twitter, JSON-LD (schema.org/Person), sitemap y `robots.txt`.
- Tipografías auto-hospedadas (Golos Text y Belanosima) con `font-display: optional`.
- Sin librerías de UI: componentes `.astro` con HTML/CSS y vanilla JS.

## 🚀 Estructura del proyecto

```text
/
├── public/
│   └── favicon.svg, og-image.png, ...
├── src/
│   ├── assets/
│   │   ├── fonts/          # woff2 auto-hospedadas
│   │   ├── images/         # logos y capturas
│   │   └── resume.pdf
│   ├── components/         # Introduction, About, Timeline, Projects, Navbar, Logo
│   ├── layouts/
│   │   └── Layout.astro    # head SEO + Navbar
│   ├── styles/
│   │   └── global.css      # Tailwind v4 + @font-face
│   └── pages/
│       ├── index.astro
│       ├── 404.astro
│       └── robots.txt.ts
├── docs/adr/               # Decisiones de arquitectura (ADR)
└── astro.config.mjs
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto con `pnpm`:

| Comando                 | Acción                                              |
| :---------------------- | :-------------------------------------------------- |
| `pnpm install`          | Instala las dependencias                            |
| `pnpm dev`              | Arranca el servidor local en `localhost:4321`       |
| `pnpm check`            | Ejecuta `astro check` (type checking)               |
| `pnpm build`            | Genera el sitio de producción en `./dist/`          |
| `pnpm preview`          | Previsualiza el build de producción localmente      |

Para desarrollo también está disponible el modo en segundo plano: `astro dev --background` (gestionar con `astro dev stop | status | logs`).

## 🏗️ Arquitectura

Las decisiones de arquitectura se documentan como ADR en [docs/adr](docs/adr/README.md).

## 📚 Recursos

- Documentación de Astro: https://docs.astro.build