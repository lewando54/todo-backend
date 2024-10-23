/*
  Warnings:

  - You are about to drop the column `done` on the `Task` table. All the data in the column will be lost.
  - Added the required column `description` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TODO', 'ACTIVE', 'COMPLETED');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "done",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'TODO';
