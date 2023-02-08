import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  //*Rutas hijas
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NotFoundRoutingModule { }
