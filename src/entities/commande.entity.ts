import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Product } from './product.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantite: number;

  @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.commandes)
  utilisateur: Utilisateur;

  @ManyToOne(() => Product)
  produit: Product;
}
