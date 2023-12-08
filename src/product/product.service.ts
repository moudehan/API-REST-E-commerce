import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  private produits: Product[] = [];

  createProduit(produit: Product): Product {
    produit.id = Date.now();
    this.produits.push(produit);
    return produit;
  }

  getAllProduits(): Product[] {
    return this.produits;
  }

  getCountOfProduits(): number {
    return this.produits.length;
  }

  getProduitById(id: number): Product {
    return this.produits.find((produit) => produit.id === id);
  }

  updateProduit(id: number, updatedProduit: Product): Product {
    const index = this.produits.findIndex((produit) => produit.id === id);
    if (index !== -1) {
      this.produits[index] = { ...updatedProduit, id };
      return this.produits[index];
    }
    return null;
  }

  deleteProduit(id: number): Product {
    const index = this.produits.findIndex((produit) => produit.id === id);
    if (index !== -1) {
      const deletedProduit = this.produits[index];
      this.produits.splice(index, 1);
      return deletedProduit;
    }
    return null;
  }
}
