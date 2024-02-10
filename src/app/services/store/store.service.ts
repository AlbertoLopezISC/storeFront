import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart, StoreItem, StoreItemsResponse } from '../../interfaces/storeItems';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url = environment.apiUrl;
  cart: Cart = {};

  constructor(private http: HttpClient) { }

  getItems(): Observable<StoreItemsResponse> {
    return of(items);
  }

  getCart(): Observable<Cart> {
    return of(this.cart);
  }

  addItemToCart(cart: Cart ): void {
    this.cart = { ...cart };
  }
}

const items: StoreItemsResponse = {
  data: [{
    id: 1,
    name: 'Item 1',
    price: 100,
    description: 'Description 1',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 10
  }, {
    id: 2,
    name: 'Item 2',
    price: 200,
    description: 'Description 2',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 20
  }, {
    id: 3,
    name: 'Item 3',
    price: 300,
    description: 'Description 3',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 30
  }, {
    id: 4,
    name: 'Item 4',
    price: 400,
    description: 'Description 4',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 40
  }, {
    id: 5,
    name: 'Item 5',
    price: 500,
    description: 'Description 5',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 50
  }, {
    id: 6,
    name: 'Item 6',
    price: 600,
    description: 'Description 6',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 60
  }, {
    id: 7,
    name: 'Item 7',
    price: 700,
    description: 'Description 7',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 70
  }, {
    id: 8,
    name: 'Item 8',
    price: 800,
    description: 'Description 8',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 80
  }, {
    id: 9,
    name: 'Item 9',
    price: 900,
    description: 'Description 9',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 90
  }, {
    id: 10,
    name: 'Item 10',
    price: 1000,
    description: 'Description 10',
    imageUrl: 'https://via.placeholder.com/150',
    stock: 100
  }]
}
