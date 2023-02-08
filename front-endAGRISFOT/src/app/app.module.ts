import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { PagesModule } from './pages/pages.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { StaticComponent } from './static/static.component';
import { StaticModule } from './static/static.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './appRouting.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    PagesComponent,
    NotFoundComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    PagesModule,
    BrowserModule,
    RouterModule,
    StaticModule,
    UserModule,
    RoutingModule,
    HttpClientModule,
    AdminRoutingModule,
    AdminModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
