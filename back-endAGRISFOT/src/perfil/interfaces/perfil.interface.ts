import { Document } from "mongoose";

export interface Perfil extends Document {
    readonly ingeniero: string;
    readonly profesion: string;
    readonly description: string;
    readonly provincia: string;
    readonly region: string;
    readonly password: string;
    readonly photo: string;
    readonly createdAt: Date;
}