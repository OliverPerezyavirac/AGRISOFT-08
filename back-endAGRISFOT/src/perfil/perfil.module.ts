import { PerfilSchema } from './schemas/perfil.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MorganModule } from 'nest-morgan';
import { Module } from '@nestjs/common';
import { PerfilController } from './perfil.controller';
import { PerfilService } from './perfil.service';

@Module({
  imports:[
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Perfil', schema: PerfilSchema}])
  ],
  controllers: [PerfilController],
  providers: [PerfilService]
})
export class PerfilModule {}
