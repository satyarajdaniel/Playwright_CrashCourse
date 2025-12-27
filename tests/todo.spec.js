import { test, expect } from '@playwright/test';

test('@sanity test to-do', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Clear Power  Bill');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy Groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Complete Walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Take Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Complete Walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('Take Rest')).toBeVisible();
  await expect(page.locator('.todo-list li')).toHaveCount(3);
});