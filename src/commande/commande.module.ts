import { Module } from '@nestjs/common';
import { CommandeController } from './commande.controller';
import { CommandeService } from './commande.service';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [],
  controllers: [CommandeController],
  providers: [CommandeService, UtilisateurService, ProductService],
})
export class CommandeModule {}
