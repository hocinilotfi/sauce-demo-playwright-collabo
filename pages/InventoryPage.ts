import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    private page: Page;

    private inventoryItems = '.inventory_item';
    private addToCartButton = '.btn_inventory';
    private cartBadge = '.shopping_cart_badge';

    constructor(page: Page) {
        this.page = page;
    }

    async addItemToCart(index: number) {
        const items = await this.page.$$(this.inventoryItems);
        const addToCartButton = await items[index].$(this.addToCartButton);

        if (addToCartButton) {
            await addToCartButton.click();
        } else {
            throw new Error("erro");
        }
    }


    async getCartItemCount(): Promise<number> {
        const badge = await this.page.locator(this.cartBadge);
        const count = await badge.textContent();
        return count ? parseInt(count) : 0;
    }


}
