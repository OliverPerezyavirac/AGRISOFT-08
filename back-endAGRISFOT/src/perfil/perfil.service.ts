import { CreatePerfilDTO } from './dto/perfil.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Perfil } from './interfaces/perfil.interface';

@Injectable()
export class PerfilService {
    constructor(@InjectModel('Perfil') private readonly perfilModel: Model<Perfil>) {}

    // Get all perfiles
    async getPerfiles(): Promise<Perfil[]> {
        const perfil = await this.perfilModel.find();
        return perfil;
    }
    
    // Get a single perfil
    async getPerfil(perfilID: string): Promise<Perfil> {
        const perfil = await this.perfilModel.findById(perfilID); 
        return perfil;
    }

    // Post a single perfil
    async createPerfil(createPerfilDTO: CreatePerfilDTO): Promise<Perfil> {
        const nwePerfil = new this.perfilModel(createPerfilDTO);
        return nwePerfil.save();
    }

    // Delete perfil
    async deletePerfil(perfilID: string): Promise<any> {
        const deletePerfil = await this.perfilModel.findByIdAndDelete(perfilID);
        return deletePerfil;
    }

    // Put a single perfil
    async updatePerfil(perfilID: string, createPerfilDTO: CreatePerfilDTO): Promise<Perfil> {
        const updatePerfil = await this.perfilModel.findByIdAndUpdate(perfilID, createPerfilDTO, {new: true});
        return updatePerfil;
    }
}
