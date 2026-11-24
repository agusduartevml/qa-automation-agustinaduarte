import { Page, Locator  } from '@playwright/test';
export class CheckOutPage {
    readonly page: Page;
    readonly newName: Locator;
    readonly newLast: Locator; 
    readonly newZip: Locator; 
    readonly newContinue: Locator; 
    readonly newFinish: Locator; 


constructor (page: Page) {
    this.page = page;
    this.newName = page.getByPlaceholder('First Name')
    this.newLast= page.getByPlaceholder('Last Name')
    this.newZip = page.getByPlaceholder('Zip/Postal Code')
    this.newContinue=  page.getByRole('button', {name: 'Continue'});
    this.newFinish = page.getByRole('button', {name: 'Finish'});
}
async addData (Firstname: string, Lastname: string, Zip: string)  {
    await this.newName.fill(Firstname);
    await this.newLast.fill(Lastname);
    await this.newZip.fill(Zip);
    await this.newContinue.click();
}

async finishCheckout (): Promise <void> {
   await this.newFinish.click();
}
}