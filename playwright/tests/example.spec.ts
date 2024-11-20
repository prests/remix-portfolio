import { expect } from '@playwright/test';

import { test } from 'playwright/playwright-base.fixture';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Shayne Preston/);
});
