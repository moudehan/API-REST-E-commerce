import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { ProductService } from './product.service';

@Controller('produits')
export class ProductController {
  constructor(private readonly produitService: ProductService) {}

  @Get()
  getAllProduits(): Product[] {
    return this.produitService.getAllProduits();
  }

  @Get(':id')
  getProduitById(@Param('id') id: number): Product {
    return this.produitService.getProduitById(+id);
  }

  @Post()
  createProduit(@Body() produit: Product): Product {
    return this.produitService.createProduit(produit);
  }

  @Put(':id')
  updateProduit(
    @Param('id') id: number,
    @Body() updatedProduit: Product,
  ): Product {
    return this.produitService.updateProduit(+id, updatedProduit);
  }

  @Delete(':id')
  deleteProduit(@Param('id') id: number): Product {
    return this.produitService.deleteProduit(+id);
  }
}
