import { Injectable } from '@nestjs/common';
import { Plaga } from './interfaces/interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlagaDTO } from './dto/plaga.dto';

@Injectable()
export class ReporteService {
    constructor(@InjectModel('Plaga') private readonly plagaModel: Model<Plaga>){}

    
    async getPlagas(): Promise<Plaga[]>{
        const plagas = await this.plagaModel.find();
        return plagas;
    }
    
    async getPlaga(plagaID: string): Promise<Plaga> {
        const plagas = await this.plagaModel.findById(plagaID); 
        return plagas;
    }
    
    async createPlaga(createPlagaDTO: CreatePlagaDTO): Promise<Plaga>{
        const newPlaga = new this.plagaModel(createPlagaDTO);
        return newPlaga.save();
    }
    
    async deletePlaga(plagaID: string): Promise<any>{
        const deletePlaga = await this.plagaModel.findByIdAndDelete(plagaID);
        return deletePlaga;
    }

    async  updatePlaga(plagaID: string, createPlagaDTO: CreatePlagaDTO){
        const updatePlaga = await this.plagaModel
                            .findByIdAndUpdate(plagaID, createPlagaDTO, {new: true});
        return updatePlaga;
    }
}
