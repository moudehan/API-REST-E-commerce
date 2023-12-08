import { IsNotEmpty, IsString } from 'class-validator';

export class updateUserDto {
  @IsString()
  nom: string;
  @IsString()
  email: string;
}
