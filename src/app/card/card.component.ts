 import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
 import { DataService } from 'app/services/data.service';
 import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DataService, CartService]
})

export class CardComponent implements OnInit{

  @Input() product;
  @Output() addToCart = new EventEmitter();

  constructor(private dataService: DataService, private cartService: CartService) { }

  toCart() {
    this.addToCart.emit();
  }

  ngOnInit() {

  }

}
