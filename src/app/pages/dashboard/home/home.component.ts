import { Component } from '@angular/core';
import { Cart, StoreItem } from '../../../interfaces/storeItems';
import { StoreService } from '../../../services/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  arrayItems: StoreItem[] = [];
  cart: Cart = {};

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getItems().subscribe((items) => {
      this.arrayItems = items.data;
    });
    this.storeService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  addItemToCart(item: StoreItem): void {
    if(this.cart[item.id]) {
      this.cart[item.id].quantity++;
    } else {
      this.cart[item.id] = {
        item,
        quantity: 1
      };
    }
    this.storeService.addItemToCart(this.cart);
  }
}
