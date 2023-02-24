import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart : Array<IDishes> = [];

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
}
