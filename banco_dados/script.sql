drop database proj_indiv;
select * from user;



create database proj_indiv;
use proj_indiv;

CREATE TABLE user (
  idUser INT PRIMARY KEY AUTO_INCREMENT,
  emailUser VARCHAR(60),
  nomeUser VARCHAR(50),
  senha VARCHAR(100) unique
);

CREATE TABLE carta (
  idCarta INT PRIMARY KEY AUTO_INCREMENT,
  FkUser INT,
  nome VARCHAR(40) NOT NULL,
  custo VARCHAR(10) NOT NULL,
  tipo VARCHAR(60) NOT NULL,
  tipoEstrutura VARCHAR(30) NOT NULL, 
  cor VARCHAR(20),
  poder SMALLINT,
  resist SMALLINT,
  texto VARCHAR(400),
  FOREIGN KEY (FkUser) REFERENCES user(idUser)
);