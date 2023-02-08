import { ActivatedRoute } from '@angular/router';
// import { UpdateUsuarioDto } from './../../entities/user.entities';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/entities/user.entities';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id: string | null;
  titulo: string = "Registarse";
  myRegister: FormGroup;
  password ="";
  nombre="";
  email="";
  region="";

  

  constructor(
    private _usuarioService: UsersServicesService, 
    public fb: FormBuilder,
    private router: Router, 
    private aRouter:ActivatedRoute
    ) {
    this.myRegister = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      region: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');;
  }
  users: UsersModel[] = [];


  ngOnInit(): void {
    // this.getUsers();
    // this.getUser();
     //this.createUsuario();
    // this.updateUser();
    // this.deleteUser();
    this.esEditar();
  }
  saveData() {
    if (this.myRegister.valid && this.password.length >= 8) {
      this.createUsuario(this.users);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        color: '#d33',
        title: 'Por favor llene todos los campos correctamente',
        showConfirmButton: false,
        width: '500px',
        timer: 1510
      });
    }
  }

  createUsuario(user:UsersModel[]) {
    const USUARIO: UsersModel = {
      nombre: this.myRegister.get('nombre')?.value,
      email: this.myRegister.get('email')?.value,
      region: this.myRegister.get('region')?.value,
      password: this.myRegister.get('password')?.value,
    };

    if (this.myRegister.valid) {
      this._usuarioService.createUsuario(USUARIO)
        .subscribe(() => {
            console.log("creado");
            this.router.navigate(['/login']);
        });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        color: '#d33',
        title: 'Por favor llene todos los campos correctamente',
        showConfirmButton: false,
        width: '500px',
        timer: 1510
      });
    }
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar registro';
      this._usuarioService.getUsuario(this.id).subscribe(data => {
        this.myRegister.setValue({
          nombre: data.nombre,
          email: data.email,
          region: data.region,
          password: data.password
        })
      })
    }
  }



  }






