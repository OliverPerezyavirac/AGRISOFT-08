import { Module } from '@nestjs/common';
import { ReporteController } from './reporte.controller';
import { ReporteService } from './reporte.service';
import { MorganModule } from 'nest-morgan';
import { MongooseModule } from '@nestjs/mongoose';
import { PlagaSchema } from './schemas/reporte.schema';

@Module({
  imports: [
    MorganModule.forRoot(),
    MongooseModule.forFeature([{name:'Plaga', schema: PlagaSchema}])
  ],
  controllers: [ReporteController],
  providers: [ReporteService]
})
export class ReporteModule {}
