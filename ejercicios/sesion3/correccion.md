# Corrección — Sesión 3: Playwright primer contacto

**Archivos corregidos:** `tests/sesion3.spec.ts` y `tests/saucedemo.spec.ts`

¡Muy buen trabajo! Playwright quedó bien instalado y el flujo de compra está muy bien resuelto, usando solo locators recomendados (`getByPlaceholder`, `getByRole`, `getByText`). Hay un solo test que falla.

## Verificación

- `npx playwright test` → pasan 3 de 4 tests. Falla `marcar tarea`.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1–3 | Instalar Playwright | ✅ | Config, carpeta `tests` y navegadores OK. |
| 5 | Test 1: título con `toHaveTitle` | ✅ | |
| 6 | Test 2: agregar tarea | ✅ | |
| 7 | Test 3: marcar tarea como completada | ❌ | El `expect` final no encuentra el checkbox (ver abajo). |
| 8 | `saucedemo.spec.ts` con un único test `compra completa` | ✅ | |
| 9 | Login | ✅ | |
| 10 | Agregar al carrito y verificar que el ícono muestra 1 | ✅ | Muy buena idea usar el nombre accesible `Cart, 1 items` para verificar el número. |
| 11 | Abrir el carrito | ✅ | |
| 12–13 | Checkout y resumen | ✅ | |
| 14 | Mensaje "Thank you for your order!" | ✅ | |

## A corregir

1. **El test `marcar tarea` falla.** En la última línea se usa `getByText('checkbox', ...)`, que busca un elemento con el **texto** "checkbox" y no lo encuentra. Para buscar el checkbox hay que usar `getByRole`, igual que en la línea anterior:

   ```ts
   // Antes
   await expect(page.getByText('checkbox', { name: 'Toggle Todo' })).toBeChecked();

   // Después
   await expect(page.getByRole('checkbox', { name: 'Toggle Todo' })).toBeChecked();
   ```
