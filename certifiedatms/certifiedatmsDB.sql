DROP database if EXISTS certifiedAtms;
CREATE DATABASE certifiedAtms;
USE certifiedAtms;

CREATE TABLE `Atms` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `Name` VARCHAR( 255) NOT NULL,
  `password` VARCHAR( 255 ) NOT NULL,
  PRIMARY KEY ( `id` ) 
);