import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CreateShoppingCartItem, ShoppingCartItem, StoreItem, StoreItemsResponse } from '../../interfaces/storeItems';
import { environment } from '../../../environments/environment.development';
import { DtoShoppingCartItem, DtoStoreItemsResponse } from './dtos';
import { Mapper } from './mapper';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<StoreItemsResponse> {
    return this.http.get<DtoStoreItemsResponse>(`${this.url}Articulo`)
    .pipe(map((dto: DtoStoreItemsResponse) => Mapper.dtoStoreItemsResponseToStoreItemsResponse(dto)));

  }

  getCart(): Observable<ShoppingCartItem[]> {
    return this.http.get<ShoppingCartItem[]>(`${this.url}ShoppingCart`)
    .pipe(map((dto: DtoShoppingCartItem[]) => Mapper.dtoShoppingCartResponseToShoppingCart(dto)));
  }

  updateItemToCart(item: StoreItem, quantity: number, agregarFlag: boolean, id?: number, ): Observable<ShoppingCartItem[]> {
    const body: CreateShoppingCartItem = {
      "id": id,
      "articuloId": item.id,
      "cantidad": quantity,
      "agregarFlag": agregarFlag
    }
    return this.http.post<ShoppingCartItem[]>(`${this.url}ShoppingCart`, body)
    .pipe(map((dto: DtoShoppingCartItem[]) => Mapper.dtoShoppingCartResponseToShoppingCart(dto)));
  }

  deleteShoppingCart(): Observable<ShoppingCartItem[]> {
    return this.http.delete<ShoppingCartItem[]>(`${this.url}ShoppingCart/clear-shopping-cart`);
  }

  buyShoppingCart(): Observable<any> {
    return this.http.post(`${this.url}ShoppingCart/buy-shopping-cart`, {});
  }
}

