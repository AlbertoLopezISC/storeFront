import { Component, OnInit } from '@angular/core';
import { Cart, ItemCart } from '../../../interfaces/storeItems';
import { StoreService } from '../../../services/store/store.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit{
  shoppingCart: Cart = {};
  totalItems: number = 0;

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.storeService.getCart().subscribe(cart => {
      this.shoppingCart = cart;
      this.totalItems = Object.keys(this.shoppingCart).length;
    });
  }

  removeItemFromCart(itemId: string): void {
    if(this.shoppingCart[itemId].quantity > 1) {
      this.shoppingCart[itemId].quantity--;
    } else {
      delete this.shoppingCart[itemId];
    }
  }

  addItemFromCart(itemId: string): void {
    this.shoppingCart[itemId].quantity++;
  }

  clearCart(): void {
    this.shoppingCart = {};
    this.totalItems = 0;
  }

  totalBill(): number {
    return Object.values(this.shoppingCart).reduce((count: number, item: ItemCart) => {
      return count + (item.item.price * item.quantity);
    }, 0);
  }
}
