import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Utilisateur } from '../entities/utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { createUserDto } from './DTO/create-user.dto';

@Controller('utilisateurs')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllUtilisateurs() {
    return this.utilisateurService.getAllUtilisateurs();
  }

  @Get(':id')
  getUtilisateurById(@Param('id') id: string) {
    return this.utilisateurService.getUtilisateurById(+id);
  }

  @Post()
  createUtilisateur(@Body() utilisateur: createUserDto) {
    return this.utilisateurService.createUtilisateur(utilisateur);
  }

  @Put(':id')
  updateUtilisateur(
    @Param('id') id: number,
    @Body() updatedUtilisateur: createUserDto,
  ) {
    return this.utilisateurService.updateUtilisateur(+id, updatedUtilisateur);
  }

  @Delete(':id')
  deleteUtilisateur(@Param('id') id: number) {
    return this.utilisateurService.deleteUtilisateur(+id);
  }
}
