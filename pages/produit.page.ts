import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('button#add-to-cart-sauce-labs-backpack');

  }


  async goto(url: string) {
    await this.page.goto(url); 
  }

  async addProductToCart() {
    await this.addToCartButton.click(); 
  }



}
