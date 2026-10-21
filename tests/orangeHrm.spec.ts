import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  );
  // Assertions for login page elements
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  // Assertions for dashboard page elements after login
  await expect(page).toHaveURL(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
  );
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByTitle('Help')).toBeVisible();
});
