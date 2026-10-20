import { test, expect } from '@playwright/test';
//declarar un test con test. recibe un titulo "has titke" y una función asincronica
test('has title', async ({ page }) => { //interactua con el navegador//
  await page.goto('https://playwright.dev/');
//el navegador tiene que abrir en esta url//
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
//para correrlo npx playwright test -g "has title" --headed
//espera q la pagina tenga el titulo playwright//

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
//obtiene de la pagina un link que dice get started y hace click//

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

