import { test, expect } from '@playwright/test';
import { ToDoPage } from '../pages/todo.page';

test('tarea completa', async ({ page }) => { 
  const todoPage = new ToDoPage(page);
  await todoPage.open();
 await expect(page).toHaveTitle(/TodoMVC/); 
  await todoPage.addTask('clase 3')
  await expect(todoPage.newTodo).toBeVisible();
    await todoPage.completeTask();
  await expect(todoPage.newCheckbox).toBeChecked();
});

