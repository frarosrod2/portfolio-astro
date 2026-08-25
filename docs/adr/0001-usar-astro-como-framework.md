# 0001. Usar Astro como framework del portfolio

- **Estado:** Aceptado
- **Fecha:** 2026-08-25

## Contexto

El portfolio existía como SPA en React. Es un sitio mayoritariamente estático
(presentación, proyectos, contacto) donde la interactividad real es mínima.
Una SPA envía todo el JavaScript del framework al navegador aunque el contenido
no cambie en cliente, penalizando rendimiento y SEO.

## Decisión

Migrar a Astro: las páginas se renderizan a HTML estático con cero JavaScript
por defecto.

Regla de oro derivada: solo se usa un framework de UI (React/Svelte/etc.) como
*isla* hidratada (`client:*`) cuando exista interactividad genuina que no se
pueda resolver con HTML/CSS o un `<script>` vanilla pequeño.

## Consecuencias

- Mejor rendimiento y Core Web Vitals por defecto; SEO más simple (contenido
  en HTML real).
- Hay que renunciar al modelo mental de SPA: navegación multipágina, sin estado
  global compartido entre páginas.
- Los componentes visuales se escriben en `.astro` (frontmatter + template),
  no en JSX.
- Cualquier dependencia npm pensada solo para React debe evaluarse antes:
  ¿se puede hacer con CSS/vanilla? (ver ADR 0002).
