/*
  Warnings:

  - You are about to drop the column `email` on the `FormInput` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `FormInput` table. All the data in the column will be lost.
  - Added the required column `label` to the `FormInput` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueExpression` to the `FormInput` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "FormInput.email_unique";

-- AlterTable
ALTER TABLE "FormInput" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "requiredExpression" TEXT,
ADD COLUMN     "visibilityExpression" TEXT,
ADD COLUMN     "valueExpression" TEXT NOT NULL;
