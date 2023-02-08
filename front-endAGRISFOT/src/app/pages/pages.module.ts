import { ProductListComponent } from './product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { PerfilFormComponent } from './../admin/perfil-form/perfil-form.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaticModule } from './../static/static.module';
import { RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PestReportComponent } from './pest-report/pest-report.component';



@NgModule({
    declarations: [
         PestReportComponent,
        ReportComponent,
        DashboardComponent,
        PerfilComponent,
        PerfilFormComponent,
        ProductListComponent
        
    ],
    exports: [
         PestReportComponent,
        ReportComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        StaticModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PagesModule { }
