-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originalUrl" TEXT NOT NULL,
    "expireAt" DATETIME NOT NULL
);
