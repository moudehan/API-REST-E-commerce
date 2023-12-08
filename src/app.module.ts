import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Utilisateur } from './entities/utilisateur.entity';
import { Commande } from './entities/commande.entity';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { UtilisateurService } from './utilisateur/utilisateur.service';
import { CommandeService } from './commande/commande.service';
import { CommandeController } from './commande/commande.controller';
import { AuthModule } from './auth/auth.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ProductModule } from './product/product.module';
import { CommandeModule } from './commande/commande.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: 'postgres',
      password: 'MYoutlook2**',
      database: process.env.DB_DATABASE,
      entities: [Product, Utilisateur, Commande],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
    UtilisateurModule,
    CommandeModule,
    ProductModule,
  ],
  providers: [ProductService, UtilisateurService, CommandeService],
  controllers: [ProductController, UtilisateurController, CommandeController],
})
export class AppModule {}
