import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { MorganModule } from 'nest-morgan';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './schemas/usuario.schema';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema}])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
