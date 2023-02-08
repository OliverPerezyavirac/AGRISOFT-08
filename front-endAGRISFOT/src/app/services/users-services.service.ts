import { Perfil } from './../entities/perfil.entities';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Product } from '../entities/product.entities';
import { UsersModel } from '../entities/user.entities';


@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
 
  
  constructor(private httpClient: HttpClient) { }

  /*RUTA PARA PETICIONES CON SERVIDOR LOCAL*/
  /*loclhost:3000/enlaces de ruta*/
  url: string = 'http://localhost:3000';

 
  // -----------------------------PRODUCTOS--------------------------------

  getProducts(): Observable<any>{
    return this.httpClient.get(`${this.url}/product`)
  }

  getProduct(id: string): Observable<any>{
    return this.httpClient.get(`${this.url}/product/${id}`)
  }

  createProduct(product: Product): Observable<any>{
    return this.httpClient.post(`${this.url}/product/create`, product);
  }

  deleteProduct(id: string){
    return this.httpClient.delete(`${this.url}/product/delete?productID=${id}`)
  }
  
  updateProduct(id: string, product: Product): Observable<any>{
    return this.httpClient.put(`${this.url}/product/update?productID=${id}`, product )

  }
  // -----------------------------FINPRODUCTOS-----------------------------

  // ---------------------------------INICIO PERFILES--------------------------
  
  getPerfiles(): Observable<any>{
    return this.httpClient.get(`${this.url}/perfil`)
  }

  getPerfil(id: string): Observable<any>{
    return this.httpClient.get(`${this.url}/perfil/${id}`)
  }

  createPerfil(perfil: Perfil): Observable<any>{
    return this.httpClient.post(`${this.url}/perfil/create`, perfil);
  }

  deletePerfil(id: string){
    return this.httpClient.delete(`${this.url}/perfil/delete?perfilID=${id}`)
  }
  
  updatePerfil(id: string, perfil: Perfil): Observable<any>{
    return this.httpClient.put(`${this.url}/perfil/update?perfilID=${id}`, perfil )
  }
// ------------------------------FIN PERFILES----------------------------------

// ---------------------------INICIO RUTA USUARIOS-----------------------------

  getUsuarios(): Observable<any>{
    return this.httpClient.get<UsersModel[]>(`${this.url}/usuario`)
  }

  getUsuario(id: string): Observable<any>{
    return this.httpClient.get(`${this.url}/usuario/${id}`)
  }

  createUsuario(usuario: UsersModel): Observable<any>{
    return this.httpClient.post(`${this.url}/usuario/create`, usuario);
  }

  deleteUsuario(id: string): Observable<any>{
    return this.httpClient.delete(`${this.url}/usuario/delete?usuarioID=${id}`)
  } 

  updateUsers(id: string, userEdit: UsersModel):Observable<any> {
    return this.httpClient.put(`${this.url}/usuario/update?usarioID=${id}`, userEdit );
  }

  // ---------------------------FIN RUTA USUARIOS-----------------------------


}

