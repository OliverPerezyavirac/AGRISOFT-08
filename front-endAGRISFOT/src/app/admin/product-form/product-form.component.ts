import { Product } from 'src/app/entities/product.entities';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup
  titulo: string = "Crear producto";
  id: string | null;
  constructor(
    private form: FormBuilder,
    private router: Router,
    private _productServices: UsersServicesService,
    private aRouter: ActivatedRoute
  ) { 
    this.productForm = this.form.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      imageURL: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.editarProduct();
  }

  agregarProduct(){

    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      price: this.productForm.get('price')?.value,
      imageURL: this.productForm.get('imageURL')?.value,
    }
    if(this.id !== null){
      this._productServices.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.router.navigate(['ag-admin'])
      }, error => {
        console.log(error);
        this.productForm.reset();
      })
    }else{console.log(PRODUCT);
    this._productServices.createProduct(PRODUCT).subscribe(data => {
      this.router.navigate(['ag-admin']);
    }, error => {
      console.log(error);
      this.productForm.reset();
    })}
  }

  editarProduct(){
    if(this.id !== null){
      this.titulo = 'Editar producto';
      this._productServices.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          name: data.name,
          description: data.description,
          price: data.price,
          imageURL: data.imageURL
        })
      })
    }
  }

}
