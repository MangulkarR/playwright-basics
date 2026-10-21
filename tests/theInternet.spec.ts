import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(
    page.getByRole('heading', { name: 'Welcome to the-internet' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Available Examples' }),
  ).toBeVisible();
  await expect(page.getByText('Welcome to the-internet')).toBeVisible();
  await expect(page.getByText('Available Examples')).toBeVisible();
  await expect(page.getByAltText('Fork me on GitHub')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
  await expect(page.locator('h2')).toContainText('Available Examples');
  await page.getByRole('link', { name: 'Forgot Password' }).click();
  await expect(page).toHaveURL(
    'https://the-internet.herokuapp.com/forgot_password',
  );
  await expect(
    page.getByRole('heading', { name: 'Forgot Password' }),
  ).toBeVisible();
  await page.getByLabel('E-mail').fill('test@examplecom');
  await page.getByRole('button', { name: 'Retrieve password' }).click();
  await expect
    .soft(page.getByText("Your e-mail's been sent!"))
    .not.toBeVisible();
  await expect.soft(page.getByLabel('E-mail')).toBeVisible();
});
