import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user/userRouting.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from "./pages/pagesRouting.module";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    //*Rutas hijas
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'ag-admin', component: AdminComponent},
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        NotFoundRoutingModule,
        PagesRoutingModule,
        AdminRoutingModule,
        UserRoutingModule],
    exports: [RouterModule]
})

export class RoutingModule {};