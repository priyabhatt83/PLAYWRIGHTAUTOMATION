import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';

/**
 * PageBase class - Central hub for all page objects
 * Use this class to access all page objects in your tests
 */
export class PageBase {
  private readonly page: Page;
  private loginPageInstance: LoginPage | null = null;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Get LoginPage instance
   * Lazy initialization - creates instance only when first accessed
   */
  get loginPage(): LoginPage {
    if (!this.loginPageInstance) {
      this.loginPageInstance = new LoginPage(this.page);
    }
    return this.loginPageInstance;
  }

  // Add more page getters here as you create new page objects
  // Example:
  // get productPage(): ProductPage {
  //   if (!this.productPageInstance) {
  //     this.productPageInstance = new ProductPage(this.page);
  //   }
  //   return this.productPageInstance;
  // }

  /**
   * Get the underlying Playwright Page object
   */
  getPage(): Page {
    return this.page;
  }
}
