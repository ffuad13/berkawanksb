-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Kader', 'Medik', 'Petugas', 'Tim Teknis');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "namaDepan" VARCHAR(255),
    "namaBelakang" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL,
    "wilayahKerja" VARCHAR(255),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laporan" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "userId" UUID NOT NULL,
    "pelapor" VARCHAR(255),
    "perihal" VARCHAR(255),
    "tempat" VARCHAR(255),
    "pelaksana" VARCHAR(255),
    "sasaran" VARCHAR(255),
    "bentukKegiatan" TEXT,
    "tanggal" DATE,
    "waktu" TIME,
    "status" VARCHAR(25) NOT NULL DEFAULT 'aktif',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foto" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "fileName" VARCHAR(255),
    "imageUrl" TEXT NOT NULL,
    "laporanId" UUID NOT NULL,

    CONSTRAINT "Foto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto" ADD CONSTRAINT "Foto_laporanId_fkey" FOREIGN KEY ("laporanId") REFERENCES "Laporan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
