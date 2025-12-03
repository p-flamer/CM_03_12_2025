// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Testowy Sklep – Strona główna/);
});

test('login as admin', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('login-username').fill(process.env.USER_NAME);
  await page.getByTestId('login-password').fill(process.env.USER_PASSWORD);

  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('welcome-msg')).toBeVisible();
  await expect(page.getByTestId('welcome-msg')).toContainText(`Witaj: ${process.env.USER_NAME}`);

});
