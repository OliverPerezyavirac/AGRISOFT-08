import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersServicesService } from 'src/app/services/users-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from './../../entities/perfil.entities';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {

  perfilForm: FormGroup
  titulo: string = "Crear perfil";
  id: string | null;
  constructor(
    private form: FormBuilder,
    private router: Router,
    private _perfilService: UsersServicesService,
    private aRouter: ActivatedRoute
  ) { 
    this.perfilForm = this.form.group({
      ingeniero: ['', Validators.required],
      profesion: ['', Validators.required],
      description: ['', Validators.required],
      provincia: ['', Validators.required],
      region: ['', Validators.required],
      password: ['', Validators.required],
      photo: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();
  }

  agregarPerfil(){

    const PERFIL: Perfil = {
      ingeniero: this.perfilForm.get('ingeniero')?.value,
      profesion: this.perfilForm.get('profesion')?.value,
      description: this.perfilForm.get('description')?.value,
      provincia: this.perfilForm.get('provincia')?.value,
      region: this.perfilForm.get('region')?.value,
      password: this.perfilForm.get('password')?.value,
      photo: this.perfilForm.get('photo')?.value,
    }
    if(this.id !== null){
      this._perfilService.updatePerfil(this.id, PERFIL).subscribe(data => {
        this.router.navigate(['ag-admin'])
      }, error => {
        console.log(error);
        this.perfilForm.reset();
      })
    }else{console.log(PERFIL);
    this._perfilService.createPerfil(PERFIL).subscribe(data => {
      this.router.navigate(['ag-admin']);
    }, error => {
      console.log(error);
      this.perfilForm.reset();
    })}
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Personal';
      this._perfilService.getPerfil(this.id).subscribe(data => {
        this.perfilForm.setValue({
          ingeniero: data.ingeniero,
          profesion: data.profesion,
          description: data.description,
          provincia: data.provincia,
          region: data.region,
          password: data.password,
          photo: data.photo,
        });
        Swal.fire({
          title: 'Estas seguro que quieres editar este perfil?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Accept',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: 'Procede a Editar!',
              text: 'Verifica correctamente cada campo a editar',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          }else {
            this.router.navigate(['/perfil-list']);
          }
        });
      });
    }
  }


}

