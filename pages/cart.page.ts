import { Page, Locator, expect} from '@playwright/test';
export class CartPage {
    readonly page: Page;
    readonly newItemAdd: Locator;
    readonly newCheckout: Locator; 

     constructor (page: Page) {
        this.page= page;
        this.newItemAdd= page.getByText('Sauce Labs Backpack')
        this.newCheckout= page.getByRole('button', { name: 'Checkout' });
     }
   
async clickCheckout (): Promise <void> {
    await this.newCheckout.click();
}
     }
    
