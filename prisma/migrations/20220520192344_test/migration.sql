-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `creditCardNumber` VARCHAR(12) NULL,
    `expDate` VARCHAR(191) NULL,
    `cvv` INTEGER NULL,
    `address` VARCHAR(191) NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `profilePictureUrl` VARCHAR(191) NULL DEFAULT '',
    `timeCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `timeNow` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductEntity` (
    `id` VARCHAR(191) NOT NULL,
    `ProductName` VARCHAR(60) NOT NULL,
    `ProductDescription` VARCHAR(191) NOT NULL,
    `SKU` VARCHAR(191) NOT NULL,
    `ProductQTY` INTEGER NOT NULL,
    `ReOrderPoint` INTEGER NOT NULL,
    `ProductSalePrice` BIGINT NOT NULL,
    `ProductCostPrice` BIGINT NOT NULL,
    `categoryEntityId` VARCHAR(191) NOT NULL,
    `Image` LONGBLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoryEntity` (
    `id` VARCHAR(191) NOT NULL,
    `CategoryName` VARCHAR(191) NOT NULL,
    `ProductId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
