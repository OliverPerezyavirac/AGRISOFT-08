import { Schema } from "mongoose";

export const PlagaSchema = new Schema({
    plaga: String,
    description: String,
    imageURL: String,
    provincia: String,
    createdAt: { type: Date, default: Date.now }
});
