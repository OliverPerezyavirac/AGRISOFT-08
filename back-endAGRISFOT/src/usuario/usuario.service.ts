import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDTO } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<Usuario>) {}

    // Get all usuarios
    async getUsuarios(): Promise<Usuario[]> {
        const usuario = await this.usuarioModel.find();
        return usuario;
    }
    
    // Get a single usuario
    async getUsuario(usuarioID: string): Promise<Usuario> {
        const usuario = await this.usuarioModel.findById(usuarioID); 
        return usuario;
    }

    // Post a single usuario
    async createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {
        const nweUsuario = new this.usuarioModel(createUsuarioDTO);
        return nweUsuario.save();
    }

    // Delete usuario
    async deleteUsuario(usuarioID: string): Promise<any> {
        const deleteUsuario = await this.usuarioModel.findByIdAndDelete(usuarioID);
        return deleteUsuario;
    }

    // Put a single usuario
    async updateUsuario(usuarioID: string, createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {
        const updateUsuario = await this.usuarioModel.findByIdAndUpdate(usuarioID, createUsuarioDTO, {new: true});
        return updateUsuario;
    }
}
