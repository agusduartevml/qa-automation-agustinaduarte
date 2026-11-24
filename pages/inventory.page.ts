import { Page, Locator, expect} from '@playwright/test';
export class InventoryPage {
    readonly page: Page;
    readonly newHeader: Locator;
    readonly newItem: Locator;
    readonly newAdd: Locator; 
    readonly newCart: Locator; 

    constructor (page: Page) {
        this.page= page;
        this.newHeader = page.getByText('Products')
        this.newItem= page.getByText('Sauce Labs Backpack')
        this.newAdd= page.getByRole('button', {name: 'Add to Cart'});
        this.newCart= page.getByRole('button', {name: 'Cart, 1 items'});
    } 
  

async clickButton (): Promise <void> {
    await this.newAdd.first().click();
    }

async checkCart (): Promise <void> {
   await this.newCart.click();
}
}