## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Run type checking with `pnpm check` (`astro check`) and before finishing a task.

## Arquitectura

Decisiones de arquitectura en `docs/adr/` (empezar por el README/index). Reglas clave:

- Componentes UI en `.astro` con HTML/CSS y vanilla JS; sin React ni shadcn.
- Portfolio de una única ruta; navegación por anclas `#seccion` con scroll suave nativo (`scroll-behavior: smooth`).
- Estilos con Tailwind v4; CSS global en `src/styles/global.css`.
- Imágenes en `src/assets/images/`, optimizadas con el componente `<Image>` de Astro.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
