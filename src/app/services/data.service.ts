import {Injectable} from '@angular/core';

const productsAPIPath = "http://localhost:3000/api/products";

export interface Product {
  name?: string;
  price?: string;
  description?: string;
  shortDescription?: string;
  img?: string;
  thumbNail?: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService{
  public products: Product[] = [];

  constructor() {}

  public getProductById(id: number): Product {
    return this.products[id];
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public async getProductsFromAPI(){
    try {
      const response = await fetch(productsAPIPath);
      this.products = await response.json() as Product[];
    }catch (e) {
      throw new Error(e);
    }
  }
}
