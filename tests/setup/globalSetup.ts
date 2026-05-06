import { chromium } from '@playwright/test';

/**
 * Global setup - runs once before all tests
 * Initializes the browser context and navigates to login page
 */
async function globalSetup() {
  console.log('🔧 Global Setup: Starting browser initialization...');
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to login page to ensure it's accessible
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });
  console.log('✅ Global Setup: Successfully navigated to login page');

  await context.close();
  await browser.close();
}

export default globalSetup;
