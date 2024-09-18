-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "personType" INTEGER NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "dateOfBith" TIMESTAMP(3) NOT NULL,
    "address" JSONB NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "routersIP" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Routers" (
    "IP" TEXT NOT NULL,
    "IPv6" TEXT NOT NULL,
    "brand" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Routers_pkey" PRIMARY KEY ("IP")
);

-- CreateTable
CREATE TABLE "_CustomerToRouters" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cpfCnpj_key" ON "Customer"("cpfCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToRouters_AB_unique" ON "_CustomerToRouters"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToRouters_B_index" ON "_CustomerToRouters"("B");

-- AddForeignKey
ALTER TABLE "_CustomerToRouters" ADD CONSTRAINT "_CustomerToRouters_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToRouters" ADD CONSTRAINT "_CustomerToRouters_B_fkey" FOREIGN KEY ("B") REFERENCES "Routers"("IP") ON DELETE CASCADE ON UPDATE CASCADE;
