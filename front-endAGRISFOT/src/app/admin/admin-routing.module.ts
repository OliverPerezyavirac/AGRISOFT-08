import { RegisterComponent } from './../user/register/register.component';
import { ListproductsAdminComponent } from './listproducts-admin/listproducts-admin.component';
import { ProductListComponent } from './../pages/product-list/product-list.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './../pages/pagesRouting.module';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ProductFormComponent } from './product-form/product-form.component';


  const routes: Routes = [
    
    
    
    { path: 'perfil-form', component: PerfilFormComponent},
    { path: 'perfil-list', component: PerfilListComponent},
    { path: 'crear-perfil', component: PerfilFormComponent},
    { path: 'editar-perfil/:id', component: PerfilFormComponent},
    // -------------------producto---------------------
    { path: 'product-form', component: ProductFormComponent },
    { path: 'product-listone', component: ListproductsAdminComponent },
    { path: 'product-create', component: ProductFormComponent },
    { path: 'edit-product/:id', component: ProductFormComponent },
    // -------------------finproducto..................
    { path: 'user-form', component: RegisterComponent},
    { path: 'user-list', component: UserListComponent},
    { path: 'user-create', component: RegisterComponent},
    { path: 'edit-user/:id', component: RegisterComponent}
  ]

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule
    , RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
