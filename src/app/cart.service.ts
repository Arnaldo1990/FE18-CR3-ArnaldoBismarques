import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart : Array<IDishes> = [];
price: number = 0;

  constructor() { }

  addToCart(dish:IDishes) {
  this.cart.push(dish);

  }

  getCart() {
    return this.cart;

  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getPrice() {
    this.price = 0
    for (let item of this.cart) {
      this.price += item.price
    }
    return this.price
  }
}
