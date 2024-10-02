import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  productName: string = '';
  productPrice: number | null = null;
  productList: { name: string; price: number }[] = [];

  addProduct() {
    if (this.productName.trim() && this.productPrice !== null && this.productPrice > 0) {
      const newProduct = {
        name: this.productName.trim(),
        price: this.productPrice
      };
      this.productList.push(newProduct);
      this.productName = '';
      this.productPrice = null;
    } else {
    }
  }

  removeProduct(product: { name: string; price: number }) {
    const index = this.productList.indexOf(product);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
  }
}
