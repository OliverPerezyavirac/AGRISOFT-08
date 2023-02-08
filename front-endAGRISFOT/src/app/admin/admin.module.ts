import { RouterModule } from '@angular/router';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ListproductsAdminComponent } from './listproducts-admin/listproducts-admin.component';



@NgModule({
  declarations: [
    PerfilListComponent,
    UserListComponent,
    ProductFormComponent,
    ListproductsAdminComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
