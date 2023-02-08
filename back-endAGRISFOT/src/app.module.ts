import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';
// import { ProductModule } from './product/product.module';
import { ReporteModule } from './reporte/reporte.module';
import { PerfilModule } from './perfil/perfil.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/products-nest', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ProductModule,
    ReporteModule,
    PerfilModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
