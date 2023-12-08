import { Module } from '@nestjs/common';
import { CommandeController } from './commande.controller';
import { CommandeService } from './commande.service';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { ProductService } from 'src/product/product.service';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CommandeController],
  providers: [CommandeService, UtilisateurService, ProductService],
})
export class CommandeModule {}
