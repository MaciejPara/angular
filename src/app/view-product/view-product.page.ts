import { Component, OnInit } from '@angular/core';
import {DataService, Product} from "../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  public product: Product;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.data.getProductById(parseInt(id, 10));
  }
}
