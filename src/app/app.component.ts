import { Component } from '@angular/core';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService]
})

export class AppComponent {

  constructor(){}
}
