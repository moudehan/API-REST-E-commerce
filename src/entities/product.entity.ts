import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  description: string;

  @Column()
  prix: number;

  @OneToMany(() => Commande, (commande) => commande.utilisateur)
  commandes: Commande[];
}
