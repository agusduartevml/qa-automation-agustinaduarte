# Corrección — Sesión 2

**Archivo corregido:** no se encontró la entrega.

## Verificación

En el repositorio no está el archivo `casosTest.ts` de la sesión 2 (ni en `main` ni en otra rama). En `ejercicios/clase 1/promesas.ts` está el ejemplo de promesas que vimos en clase, pero no la tarea.

## A corregir

1. **Falta la tarea.** Hay que crear `ejercicios/sesion2/casosTest.ts` con:
   - Una interface `CasoDeTest` con `id` (number), `titulo` (string), `prioridad` (string) y `ejecutado` (boolean).
   - Un array de al menos 3 casos tipados con esa interface.
   - Una función `obtenerCasosDeTest(): Promise<CasoDeTest[]>` que devuelva el array a los 500ms usando `setTimeout` + `Promise`.
   - Una función `async main()` que haga `await obtenerCasosDeTest()` y recorra los casos con `forEach`, imprimiéndolos con `formatearCaso`.

   Tu `promesas.ts` ya tiene la estructura de `new Promise` + `setTimeout`. Es la misma idea, pero resolviendo el array de casos en vez de `"Ana"`.

## Detalles menores

- La carpeta `sesion2/` de la raíz tiene dos archivos vacíos (`example.specs.ts` y `playwright.config.ts`). Se pueden borrar para no confundirlos con la configuración real de Playwright.
