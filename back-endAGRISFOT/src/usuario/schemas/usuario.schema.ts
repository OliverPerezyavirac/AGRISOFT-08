import { Schema } from "mongoose";

export const UsuarioSchema = new Schema({
    nombre: String,
    email: String,
    region: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
});

