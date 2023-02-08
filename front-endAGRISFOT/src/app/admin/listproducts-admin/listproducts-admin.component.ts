import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product.entities';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listproducts-admin',
  templateUrl: './listproducts-admin.component.html',
  styleUrls: ['./listproducts-admin.component.css']
})
export class ListproductsAdminComponent implements OnInit {

  constructor(private _productListService: UsersServicesService) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this._productListService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

  eliminarProduct(id: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás recuperar este producto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._productListService.deleteProduct(id).subscribe(data => {
          this.getProducts();
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado.',
            'success'
          )
        }, error => {
          console.log(error)
          Swal.fire(
            'Error!',
            'Ha ocurrido un error al eliminar el producto.',
            'error'
          )
        })
      }
    });
  }

}
