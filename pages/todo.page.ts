import { Page, Locator, expect  } from '@playwright/test';

export class ToDoPage {
    readonly page: Page;
    readonly newTodo: Locator;
    readonly newCheckbox: Locator; 


constructor(page: Page) {
    this.page = page;
    this.newTodo= page.getByPlaceholder('What needs to be done?')
    this.newCheckbox= page.getByRole('checkbox', {name: 'Toggle Todo'});
}

async open ():  Promise<void> {
    await this.page.goto('https://demo.playwright.dev/todomvc');

    
}
async addTask (texto: string) {
    await this.newTodo.fill(texto);
    await this.newTodo.press('Enter')
}
async completeTask (): Promise <void> {
    await this.newCheckbox.check();
}
}