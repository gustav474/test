import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CardComponent } from './card/card.component';

import { DataService } from 'app/services/data.service';
import { CartService } from 'app/services/cart.service';

import { BdsmComponent } from './bdsm/bdsm.component';
import { MenuComponent } from './menu/menu.component';
import { VibratorsComponent } from './vibrators/vibrators.component';
import { ContentComponent } from './content/content.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';



const routes: Routes = [
  {path: '', redirectTo: 'content', pathMatch: 'full'},
  {path: 'content', component: ContentComponent},
  {path: 'content/:id', component: ProductPageComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: NotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    CardComponent,
    BdsmComponent,
    MenuComponent,
    VibratorsComponent,
    ContentComponent,
    DeliveryComponent,
    ProductPageComponent,
    CartComponent,
    PriceSliderComponent,
    ImgSliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
