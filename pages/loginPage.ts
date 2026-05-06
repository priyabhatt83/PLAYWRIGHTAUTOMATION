import  { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

    constructor(page :Page) { 
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });     
    }
     
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }               

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }   

    async isLoginSuccessful() {
        expect(this.page.url()).toBe('https://www.saucedemo.com/inventory.html');
    }

    async getErrorMessage() {
        return await this.page.textContent('[data-test="error"]');
    }
}