/*
  Warnings:

  - You are about to drop the column `isActice` on the `user` table. All the data in the column will be lost.
  - Added the required column `isActive` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "isActice",
ADD COLUMN     "isActive" BOOLEAN NOT NULL;
