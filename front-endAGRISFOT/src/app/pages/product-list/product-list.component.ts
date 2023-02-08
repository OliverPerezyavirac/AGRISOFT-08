import { Product } from 'src/app/entities/product.entities';
import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService: UsersServicesService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

}
