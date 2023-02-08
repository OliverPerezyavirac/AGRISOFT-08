import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseInterceptors } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './dto/usuario.dto';
import { MorganInterceptor } from 'nest-morgan';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Post('/create')
    async createUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO) {
        const usuario = await this.usuarioService.createUsuario(createUsuarioDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Usuario Successfully Created',
           usuario
        });
    }

    @Get('/')
    async getUsuarios(@Res() res) {
        const usuarios = await this.usuarioService.getUsuarios();
        return res.status(HttpStatus.OK).json(usuarios);
    }

    @Get('/:usuarioID')
    async getUsuario(@Res() res, @Param('usuarioID') usuarioID) {
        const usuario = await this.usuarioService.getUsuario(usuarioID);
        if (!usuario) throw new NotFoundException('Usuario does not exist!');
        return res.status(HttpStatus.OK).json(usuario);
    }

    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteUsuario(@Res() res, @Query('usuarioID') usuarioID) {
        const usuarioDelete = await this.usuarioService.deleteUsuario(usuarioID);
        if (!usuarioDelete) throw new NotFoundException('Usuario does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'usuario Deleted Successfully',
            usuarioDelete
        });
    }
    
    @Put('/update')
    async updateUsuario(@Res() res, @Body() createUsuarioDTO: CreateUsuarioDTO, @Query('usuarioID') usuarioID) {
        const updateUsuario= await this.usuarioService.updateUsuario(usuarioID, createUsuarioDTO);
        if (!updateUsuario) throw new NotFoundException('Prefil does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario updated Successfully',
            updateUsuario
        });
    }
}
