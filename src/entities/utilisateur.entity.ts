// src/entities/utilisateur.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Commande } from './commande.entity'; // Assurez-vous que cette importation est correcte

@Entity()
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  email: string;

  @OneToMany(() => Commande, (commande) => commande.utilisateur)
  commandes: Commande[];
}
