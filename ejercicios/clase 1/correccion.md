# Corrección — Sesión 1: TypeScript sintaxis base

**Archivo corregido:** `ejercicios/clase 1/casos-test.ts`

La lógica de las funciones está bien pensada, pero el archivo no corre. Con los arreglos de abajo debería quedar funcionando.

## Verificación

- `npx tsx casos-test.ts` → no corre:

  ```
  ERROR: The symbol "contarporPrioridad" has already been declared
  ```

- `npx tsc --noEmit` (con `strict: true`) → errores de tipos por `Array<object>` (ver abajo).

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 2 | Array de ≥ 5 casos con `id`, `titulo`, `prioridad`, `ejecutado` | ⚠️ | 5 casos, pero tipados como `object` (ver abajo). |
| 3 | `contarPorPrioridad(casos)` | ✅ | Recibe el array y devuelve el conteo por prioridad. |
| 4 | `listarPendientes(casos)` | ❌ | El `return` quedó comentado, así que la función devuelve `undefined`. |
| 5 | Arrow function `formatearCaso(caso)` | ⚠️ | Funciona, pero el formato no es el pedido (ver detalles menores). |
| 6 | `forEach` imprimiendo los casos formateados | ✅ | |

## A corregir

1. **El código está duplicado.** De la línea 62 en adelante se repiten `contarporPrioridad`, `listarPendientes` y `formatearCaso`. No se puede declarar dos veces la misma `const`, por eso el archivo no corre. Hay que borrar la segunda copia.

2. **`Array<object>` no deja usar las propiedades.** Para TypeScript un `object` no tiene `id`, `titulo` ni `ejecutado`, por eso marca error en `caso.ejecutado`. Ya tenías una interface al final del archivo: la idea es definirla arriba, con los mismos nombres que usa el array, y usarla en todas las funciones:

   ```ts
   interface CasoPrueba {
     id: number;
     titulo: string;
     prioridad: "Alta" | "Media" | "Baja";
     ejecutado: boolean;
   }

   const casosPrueba: CasoPrueba[] = [ ... ];
   const listarPendientes = (casos: CasoPrueba[]) => { ... };
   const formatearCaso = (caso: CasoPrueba) => { ... };
   ```

   Con eso tampoco hacen falta los `el: any`.

3. **`listarPendientes` no devuelve nada.** Hay que descomentar el `return`:

   ```ts
   return noEjecutado;
   ```

## Detalles menores

- Al repositorio le falta el `tsconfig.json`, por eso el editor no marca estos errores de tipos mientras escribís. Se crea con `npx tsc --init`.
