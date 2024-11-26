// tests/inventory.spec.ts
import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/produit.page';

test.describe('Inventory Tests', () => {
    test('Add an item to the cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');
        
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        const produit = new ProductPage(page);
        await expect(produit.addToCartButton).toHaveText('Add to cart');
        await  produit.addProductToCart();
        await  produit.navigate();
      
    });


});
