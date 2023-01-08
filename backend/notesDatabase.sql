DROP DATABASE IF EXISTS notesDatabase;

CREATE DATABASE notesDatabase;

USE notesDatabase;
DROP TABLE IF EXISTS `note`;

CREATE TABLE note (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    content varchar(255) NOT NULL,
    created_at datetime default CURRENT_TIMESTAMP,
    modified_date timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;