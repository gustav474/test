import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {

  productID: number;
  product: any[];

  AddToCart(_product) {
    this.cartService.addCartProducts(_product);
  }

  ViewImage() {
    console.log('view');
  }

  getProduct(_id) {
    this.dataService.getSingleProduct(_id)
      .subscribe(
        res => {
          this.product = res;
        },
        err => { alert(err); },
        () => {
          if (this.product.length != 0) {
            console.log('Приняли данные по продукту: ');
            console.log(this.product);
          } else {
            console.log('Нет совпадений по продукту');
            console.log('Ошибка поиска в DB по продукту');
          }
        }
      );
  }

  constructor(private cartService: CartService, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .params
      .subscribe( params => {
        this.productID = params['id'];
        this.getProduct(params['id']);
      });
  }

}
