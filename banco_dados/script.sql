create database proj_indiv;
use proj_indiv;

CREATE TABLE user (
  idUser INT PRIMARY KEY AUTO_INCREMENT,
  emailUser VARCHAR(60),
  nomeUser VARCHAR(50),
  senha VARCHAR(100)
);

CREATE TABLE carta (
  idCarta INT PRIMARY KEY AUTO_INCREMENT,
  FkUser INT,
  nome VARCHAR(40) NOT NULL,
  custo VARCHAR(10) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
  superTipo VARCHAR(20),
  subTipo VARCHAR(20) NOT NULL,
  cor VARCHAR(20),
  efeito VARCHAR(100),
  FOREIGN KEY (FkUser) REFERENCES user(idUser)
);