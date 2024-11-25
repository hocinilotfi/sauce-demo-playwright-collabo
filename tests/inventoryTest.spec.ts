// tests/inventory.spec.ts
import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Inventory Tests', () => {
  test('Add an item to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await inventoryPage.addItemToCart(0); 
    const cartCount = await inventoryPage.getCartItemCount();
    expect(cartCount).toBe(1);
  });

  
});
