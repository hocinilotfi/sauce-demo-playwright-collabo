// CartPage.ts
import { Page } from 'playwright';

export default class CartPage {
  page: Page;
  
  // Sélecteurs
  cartItems = '.cart-item'; // Sélecteur pour un article dans le panier
  itemName = '.cart-item .item-name'; // Sélecteur pour le nom de l'article
  itemQuantity = '.cart-item .item-quantity'; // Sélecteur pour la quantité d'article
  itemPrice = '.cart-item .item-price'; // Sélecteur pour le prix de l'article
  removeButton = '.cart-item .remove-button'; // Sélecteur pour le bouton "supprimer"
  totalPrice = '.cart-total .total-price'; // Sélecteur pour le prix total
  checkoutButton = '#checkout-button'; // Sélecteur pour le bouton de passage à la caisse

  constructor(page: Page) {
    this.page = page; // Instance de la page Playwright
  }

  // Naviguer vers la page du panier
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url); // Aller à la page du panier
  }

  


  // Supprimer un article du panier
  async removeItem(index: number): Promise<void> {
    const removeButtons = await this.page.$$(this.removeButton); // Récupérer tous les boutons "supprimer"
    await removeButtons[index].click(); // Cliquer sur le bouton "supprimer" de l'article à l'index donné
  }



}
