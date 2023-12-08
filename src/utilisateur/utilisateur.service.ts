import { Injectable, NotFoundException } from '@nestjs/common';
import { Utilisateur } from '../entities/utilisateur.entity';
export type User = any;

@Injectable()
export class UtilisateurService {
  private readonly users = [
    {
      id: 1,
      email: 'test@gmail.com',
    },
    {
      id: 2,
      nom: 'maria',
      email: 'guess',
    },
  ];
  private utilisateurs: Utilisateur[] = [];

  createUtilisateur(utilisateur: Utilisateur): Utilisateur {
    utilisateur.id = Date.now();
    this.utilisateurs.push(utilisateur);
    return utilisateur;
  }

  getAllUtilisateurs(): Utilisateur[] {
    return this.utilisateurs;
  }

  getCountOfUtilisateurs(): number {
    return this.utilisateurs.length;
  }

  getUtilisateurById(id: number): Utilisateur {
    return this.utilisateurs.find((utilisateur) => utilisateur.id === id);
  }

  updateUtilisateur(id: number, updatedUtilisateur: Utilisateur): Utilisateur {
    const index = this.utilisateurs.findIndex(
      (utilisateur) => utilisateur.id === id,
    );
    if (index !== -1) {
      this.utilisateurs[index] = { ...updatedUtilisateur, id };
      return this.utilisateurs[index];
    }
    return null;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === username);
  }
  deleteUtilisateur(id: number): Utilisateur {
    const index = this.utilisateurs.findIndex(
      (utilisateur) => utilisateur.id === id,
    );
    if (index !== -1) {
      const deletedUtilisateur = this.utilisateurs[index];
      this.utilisateurs.splice(index, 1);
      return deletedUtilisateur;
    }
    return null;
  }
}
