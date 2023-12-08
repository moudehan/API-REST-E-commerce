-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);
