// src/modules/commande/commande.module.ts
import { Module } from '@nestjs/common';
import { CommandeController } from './commande.controller';
import { CommandeService } from './commande.service';
import { UtilisateurService } from '../utilisateur/utilisateur.service'; // Assurez-vous que le chemin est correct
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [],
  controllers: [CommandeController],
  providers: [CommandeService, UtilisateurService, ProductService], // Assurez-vous que ProductService est inclus ici
})
export class CommandeModule {}
