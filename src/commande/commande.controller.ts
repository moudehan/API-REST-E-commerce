import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Commande } from '../entities/commande.entity';
import { CommandeService } from './commande.service';
import { createCommandeDto } from './DTO/create-commande.dto';

@Controller('commandes')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Get()
  getAllCommandes() {
    return this.commandeService.getAllCommandes();
  }

  @Get(':id')
  getCommandeById(@Param('id') id: number) {
    return this.commandeService.getCommandeById(+id);
  }

  @Post()
  createCommande(@Body() commande: createCommandeDto) {
    return this.commandeService.createCommande(commande);
  }

  @Put(':id')
  updateCommande(
    @Param('id') id: number,
    @Body() updatedCommande: createCommandeDto,
  ) {
    return this.commandeService.updateCommande(+id, updatedCommande);
  }

  @Delete(':id')
  deleteCommande(@Param('id') id: number) {
    return this.commandeService.deleteCommande(+id);
  }
}
