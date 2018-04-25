CREATE DATABASE IF NOT EXISTS rescueman;

USE rescueman;

CREATE TABLE IF NOT EXISTS `organization` ( 
    `organizationid` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(100) , 
    `email` VARCHAR(100) , 
    `website` VARCHAR(255) , 
    `phone` VARCHAR(100) , 
    `address` TEXT , 
    'status' INT ,
    'state' INT ,
    `createdon` DATETIME NOT NULL , 
    `updatedon` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`organizationid`)) 
    ENGINE = InnoDB;

