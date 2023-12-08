import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UtilisateurService,
    private jwtService: JwtService,
  ) {}

  async signIn(password: string, email: string) {
    const user = await this.usersService.getUserByPasswordAndEmail(
      password,
      email,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { password: user.password, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
