import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class UserModule { }
