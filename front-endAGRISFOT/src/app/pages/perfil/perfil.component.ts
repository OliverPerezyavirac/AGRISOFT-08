import { Perfil } from './../../entities/perfil.entities';
import { UsersServicesService } from './../../services/users-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  

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

}
