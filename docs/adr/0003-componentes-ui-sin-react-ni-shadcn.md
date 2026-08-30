# 0003. Componentes UI con HTML/CSS y vanilla JS (sin React ni shadcn)

- **Estado:** Aceptado
- **Fecha:** 2026-08-30
- **Sustituye a:** [0002](0002-sin-librerias-de-ui-react.md)

## Contexto

El ADR 0002 proponía shadcn/ui como base de componentes UI, lo que obligaba a
instalar React y a hidratar islas (`client:*`) en los componentes interactivos.
Al revisar el portfolio concreto, toda la interactividad prevista (menú,
scroll-spy, timeline, modales simples) es trivial de resolver con HTML/CSS y un
`<script>` vanilla de pocas líneas. Introducir el runtime de React como
dependencia de build, aunque solo se hidratara en islas puntuales, añade
complejidad y una vía de escape fácil: "puedes meter componentes React cuando
quieras", que erosiona la regla de oro del ADR 0001.

## Decisión

No usar React ni shadcn/ui. Todo se implementa de forma nativa:

- **shadcn/ui (Button, Card, Badge...)** → componentes en `.astro` con
  Tailwind CSS v4. Son HTML puro, sin JavaScript en el navegador.
- **Diálogos/selects avanzados** → `dialog` nativo, `<details>`/`<summary>`,
  con `<script>` vanilla cuando hace falta cerrar, posición, etc.
- **react-vertical-timeline-component** → timeline con HTML/CSS puro
  (`::before`/`::after` para la línea y los nodos). Animaciones de aparición
  con scroll-driven animations CSS (`animation-timeline: view()`) si hace falta.
- **react-scroll** → `html { scroll-behavior: smooth }` + anclas `#seccion`;
  scroll-spy con ~10 líneas de vanilla JS usando `IntersectionObserver`
  (patrón documentado en el ADR 0002).
- Se conserva Tailwind CSS v4 (`@tailwindcss/vite`) como sistema de estilos
  general; el CSS global vive en `src/styles/global.css`, importado desde el
  layout base.

El escenario para reabrir esta decisión: aparecer un componente genuinamente
complejo (date-picker, tabla editable, drag-and-drop) cuyo coste nativo supere
al de una isla. En ese momento se evalúa una isla puntual, sin un design
system React completo.

## Consecuencias

- 0 KB de JavaScript de frameworks ni de terceros: solo el `<script>` vanilla
  necesario en cada página.
- Sin dependencias opacas ni runtime de componentes; nada que actualizar y
  sin lockfile inflado.
- React, shadcn, componentes generados y alias `@/*` se retiraron del repo
  (ver estado del ADR 0002: instalado y revertido el 2026-08-30).
- Hay que implementar a mano componentes que en un design system vienen
  listos; para este portfolio el coste es bajo porque la mayoría son estáticos.