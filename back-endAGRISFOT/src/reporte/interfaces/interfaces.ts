import { Document } from "mongoose";

export interface Plaga extends Document {
    readonly plaga: string;
    readonly description: string;
    readonly imageURL: string;
    readonly provincia: string;
    readonly createdAt: Date;
}