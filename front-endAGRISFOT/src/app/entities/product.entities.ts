export class Product {
    _id?: number;
    name: string;
    description: string;
    price: number;
    imageURL: string;
    createdAt?: Date;

    constructor(name: string, description: string, price:number, imageURL: string){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;

    }
}