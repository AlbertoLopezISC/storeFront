import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../../../interfaces/storeItems';
import { StoreService } from '../../../services/store/store.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../../components/alert/alert.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCartItem[] = [];

  constructor(private storeService: StoreService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.storeService.getCart().subscribe(cart => {
      this.shoppingCart = cart;
    });
  }

  removeItemFromCart(item: ShoppingCartItem, i: number): void {
    item.cantidad -= 1;
    if(item.cantidad === 0) {
      const i = this.shoppingCart.indexOf(item);
      this.shoppingCart.splice(i, 1);
    }
    this.storeService.updateItemToCart(item.articulo, 1, false, item.id).subscribe((response) => {
      console.log(response);
    });
  }

  addItemFromCart(item: ShoppingCartItem): void {
    item.cantidad += 1;
    this.storeService.updateItemToCart(item.articulo, 1, true, item.id).subscribe((response) => {
      console.log(response);
    });
  }

  clearCart(): void {
    this.storeService.deleteShoppingCart().subscribe((response) => {
      console.log(response);
      this.shoppingCart = [];
    });
  }

  buyShoppingCart(): void {
    this.dialog.open(AlertComponent, {
      data: {
        icon: "warning",
        title: 'Confirmar compra',
        message: '¿Está seguro que desea realizar la compra?',
        showButtonCancel: true
      }
    }).afterClosed().subscribe((result) => {
      if (result.status === 'confirm') {
        this.storeService.buyShoppingCart().subscribe({
          next: (response) => {
            this.shoppingCart = [];
              this.dialog.open(AlertComponent, {
                data: {
                  icon: "success",
                  title: 'Compra realizada',
                  message: 'La compra se realizó correctamente',
                }
              });
            
          },
          error: (error) => {
            console.log(error);
            this.dialog.open(AlertComponent, {
              data: {
                icon: "error",
                title: 'Compra no realizada',
                message: error.error.message || 'Ocurrió un error al realizar la compra'
              }
            });
          }
        });
      }
    });
  }

  totalBill(): number {
    return this.shoppingCart.reduce((count: number, item: ShoppingCartItem) => {
      return count + (item.articulo.precio * item.cantidad);
    }, 0);
  }
}
