export class Plaga {
    _id?: number;
    plaga: string;
    description: string;
    imageURL: string;
    provincia: string;
    createdAt?: Date;

    constructor(plaga: string, description:string, imageURL:string, provincia:string){
        this.plaga = plaga;
        this.description = description;
        this.imageURL = imageURL;
        this.provincia = provincia;
    }
}