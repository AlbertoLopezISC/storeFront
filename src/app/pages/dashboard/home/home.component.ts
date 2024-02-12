import { Component } from '@angular/core';
import { Cart, ShoppingCartItem, StoreItem } from '../../../interfaces/storeItems';
import { StoreService } from '../../../services/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  arrayItems: StoreItem[] = [];
  totalarticles: number = 0;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getAllArticles().subscribe((response) => {
      this.arrayItems = response.results;
      this.totalarticles = response.count;
    });
  }

  addItemToCart(item: ShoppingCartItem): void {
    this.storeService.updateItemToCart(item.articulo, 1, true).subscribe((response) => {
      console.log(response);
    });
  }
}
