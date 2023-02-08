import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/entities/perfil.entities';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent implements OnInit {

  constructor(private _perfilService: UsersServicesService) { }

  perfils: Perfil[] = [];

  ngOnInit(): void {
    this.getPerfiles();
  }

  getPerfiles(): void {
    this._perfilService.getPerfiles()
      .subscribe(
        res => this.perfils = res,
        err => console.log(err)
      )
  }

  eliminarPerfil(id: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "El perfil será eliminado permanentemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.value) {
        this._perfilService.deletePerfil(id).subscribe(data => {
          this.getPerfiles();
          Swal.fire(
            'Eliminado!',
            'El perfil ha sido eliminado.',
            'success'
          );
        }, error => {
          console.log(error);
        });
      }
    });
  }


}
