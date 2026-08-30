# Architecture Decision Records (ADR)

Registro de decisiones de arquitectura del proyecto. Cada decisión relevante se
documenta en su propio fichero, numerado de forma incremental.

## Formato

Cada ADR sigue esta plantilla:

```markdown
# NNNN. Título de la decisión

- **Estado:** Propuesto | Aceptado | Sustituido por NNNN | Obsoleto
- **Fecha:** AAAA-MM-DD

## Contexto
Qué problema tenemos y qué fuerzas/limitaciones influyen.

## Decisión
Qué hemos decidido y por qué esa opción frente a las alternativas.

## Consecuencias
Qué implica: ventajas, costes y cosas que habrá que hacer distinto.
```

## Convenciones

- Los ADR no se editan una vez aceptados; si cambia la decisión, se crea uno
  nuevo que marca al anterior como *Sustituido por NNNN*.
- Numeración secuencial: `0001`, `0002`, ...
- Se escriben en español.

## Índice

| ADR | Título | Estado |
| --- | ------ | ------ |
| [0001](0001-usar-astro-como-framework.md) | Usar Astro como framework del portfolio | Aceptado |
| [0002](0002-sin-librerias-de-ui-react.md) | Evitar librerías de UI de React (antd, react-vertical-timeline-component, react-scroll) | Sustituido por [0003](0003-componentes-ui-sin-react-ni-shadcn.md) |
| [0003](0003-componentes-ui-sin-react-ni-shadcn.md) | Componentes UI con HTML/CSS y vanilla JS (sin React ni shadcn) | Aceptado |
| [0004](0004-navegacion-unica-pagina-scroll-anclas.md) | Navegación en una única página con scroll por anclas | Aceptado |
