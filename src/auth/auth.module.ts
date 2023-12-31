import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './auth.constants';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [
    UtilisateurModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    PrismaModule,
  ],
  providers: [AuthService, UtilisateurService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
