import { test as base, Page } from '@playwright/test';
import { PageBase } from '../pages/pageBase';

/**
 * Custom fixture for login tests
 * Global setup initializes browsers before all tests
 * This fixture handles:
 * - beforeEach: Navigate to login page before each test
 * - afterEach: Clean up cookies and storage
 */
export const test = base.extend<{ pages: PageBase }>({
  pages: async ({ page }, use) => {
    // Navigate to login page before each test
    await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });
    
    const pages = new PageBase(page);

    // Use the fixture
    await use(pages);

    // AFTER: Clean up - clear cookies and storage
    await page.context().clearCookies();
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  },
});

export { expect } from '@playwright/test';
