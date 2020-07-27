import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../services/data.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {}

  addToBasket(){
    console.log("add to basket")
  }

}
