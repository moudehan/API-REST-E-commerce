import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDto } from './DTO/create-product.dto';
import { updateProductDto } from './DTO/update-product.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('produits')
export class ProductController {
  constructor(private readonly produitService: ProductService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllProduits() {
    return this.produitService.getAllProduits();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getProduitById(@Param('id') id: number) {
    return this.produitService.getProduitById(+id);
  }

  @Post()
  @UseGuards(AuthGuard)
  createProduit(@Body() produit: createProductDto) {
    return this.produitService.createProduit(produit);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateProduit(
    @Param('id') id: number,
    @Body() updatedProduit: updateProductDto,
  ) {
    return this.produitService.updateProduit(+id, updatedProduit);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteProduit(@Param('id') id: number) {
    return this.produitService.deleteProduit(+id);
  }
}
