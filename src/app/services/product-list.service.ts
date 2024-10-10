import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productList: { name: string; price: number }[] = [
    { name: 'Laptop', price: 15000 },
    { name: 'Smartphone', price: 6000 },
    { name: 'Headphones', price: 200 },
    { name: 'Tablet', price: 2000 },
    { name: 'Smartwatch', price: 250 }
  ];

  getProducts() {
    return this.productList;
  }

  addProduct(product: { name: string; price: number }) {
    this.productList.push(product);
  }

  removeProduct(product: { name: string; price: number }) {
    const index = this.productList.indexOf(product);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
  }

  clearAllProducts() {
    this.productList = [];
  }
}
