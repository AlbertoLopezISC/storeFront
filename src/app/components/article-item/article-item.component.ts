import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartItem } from '../../interfaces/storeItems';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss'
})
export class ArticleItemComponent {

  @Input() item!: ShoppingCartItem;
  @Output() addItemCartEmitter: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();
  @Output() removeItemCartEmitter: EventEmitter<ShoppingCartItem> = new EventEmitter<ShoppingCartItem>();


  addItemFromCart(item: ShoppingCartItem): void {
    this.addItemCartEmitter.emit(item);
  }
  removeItemFromCart(item: ShoppingCartItem): void {
    this.removeItemCartEmitter.emit(item);
  }
}
