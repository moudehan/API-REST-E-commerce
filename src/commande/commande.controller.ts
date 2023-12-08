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
import { AuthGuard } from 'src/auth/auth.guard';
import { CommandeService } from './commande.service';
import { createCommandeDto } from './DTO/create-commande.dto';

@Controller('commandes')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllCommandes() {
    return this.commandeService.getAllCommandes();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getCommandeById(@Param('id') id: number) {
    return this.commandeService.getCommandeById(+id);
  }

  @Post()
  @UseGuards(AuthGuard)
  createCommande(@Body() commande: createCommandeDto) {
    return this.commandeService.createCommande(commande);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateCommande(
    @Param('id') id: number,
    @Body() updatedCommande: createCommandeDto,
  ) {
    return this.commandeService.updateCommande(+id, updatedCommande);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteCommande(@Param('id') id: number) {
    return this.commandeService.deleteCommande(+id);
  }
}
