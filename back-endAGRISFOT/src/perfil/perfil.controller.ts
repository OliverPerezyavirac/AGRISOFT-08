import { MorganInterceptor } from 'nest-morgan';
import { CreatePerfilDTO } from './dto/perfil.dto';
import { PerfilService } from './perfil.service';
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseInterceptors } from '@nestjs/common';

@Controller('perfil')
export class PerfilController {
    constructor(private perfilService: PerfilService) { }

    @Post('/create')
    async createPerfil(@Res() res, @Body() createPerfilDTO: CreatePerfilDTO) {
        const perfil = await this.perfilService.createPerfil(createPerfilDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Perfil Successfully Created',
            perfil
        });
    }

    @Get('/')
    async getPerfiles(@Res() res) {
        const perfiles = await this.perfilService.getPerfiles();
        return res.status(HttpStatus.OK).json(perfiles);
    }

    @Get('/:perfilID')
    async getPerfil(@Res() res, @Param('perfilID') perfilID) {
        const perfil = await this.perfilService.getPerfil(perfilID);
        if (!perfil) throw new NotFoundException('Perfil does not exist!');
        return res.status(HttpStatus.OK).json(perfil);
    }

    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deletePerfil(@Res() res, @Query('perfilID') perfilID) {
        const perfilDelete = await this.perfilService.deletePerfil(perfilID);
        if (!perfilDelete) throw new NotFoundException('Prefil does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Prefil Deleted Successfully',
            perfilDelete
        });
    }
    
    @Put('/update')
    async updatePerfil(@Res() res, @Body() createPerfilDTO: CreatePerfilDTO, @Query('perfilID') perfilID) {
        const updatePerfil = await this.perfilService.updatePerfil(perfilID, createPerfilDTO);
        if (!updatePerfil) throw new NotFoundException('Prefil does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Perfil updated Successfully',
            updatePerfil 
        });
    }
}
