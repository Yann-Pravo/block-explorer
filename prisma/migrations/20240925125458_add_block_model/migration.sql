-- CreateTable
CREATE TABLE "Block" (
    "id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "timestamp" TEXT NOT NULL,
    "nonce" TEXT NOT NULL,
    "gasLimit" TEXT NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);
