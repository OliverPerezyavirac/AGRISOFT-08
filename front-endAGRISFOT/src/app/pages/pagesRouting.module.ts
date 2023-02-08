import { BrowserModule } from '@angular/platform-browser';
import { PestReportComponent } from './pest-report/pest-report.component';
import { PerfilFormComponent } from './../admin/perfil-form/perfil-form.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StaticModule } from '../static/static.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
        ]
    },
    
    { path: 'dashboard', component: DashboardComponent },

    // rutas  perfiles
    { path: 'perfiles', component: PerfilComponent},
    // rutas productos
    { path: 'product-list', component: ProductListComponent},
    
    // rutas  plagas
    { path: 'reportar', component: ReportComponent},
    { path: 'reportes', component: PestReportComponent },
    { path: 'plaga/create', component: ReportComponent},
    { path: 'plaga/edit/:id', component: ReportComponent}
    //rutas fin plagas

]

@NgModule({
    declarations: [
        
        
    ],
    imports: [
        FormsModule,
        CommonModule, 
        StaticModule, 
        RouterModule.forChild(routes)
    ],
})

export class PagesRoutingModule { };