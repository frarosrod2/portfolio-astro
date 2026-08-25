# 0003. Layout único con head centralizado

- **Estado:** Aceptado
- **Fecha:** 2026-08-25

## Contexto

En Astro cada página debe renderizar un documento HTML completo
(`<html>`, `<head>`, `<body>`), y a diferencia de otros frameworks no existe un
head global implícito ni los heads se fusionan/reordenan: debe haber exactamente
uno por página.

## Decisión

Crear un único layout base (`src/layouts/Layout.astro`) que contiene el shell
de página completo y un `<slot />`, e importarlo en todas las páginas:

```astro
---
interface Props { title: string; description?: string; }
const { title, description = "..." } = Astro.props;
---
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="description" content={description} />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Si el `<head>` crece (Open Graph, canonical, sitemap...), se extrae a un
componente `<BaseHead />` incluido dentro del `<head>` del layout — nunca en
componentes sueltos de página.

## Consecuencias

- Ninguna página repite markup de shell; el título/description pasan como props.
- Riesgo reducido de heads duplicados u olvidados.
- El lang del documento vive en un único sitio.
