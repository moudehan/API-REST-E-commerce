import { Injectable } from '@nestjs/common';
import { createProductDto } from './DTO/create-product.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduit(produit: createProductDto) {
    const createdProduct = await this.prisma.produit.create({
      data: produit,
    });
    return {
      statusCode: 200,
      data: createdProduct,
    };
  }

  async getAllProduits() {
    return await this.prisma.produit.findMany();
  }

  async getCountOfProduits() {
    return this.prisma.produit.count();
  }

  async getProduitById(id: number) {
    return this.prisma.produit.findUnique({
      where: { id },
    });
  }

  async updateProduit(id: number, produit: createProductDto) {
    const updateProduct = await this.prisma.produit.update({
      data: produit,
      where: { id },
    });
    return {
      statusCode: 200,
      data: updateProduct,
    };
  }

  async deleteProduit(id: number) {
    const deleteProduct = await this.prisma.produit.delete({ where: { id } });

    return {
      statusCode: 200,
      data: deleteProduct,
      message: `Success delete ${id}`,
    };
  }
}
