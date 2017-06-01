import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/services/cart.service';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsInCart: any[] = [];
  totalprice: number;
  subscription: Subscription;

  AddAmount(i) {
    this.cartService.AddAmount(i);
}

  DeleteAmount(i) {
    this.cartService.DeleteAmount(i);
  }

  Delete(i) {
    this.cartService.deleteFromCart(i);
    this.totalprice = this.cartService.totalprice;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log('CART INIT');
    this.subscription = this.cartService.getTotalPrice().subscribe(
      item => {this.totalprice = item; },
      err => {console.log(err); },
      () => {console.log('Complete'); }
    )
    this.itemsInCart = this.cartService.cart;
    this.totalprice = this.cartService.totalprice;
  }

}
