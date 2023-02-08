export class Perfil {
    _id?: number;
    ingeniero: string;
    profesion: string;
    description: string;
    provincia: string;
    region: string;
    password: string;
    photo: string;
    createdAt?: Date;

    constructor(ingeniero: string, profesion:string, description: string, provincia:string, region:string, password:string, photo:string){
        this.ingeniero = ingeniero;
        this.profesion = profesion;
        this.description = description;
        this.provincia = provincia;
        this.region = region;
        this.password = password;
        this.photo = photo;
    }
}
