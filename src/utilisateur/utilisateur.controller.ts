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
import { UtilisateurService } from './utilisateur.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { createUserDto } from './DTO/create-user.dto';
import { updateUserDto } from './DTO/update-user.dto';

@Controller('utilisateurs')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllUtilisateurs() {
    return this.utilisateurService.getAllUtilisateurs();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getUtilisateurById(@Param('id') id: string) {
    return this.utilisateurService.getUtilisateurById(+id);
  }

  @UseGuards(AuthGuard)
  @Post()
  createUtilisateur(@Body() utilisateur: createUserDto) {
    return this.utilisateurService.createUtilisateur(utilisateur);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  updateUtilisateur(
    @Param('id') id: number,
    @Body() updatedUtilisateur: updateUserDto,
  ) {
    return this.utilisateurService.updateUtilisateur(+id, updatedUtilisateur);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUtilisateur(@Param('id') id: number) {
    return this.utilisateurService.deleteUtilisateur(+id);
  }
}
