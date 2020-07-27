import {Component, OnInit} from '@angular/core';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  async ngOnInit(){
    try {
      await this.data.getProductsFromAPI();
    }catch (e) {
      throw new Error(e);
    }
  }
}
