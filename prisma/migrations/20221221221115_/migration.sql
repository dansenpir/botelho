-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('ACTIVATION_BY_CODE', 'EMAIL_INVITATION', 'LOGIN_AND_PASSWORD');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IMMEDIATE', 'NEW', 'WAITING_QUEUE');

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog" (
    "service" TEXT NOT NULL,
    "max_amount" DOUBLE PRECISION NOT NULL,
    "supported_access" "AccessType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "showcase" (
    "id" SERIAL NOT NULL,
    "catalog_service" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "access_type" "AccessType" NOT NULL,
    "id_user" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "showcase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stakeholder" (
    "id_user" INTEGER NOT NULL,
    "catalog_service" TEXT NOT NULL,

    CONSTRAINT "stakeholder_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "catalog_service_key" ON "catalog"("service");

-- CreateIndex
CREATE UNIQUE INDEX "showcase_id_key" ON "showcase"("id");

-- CreateIndex
CREATE UNIQUE INDEX "stakeholder_id_user_key" ON "stakeholder"("id_user");

-- AddForeignKey
ALTER TABLE "showcase" ADD CONSTRAINT "showcase_catalog_service_fkey" FOREIGN KEY ("catalog_service") REFERENCES "catalog"("service") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "showcase" ADD CONSTRAINT "showcase_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder" ADD CONSTRAINT "stakeholder_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder" ADD CONSTRAINT "stakeholder_catalog_service_fkey" FOREIGN KEY ("catalog_service") REFERENCES "catalog"("service") ON DELETE RESTRICT ON UPDATE CASCADE;
