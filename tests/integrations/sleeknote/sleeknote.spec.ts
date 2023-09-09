import { test, expect } from '@playwright/test';

test('Sleeknote', async ({ page }) => {
  await page.goto('/tests/integrations/sleeknote/');

  const element = page.locator('iframe');
  await element.waitFor({ state: 'hidden' });

  expect(element).toBeTruthy();
});
