/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_password_key" ON "Utilisateur"("password");
