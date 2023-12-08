-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
