CREATE DATABASE IF NOT EXISTS rescueman;

USE rescueman;

CREATE TABLE IF NOT EXISTS `organization` ( 
    `organizationid` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(100) , 
    `email` VARCHAR(100) , 
    `website` VARCHAR(255) , 
    `phone` VARCHAR(100) , 
    `address` TEXT , 
    `status` INT ,
    `state` INT ,
    `createdon` DATETIME NOT NULL , 
    `updatedon` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`organizationid`)) 
    ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `entity` ( 
    `entityid` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(100) , 
    `description` VARCHAR(100) , 
    PRIMARY KEY (`entityid`)) 
    ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `status` ( 
    `statusid` INT NOT NULL AUTO_INCREMENT , 
    `entityid` INT , 
    `stateid` INT , 
    `value` INT , 
    `name` VARCHAR(100) , 
    PRIMARY KEY (`statusid`)) 
    ENGINE = InnoDB;

CREATE  OR REPLACE VIEW `organizations_view` AS
SELECT organizationid, name, email, website, phone, address, createdon, updatedon, status, state, 
case state 
	when 0 then 'Inactive'
    when 1 then 'Active'
end as statename
from organization

/* Values */
INSERT INTO `rescueman`.`entity` (`name`, `description`) VALUES ('organization', 'Rescues');

INSERT INTO `rescueman`.`organization` (`name`, `email`, `website`, `phone`, `address`, `status`, `state`, `createdon`) VALUES ('ODR', 'odr@ottawadogrescue.com', 'ottawadogrescue.com', '234-567-8765', 'Test', '1', '1', NOW());
