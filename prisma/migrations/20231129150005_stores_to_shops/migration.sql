-- CreateTable
CREATE TABLE `Test` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `regIp` VARCHAR(191) NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test2` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `regIp` VARCHAR(191) NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shops` (
    `idx` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `ename` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `salesType` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `detailAddress` VARCHAR(191) NULL,
    `district` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,
    `xpoint` VARCHAR(191) NULL,
    `ypoint` VARCHAR(191) NULL,
    `shopTel` VARCHAR(191) NULL,
    `shopPhone` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `workingHours` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `viewCnt` INTEGER NULL DEFAULT 0,
    `fileName1` VARCHAR(191) NULL,
    `fileName2` VARCHAR(191) NULL,
    `fileName3` VARCHAR(191) NULL,
    `fileName4` VARCHAR(191) NULL,
    `fileName5` VARCHAR(191) NULL,
    `useYn` VARCHAR(191) NULL,
    `od` INTEGER NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `regIp` VARCHAR(191) NULL,

    PRIMARY KEY (`idx`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NULL,
    `eventType` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `referrer` VARCHAR(191) NULL,
    `ipAddress` VARCHAR(191) NOT NULL,
    `userAgent` VARCHAR(191) NULL,
    `customData` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
