import { Page, Locator} from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly newUser: Locator;
    readonly newPass: Locator; 
    readonly newLog: Locator; 

    constructor (page: Page) {
        this.page= page;
        this.newUser= page.getByPlaceholder('Username');
        this.newPass= page.getByPlaceholder('Password');
        this.newLog= page.getByRole('button', {name: 'Login'})
    }
    async open ():  Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
}
async addText (usuario: string, contraseña: string)  {
    await this.newUser.fill(usuario);
    await this.newPass.fill(contraseña);
    await this.newLog.click();
    }
}