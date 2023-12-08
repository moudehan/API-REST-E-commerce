import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { createUserDto } from './DTO/create-user.dto';
import { updateUserDto } from './DTO/update-user.dto';
export type User = any;

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) {}

  async createUtilisateur(utilisateur: createUserDto) {
    const createdUtilisateur = await this.prisma.utilisateur.create({
      data: utilisateur,
    });

    return {
      statusCode: 200,
      data: createdUtilisateur,
    };
  }

  async getAllUtilisateurs() {
    return await this.prisma.utilisateur.findMany();
  }

  getCountOfUtilisateurs() {
    return this.prisma.utilisateur.count();
  }

  getUtilisateurById(id: number) {
    return this.prisma.utilisateur.findUnique({
      where: { id },
    });
  }

  async updateUtilisateur(id: number, utilisateur: updateUserDto) {
    const updateUser = await this.prisma.utilisateur.update({
      data: utilisateur,
      where: { id },
    });
    return {
      statusCode: 200,
      data: updateUser,
    };
  }

  async findOne(id: number) {
    return this.prisma.utilisateur.findUnique({ where: { id } });
  }

  async deleteUtilisateur(id: number) {
    const deleteUser = await this.prisma.utilisateur.delete({ where: { id } });

    return {
      statusCode: 200,
      data: deleteUser,
      message: `Success delete ${id}`,
    };
  }

  async getUserByPasswordAndEmail(password: string, email: string) {
    try {
      const user = await this.prisma.utilisateur.findUnique({
        where: {
          password: password,
          email: email,
        },
      });

      return user;
    } catch (error) {
      console.error("Erreur lors de la recherche de l'utilisateur :", error);
    }
  }
}
