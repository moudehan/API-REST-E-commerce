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
    console.log(`Attempting to sign in with ID=${id} and email=${email}`);

    const user = await this.usersService.findOne(id);
    if (user?.email !== email) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
