import { IsString } from 'class-validator';

export class createProductDto {
  @IsString()
  nom: string;
  @IsString()
  description: string;
  prix: number;
}
