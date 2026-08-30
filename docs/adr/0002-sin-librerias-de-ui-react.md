# 0002. Evitar librerías de UI de React

- **Estado:** Sustituido por [0003](0003-componentes-ui-sin-react-ni-shadcn.md)
- **Fecha:** 2026-08-25

## Contexto

El portfolio en React usaba tres librerías:

| Librería | Uso |
| --- | --- |
| `antd` | Design system completo (botones, layout, formularios...) |
| `react-vertical-timeline-component` | Timeline vertical de experiencia/proyectos |
| `react-scroll` | Scroll suave y scroll-spy en la navegación |

En Astro, usarlas obligaría a hidratar islas React y enviar React + la librería
al navegador para funcionalidades que son visualmente estáticas o triviales de
implementar de forma nativa.

## Decisión

No usar librerías de UI de React como dependencias opacas (paquetes que
embuten su runtime y su CSS). Sustituciones:

- **antd** → **shadcn/ui** como base de componentes UI. No es una dependencia
  opaca: su CLI (`pnpm dlx shadcn@latest add <componente>`) copia el código
  fuente de cada componente al repo (`src/components/ui/`) y se apoya en
  primitivas Radix solo cuando el componente lo necesita.
  Reglas de uso:
  - Componentes estáticos (Button, Card, Badge...) se renderizan a HTML puro,
    sin JavaScript en el navegador.
  - Solo los interactivos (Dialog, DropdownMenu, Select...) se hidratan como
    isla React con un directiva `client:*`.
  - Los componentes copiados son código propio: se editan libremente y no hay
    actualizaciones de versión que gestionar.
- Estilos → **Tailwind CSS v4** mediante la integración oficial
  (`npx astro add tailwind`): es prerrequisito de shadcn y el sistema de
  estilos general del proyecto. El CSS global vive en `src/styles/global.css`,
  importado desde el layout base.
- **react-vertical-timeline-component** → timeline con HTML/CSS puro
  (`::before`/`::after` para la línea y los nodos). Animaciones de aparición
  con scroll-driven animations CSS (`animation-timeline: view()`) cuando haga
  falta.
- **react-scroll** → `html { scroll-behavior: smooth }` + anclas `#seccion`;
  scroll-spy con ~10 líneas de vanilla JS usando `IntersectionObserver`.

## Consecuencias

- Zonas estáticas con 0 KB de JavaScript propio o de terceros; los componentes
  interactivos de shadcn pagan su isla solo donde hacen falta.
- Los componentes complejos (dialogs, selects avanzados, date-pickers...)
  siguen disponibles vía shadcn cuando se necesiten, como islas puntuales.
- Requiere integración de React y Tailwind en el proyecto (prerrequisitos de
  shadcn), aunque la web siga siendo mayoritariamente `.astro`.
- Instalación ejecutada el 2026-08-30:
  - `astro add tailwind react`: Tailwind CSS v4 vía `@tailwindcss/vite` y
    React 19 con la integración `@astrojs/react`.
  - Alias `@/*` → `./src/*` en `compilerOptions.paths` de `tsconfig.json`
    (Astro lo aplica también a Vite).
  - `shadcn init` con preset Nova y primitivas Radix: generó
    `components.json`, `src/lib/utils.ts` y `src/components/ui/button.tsx`.
    El CSS global en `src/styles/global.css` quedó importado desde
    `src/layouts/Layout.astro`.
