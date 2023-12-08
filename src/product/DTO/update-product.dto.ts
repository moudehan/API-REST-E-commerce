import { IsString } from 'class-validator';

export class updateProductDto {
  @IsString()
  nom: string;
  @IsString()
  description: string;
  prix: number;
}
