import { IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  nom: string;
  @IsString()
  email: string;
}
