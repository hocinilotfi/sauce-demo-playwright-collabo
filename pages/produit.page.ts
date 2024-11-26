import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
}


  async addProductToCart() {
    await this.addToCartButton.click(); 
  }



}
