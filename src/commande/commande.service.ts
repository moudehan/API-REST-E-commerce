// src/services/commande.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Commande } from '../entities/commande.entity';
import { Utilisateur } from '../entities/utilisateur.entity';
import { ProductService } from 'src/product/product.service';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Injectable()
export class CommandeService {
  private commandes: Commande[] = [];
  constructor(
    private utilisateurService: UtilisateurService,
    private productService: ProductService,
  ) {}

  createCommande(commande: Commande): Commande {
    const utilisateur = this.utilisateurService.getUtilisateurById(
      commande.utilisateur.id,
    );
    if (!utilisateur) {
      throw new NotFoundException(
        `Utilisateur avec l'ID ${commande.utilisateur.id} non trouvé`,
      );
    }

    const produit = this.productService.getProduitById(commande.produit.id);
    if (!produit) {
      throw new NotFoundException(
        `Produit avec l'ID ${commande.produit.id} non trouvé`,
      );
    }

    commande.id = Date.now();
    this.commandes.push(commande);
    return commande;
  }

  getAllCommandes(): Commande[] {
    return this.commandes;
  }

  getCountOfCommandes(): number {
    return this.commandes.length;
  }

  getCommandeById(id: number): Commande {
    return this.commandes.find((commande) => commande.id === id);
  }

  updateCommande(id: number, updatedCommande: Partial<Commande>): Commande {
    const index = this.commandes.findIndex((commande) => commande.id === id);

    if (index !== -1) {
      if (updatedCommande.quantite !== undefined) {
        this.commandes[index].quantite = updatedCommande.quantite;
      }

      return this.commandes[index];
    }

    throw new NotFoundException(`Commande introuvable`);
  }

  deleteCommande(id: number): Commande {
    const index = this.commandes.findIndex((commande) => commande.id === id);
    if (index !== -1) {
      const deletedCommande = this.commandes[index];
      this.commandes.splice(index, 1);
      return deletedCommande;
    }
    throw new NotFoundException(`Commande introuvable`);
  }
}
