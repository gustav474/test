import { Component, OnInit} from '@angular/core';
import { CartService } from 'app/services/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  productsInCart: number;
  subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    //Начальное состояние корзины
    this.productsInCart = 0;

    this.subscription = this.cartService.getCartProducts().subscribe(
      item => {this.productsInCart = item; },
      err => {console.log(err); },
      () => {console.log('Complete'); }
    );
  }

}
