import { IsString } from 'class-validator';

export class updateUserDto {
  @IsString()
  nom: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
