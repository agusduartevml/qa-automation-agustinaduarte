# Corrección — Sesión 2

**Archivo corregido:** `ejercicios/sesion2/casosTest.ts`

¡Muy bien! La tarea está completa y funciona.

## Verificación

`npx tsx ejercicios/sesion2/casosTest.ts` imprime, después de 500 ms:

```
1 - Login exitoso - Alta - Hecho
2 - Login con usuario incorrecto - Alta - Hecho
3 - Login con contraseña incorrecta - Media - Pendiente
```

También compila sin errores con `tsc --strict`.

## Detalle por punto

| Punto | Estado | Comentario |
|-------|--------|------------|
| Interface `CasoDeTest` con los 4 campos tipados | ✅ | |
| Array de al menos 3 casos tipados | ✅ | |
| `obtenerCasosDeTest(): Promise<CasoDeTest[]>` con `setTimeout` de 500 ms | ✅ | Bien tipado el `new Promise<CasoDeTest[]>`. |
| `formatearCaso` con "Hecho" / "Pendiente" | ✅ | |
| `async main()` con `await` y `forEach` | ✅ | |
