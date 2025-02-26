// Archivo: src/app/components/product-list/product-list.component.ts
import { Component } from '@angular/core';
import { PRODUCTS } from './../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = PRODUCTS;
}