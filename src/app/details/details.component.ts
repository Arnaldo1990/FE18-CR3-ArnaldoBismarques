import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { dishes } from '../dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
dishes: IDishes = {} as IDishes;
id: number = 0;

constructor (private route: ActivatedRoute) {

}

ngOnInit(): void {
  
  this.route.params.subscribe((params: Params) => {
    this.id = +params ["id"];
    this.dishes = dishes[this.id];
  });

}
}
