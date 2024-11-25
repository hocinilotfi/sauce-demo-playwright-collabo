// pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string| null> {
    return this.page.textContent(this.errorMessage);
  }

}
