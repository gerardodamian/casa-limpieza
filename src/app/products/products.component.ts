import { IProducts } from "./../models/product.model";
import { Component, OnInit } from '@angular/core';

import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList : IProducts[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data : IProducts[]) => {
      this.productList = data;
    })
  }

}
