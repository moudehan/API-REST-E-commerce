import { Injectable, NotFoundException } from '@nestjs/common';
import { Commande } from '../entities/commande.entity';
import { ProductService } from 'src/product/product.service';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { createCommandeDto } from './DTO/create-commande.dto';

@Injectable()
export class CommandeService {
  constructor(
    private utilisateurService: UtilisateurService,
    private productService: ProductService,
    private prisma: PrismaService,
  ) {}

  async createCommande(commande: createCommandeDto) {
    const createdCommande = await this.prisma.commande.create({
      data: commande,
    });

    const utilisateur = this.utilisateurService.getUtilisateurById(
      commande.utilisateurId,
    );
    if (!utilisateur) {
      throw new NotFoundException(
        `Utilisateur avec l'ID ${commande.utilisateurId} non trouvé`,
      );
    }

    const produit = this.productService.getProduitById(commande.produitId);
    if (!produit) {
      throw new NotFoundException(
        `Produit avec l'ID ${commande.produitId} non trouvé`,
      );
    }
    return createCommandeDto;
  }

  async getAllCommandes() {
    return await this.prisma.commande.findMany();
  }

  getCountOfCommandes() {
    return this.prisma.commande.count();
  }

  getCommandeById(id: number) {
    return this.prisma.utilisateur.findUnique({
      where: { id },
    });
  }

  async updateCommande(id: number, commande: createCommandeDto) {
    const updateUser = await this.prisma.commande.update({
      data: commande,
      where: { id },
    });
    return {
      statusCode: 200,
      data: updateUser,
    };
  }

  async deleteCommande(id: number) {
    const deleteC = this.prisma.commande.delete({
      where: { id },
    });
    return {
      statusCode: 200,
      data: deleteC,
      message: `Success delete ${id}`,
    };
  }
}
