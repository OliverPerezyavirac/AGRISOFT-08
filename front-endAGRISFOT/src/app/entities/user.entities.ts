export class UsersModel {
    _id?: number;
    nombre: string;
    email: string;
    password: string;
    region: string;

    constructor(nombre:string,email:string,password:string,region:string){
        this.nombre=nombre;
        this.email=email;
        this.password=password;
        this.region=region;
    }
}
