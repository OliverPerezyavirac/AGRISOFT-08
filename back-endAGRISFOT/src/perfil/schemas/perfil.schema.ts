import { Schema } from "mongoose";

export const PerfilSchema = new Schema({
    ingeniero: String,
    profesion: String,
    description: String,
    provincia: String,
    region: String,
    password: String,
    photo: String,
    createdAt: { type: Date, default: Date.now }
});

