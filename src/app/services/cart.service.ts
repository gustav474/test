import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {checkAndUpdateBinding} from "@angular/core/src/view/util";
import {reject} from "q";
;

@Injectable()
export class CartService {

  //Source
  private toNav = new Subject<any>();
  private toCart = new Subject<any>();

  //Stream
  toNav$ = this.toNav.asObservable();
  toCart$ = this.toCart.asObservable();

  cart: any[] = [];
  totalprice = 0;

  CountTotalPrice () {
    let total = 0;
    this.cart.forEach((value, index, array) => {
      total += value.price * value.amount;
    });
    this.totalprice = total;
  }

  //Добавление товара и отправка колличества элементов в корзине по подписке
  PushAndEmmit(item) {
    let promise = new Promise( (resolve, reject) => {
      this.cart.push(item);
      resolve();
    } );

    promise
      .then( () => {
        this.toNav.next(this.cart.length);
      } )
  }

  //Увеличение и уменьшение позиций уже добавленных элементов
  AddAmount(i) {
    this.cart[i].amount += 1;
    this.CountTotalPrice();
    this.toCart.next(this.totalprice);
  }

  DeleteAmount(i) {
    this.cart[i].amount -= 1;
    this.CountTotalPrice();
    //Удаление товара из корзины при его колличесве = 0
    if (this.cart[i].amount == 0) {
      this.deleteFromCart(i);
    }
    this.toCart.next(this.totalprice);
  }

  getTotalPrice(): Observable<any> {
    return this.toCart$;
  }

  //Добавление товара в корзину из карточки товара
  AddProduct(_product) {
    let findit = false;
    let findindex;

    if (this.cart.length == 0) {
      console.log('Добавили в пустой массив: ' + _product.name);
      this.PushAndEmmit(_product);
      this.CountTotalPrice();
    } else {

      let promise = new Promise((resolve, reject) =>
        this.cart.forEach((value, index, array) => {
          if (_product.name == value.name) {
            resolve([value, index]);
          } else if (index == array.length-1) {
            reject();
          }
        } )
      );

      promise
        .then( (resolve) => {
          console.log('Колличество: ' + this.cart[resolve[1]].amount);
          this.cart[resolve[1]].amount += 1;
          console.log('Увеличили до: ' + this.cart[resolve[1]].amount);
          this.CountTotalPrice();
        } )
        .catch( () => {
          console.log('Нет совпадения');
          this.PushAndEmmit(_product);
          this.CountTotalPrice();
        } );

    }
  };

  //Добавляем данные в корзину
  addCartProducts(_product: any) {

    //Добавляем товар в корзину
    if (_product.amount) {
    } else {
      _product.amount = 1;//Добавляем поле "amount", ЕСЛИ ЕГО НЕТ, в котором будет колличество одинаковых продуктов в корзине
    }

    this.AddProduct( _product);
    // this.toNav.next(this.cart.length);

    console.log(this.cart);

  }

  //Отправляем поток с колличеством элементов в корзине
  getCartProducts(): Observable<any> {
    return this.toNav$;
  }

  //Удаляем данные из корзины
  deleteFromCart(i) {
    console.log('Удалили через сервис');
    //Уменьшаем сумму заказа
    console.log(this.cart[i].price);
    this.cart.splice(i, 1);

    this.CountTotalPrice();
    this.toNav.next(this.cart.length);
  }

  constructor() {
  }

}
