import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => { 
  await page.goto('https://demo.playwright.dev/todomvc/');

  await expect(page).toHaveTitle(/TodoMVC/);
});

test('agregar tarea', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');

 await page.getByPlaceholder('What needs to be done?').fill('clase 3');
 await page.getByPlaceholder('What needs to be done?').press('Enter');
 await expect (page.getByText('clase 3')).toBeVisible();
});

test ('marcar tarea', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
     await page.getByPlaceholder('What needs to be done?').fill('clase 3');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect (page.getByText('clase 3')).toBeVisible();
  await page.getByRole('checkbox', {name: 'Toggle Todo'}).click();
  await expect (page.getByText('checkbox', {name: 'Toggle Todo'})).toBeChecked();
});
