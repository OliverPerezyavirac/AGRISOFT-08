import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';
import { UsersModel } from 'src/app/entities/user.entities';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  edit = false;
  userList:UsersModel [] = [];

  constructor(private _usuarioService: UsersServicesService,private router: Router,) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.userList = data;
    }, error => {
      console.log(error);
    })
  }


  eliminarUsuarios(id: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el usuario?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._usuarioService.deleteUsuario(id).subscribe(data => {
          this.obtenerUsuarios();
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          );
        }, error => {
          console.log(error)
        });
      } else {
        this.router.navigate(['/user-list']);
      }
    });
  }

  editarUsuario(userList:UsersModel, id:any){
    const userEdit = new UsersModel(userList.nombre, userList.email, userList.password, userList.region); 
    Swal.fire({
    title: 'No puedes editar la información de este usuario',
    icon: 'warning',
    cancelButtonColor: '#d33',
    }).then((result) => {
    if (result.value) {
    this._usuarioService.updateUsers(id, userEdit).subscribe(data => {
    Swal.fire(
    'Editado!',
    'El usuario ha sido editado.',
    'success'
    );
    this.obtenerUsuarios();
    });
    }
    });
    }
    

    actualizarUsuario(usuario: UsersModel, id: any) {
      this._usuarioService.updateUsers(id, usuario).subscribe(data => {
        console.log(data);
        // Mostrar mensaje de éxito al usuario
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario actualizado con éxito',
          showConfirmButton: false,
          timer: 1500
        });
      }, error => {
        // Mostrar mensaje de error al usuario
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al actualizar el usuario',
          showConfirmButton: false,
          timer: 1500
        });
      });
    }

}
