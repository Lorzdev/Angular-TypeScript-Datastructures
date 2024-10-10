import { Component } from '@angular/core';
import {ProductService} from "../../services/product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productName: string = '';
  productPrice: number | null = null;
  searchTerm: string = '';
  productList: { name: string; price: number }[] = [];
  filteredProductList: { name: string; price: number }[] = [];

  constructor(private productService: ProductService) {
    this.productList = this.productService.getProducts();
    this.filteredProductList = [...this.productList];
  }

  addProduct() {
    if (this.productName.trim() && this.productPrice !== null && this.productPrice > 0) {
      const newProduct = { name: this.productName.trim(), price: this.productPrice };
      this.productService.addProduct(newProduct);
      this.updateProductList();
      this.productName = '';
      this.productPrice = null;
    } else {
      console.log('Please fill out all fields correctly.');
    }
  }

  removeProduct(product: { name: string; price: number }) {
    this.productService.removeProduct(product);
    this.updateProductList();
  }

  clearAll() {
    this.productService.clearAllProducts();
    this.updateProductList();
  }

  searchProducts() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredProductList = this.productList.filter(product =>
      product.name.toLowerCase().includes(searchLower)
    );
  }

  updateProductList() {
    this.productList = this.productService.getProducts();
    this.searchProducts();
  }
}
