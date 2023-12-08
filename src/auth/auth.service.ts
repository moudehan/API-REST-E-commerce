import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UtilisateurService,
    private jwtService: JwtService,
  ) {}

  async signIn(id, email) {
    console.log(` ID=${id} et email=${email}`);
    // récupérer depuis la BDD
    const specificUser = { id: 1, email: 'test@gmail.com' };

    if (id !== specificUser.id || email !== specificUser.email) {
      throw new UnauthorizedException();
    }

    const payload = { id: specificUser.id, email: specificUser.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
