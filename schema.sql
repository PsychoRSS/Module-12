DROP DATABASE IF EXISTS pinkman_db;
CREATE DATABASE pinkman_db;

USE pinkman_db;

CREATE TABLE deparment (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30) NOT null,
    salary DECIMAL(3,3),
    deparment_id INT
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name: VARCHAR(30) NULL,
    last_name: VARCHAR(30) NULL,
    role_id: INT
    manager_id INT
)