import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { UtilisateurController } from 'src/utilisateur/utilisateur.controller';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { Utilisateur } from 'src/entities/utilisateur.entity';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([Utilisateur]),
    PrismaModule,
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
