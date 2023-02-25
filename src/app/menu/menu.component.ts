import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
dishes: Array<IDishes> = dishes;

constructor(private cs: CartService) {

}
addToCart(dishes:IDishes){alert("Added to your cart")
this.cs.addToCart(dishes);
}
}
