import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport'; // Importez PassportModule ici
import { UtilisateurController } from 'src/utilisateur/utilisateur.controller';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { Utilisateur } from 'src/entities/utilisateur.entity';

@Module({
  imports: [
    PassportModule, // Assurez-vous que cette ligne est correctement importée ici
    TypeOrmModule.forFeature([Utilisateur]),
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  exports: [UtilisateurService], // Assurez-vous d'inclure cette ligne pour exporter le service
})
export class UtilisateurModule {}
