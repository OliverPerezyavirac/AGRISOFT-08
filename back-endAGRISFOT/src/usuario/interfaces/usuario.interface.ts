import { Document } from "mongoose";

export interface Usuario extends Document {
    readonly nombre: string;
    readonly email: string;
    readonly region: string;
    readonly password: string;
    readonly createdAt: Date;
}