# 0004. Navegación en una única página con scroll por anclas

- **Estado:** Aceptado
- **Fecha:** 2026-08-30

## Contexto

El portfolio inicial era un SPA en React con varias rutas. Al migrar a Astro
(ADR 0001) cada sección (inicio, proyectos, sobre mí, contacto) podría
convertirse en una página propia con el layout compartido, pero el contenido es
presentación pura: las secciones son cortas, no necesitan URLs propias ni
carga diferida, y la navegación multipágina añade recargas y ruido entre
secciones que en un portfolio se leen de una sola pasada.

Por otro lado, ADR 0003 ya decidió sustituir `react-scroll` por anclas
`#seccion` + `html { scroll-behavior: smooth }`, pensando en scroll suave
elemental. Queda por fijar el modelo de navegación completo: número de rutas y
cómo convive con la regla de oro de ADR 0001 (cero JavaScript de frameworks).

## Decisión

El portfolio es una **única ruta** (`index.astro`) que renderiza todo el
contenido. La navbar navega por **anclas `#seccion`** con scroll suave nativo:

- `html { scroll-behavior: smooth }` y `scroll-padding-top` en
  `src/styles/global.css` (el offset compensa la altura de la navbar fija).
- Cada sección es un componente `.astro` propio (`Hero.astro`,
  `Proyectos.astro`, `Contacto.astro`...) con `id` en su elemento raíz, e
  `index.astro` los compone en orden.
- Los "enlaces" de la navbar son `<a href="#proyectos">`, resueltos por el
  navegador sin ningún JavaScript.
- El scroll se anima de forma nativa; no se usa ninguna librería de scroll.

Cuando haga falta, el scroll-spy se implementa con ~10 líneas de vanilla JS
(`IntersectionObserver`), según ADR 0003.

## Consecuencias

- Una sola URL: todo el contenido está en el HTML de `/`, sin múltiples rutas
  que mantener ni estado que sincronizar. Mejora el SEO del conjunto (todo el
  contenido en la página principal) pero sin URLs canónicas por sección.
- Navegación con cero JavaScript: el scroll suave es comportamiento de
  navegador. Matiza la consecuencia de ADR 0001 "renunciar al modelo mental de
  SPA": la experiencia es de scroll dentro de una página, pero sin runtime de
  framework ni estado compartido en cliente.
- El número de secciones queda limitado en la práctica: si el portfolio
  creciera con secciones largas o con necesidad de URL por sección (SEO,
  enlaces directos, carga bajo demanda), se reabriría esta decisión para pasar
  a multipágina conservando las anclas por sección.