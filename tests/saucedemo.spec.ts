import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

import { CartPage } from '../pages/cart.page';
import { CheckOutPage } from '../pages/checkout.page';
test('compra completa', async ({ page }) => {
    const loginPage= new LoginPage(page);
    await loginPage.open();
    await loginPage.addText('standard_user', 'secret_sauce');
    
    const inventoryPage = new InventoryPage (page);
    await expect(inventoryPage.newHeader).toBeVisible(); 
      await inventoryPage.clickButton();
     await expect (inventoryPage.newItem).toBeVisible();
     await expect (inventoryPage.newCart).toContainText('1');
      await inventoryPage.checkCart(); 
    
    const cartPage = new CartPage (page);
    await expect (cartPage.newCheckout).toBeVisible();
    await cartPage.clickCheckout();

      const checkoutPage = new CheckOutPage (page);
      await checkoutPage.addData('Agustina', 'Duarte', '1064' );
      await checkoutPage.finishCheckout();
    await expect (page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();
}); 