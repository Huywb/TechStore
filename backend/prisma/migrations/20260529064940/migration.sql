/*
  Warnings:

  - You are about to drop the column `mainImage` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the column `publicId` on the `image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[public_id]` on the table `image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `public_id` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secure_url` to the `image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActice` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "image_publicId_key";

-- AlterTable
ALTER TABLE "blog" DROP COLUMN "mainImage";

-- AlterTable
ALTER TABLE "image" DROP COLUMN "publicId",
DROP COLUMN "url",
ADD COLUMN     "blogId" TEXT,
ADD COLUMN     "public_id" TEXT NOT NULL,
ADD COLUMN     "secure_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isActice" BOOLEAN NOT NULL,
ADD COLUMN     "password" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "image_public_id_key" ON "image"("public_id");

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
