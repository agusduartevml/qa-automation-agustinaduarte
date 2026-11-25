# Corrección — Sesión 5: Page Object Model

**Archivos corregidos:** `pages/*.ts`, `tests/sesion3.spec.ts` y `tests/saucedemo.spec.ts` (rama `sesion5`)

¡Muy buen trabajo con la estructura! Las cinco clases están separadas por responsabilidad y respetan los nombres de la consigna. Todas reciben `Page` en el constructor y guardan sus locators como propiedades `readonly`. Las validaciones quedaron en el test y no dentro de las páginas, que era uno de los puntos clave. Los locators son los recomendados (`getByRole`, `getByPlaceholder`, `getByText`) y no hay esperas fijas.

## Verificación

- `npx playwright test` desde la raíz: **6 tests en verde** (2 tests × chromium, firefox y webkit) ✅
- Se trabajó en una rama nueva (`sesion5`) ✅

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 2–3 | `pages/` con las clases mínimas, specs en `tests/` | ✅ | |
| 4 | `Page` en el constructor y locators como propiedades | ✅ | Ver detalle sobre el último `expect` del flujo de Sauce Demo. |
| 5 | `TodoPage` con navegación, locators y acciones | ✅ | |
| 8–9 | Flujo completo de Sauce Demo | ⚠️ | El flujo corre entero, pero no se revisa el overview ni el producto en el carrito. |
| 10 | Las páginas accionan y el test valida | ✅ | |
| 11 | Locators recomendados y sin esperas fijas | ✅ | |

## A corregir

1. **El test de "agregar tarea" no verifica la tarea.** `await expect(todoPage.newTodo).toBeVisible()` comprueba que el **input** se ve, y eso pasa aunque la tarea nunca se agregue. Hay que verificar el texto de la tarea, como en la Sesión 3. Por ejemplo, agregando a `ToDoPage` un método que devuelva el ítem:

   ```ts
   taskItem(texto: string): Locator {
     return this.page.getByTestId('todo-item').filter({ hasText: texto });
   }
   ```

   ```ts
   await expect(todoPage.taskItem('clase 3')).toBeVisible();
   ```

## Detalles menores

- El último `expect` arma el locator en el test (`page.getByRole('heading', { name: 'Thank you for your order!' })`). Para cumplir el punto 4, conviene moverlo a `CheckOutPage` como una propiedad más.