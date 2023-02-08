import { ReporteService } from './reporte.service';
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseInterceptors } from '@nestjs/common';
import { CreateProductDTO } from 'src/product/dto/product.dto';
import { CreatePlagaDTO } from './dto/plaga.dto';
import { MorganInterceptor } from 'nest-morgan';

@Controller('reporte')
export class ReporteController {
    constructor(private plagaService: ReporteService) { }

    @Post('/create')
    async createPlaga(@Res() res, @Body() createPlagaDTO: CreatePlagaDTO) {
        const plaga = await this.plagaService.createPlaga(createPlagaDTO);
        return res.status(HttpStatus.OK).json({
            message: 'plaga Successfully Created',
            plaga
        });
    }

    @Get('/')
    async getPlaga(@Res() res) {
        const plagas = await this.plagaService.getPlagas();
        return res.status(HttpStatus.OK).json(plagas);

    }

    // GET single product: /product/5c9d46100e2e5c44c444b2d1
    @Get('/:plagaID')
    async getProduct(@Res() res, @Param('plagaID') plagaID) {
        const plaga = await this.plagaService.getPlaga(plagaID);
        if (!plaga) throw new NotFoundException('Plaga does not exist!');
        return res.status(HttpStatus.OK).json(plaga);
    }



    @Delete('/deletePlaga')
    async deletePlaga(@Res() res, @Query('plagaID') plagaID) {
        const plagaDelete = await this.plagaService.deletePlaga(plagaID);
        if (!plagaDelete) throw new NotFoundException('Plaga does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Plaga deleted Successfully',
            plagaDelete
        });
    }

    @Put('/updateplaga')
    async updatePlaga(@Res() res, @Body() creeatePlagaDTO: CreatePlagaDTO, @Query('plagaID') plagaID) {
        const updatePlaga = await this.plagaService.updatePlaga(plagaID, creeatePlagaDTO);
        if (!updatePlaga) throw new NotFoundException('Plaga does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatePlaga 
        });
    }
}
