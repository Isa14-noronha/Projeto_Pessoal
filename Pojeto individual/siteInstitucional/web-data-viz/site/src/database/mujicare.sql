CREATE DATABASE Mujicare;
USE Mujicare;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario CHAR(45),
email CHAR(45),
senha CHAR (45)
);

CREATE TABLE Comentarios(
idComentario INT PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR(35),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Instrumentos(
violino INT,
violao INT,
guitarra INT,
bateria INT,
piano INT,
outros INT,
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
PRIMARY KEY (fkUsuario)
);

-- CREATE TABLE Instrumentos(
-- instrumento INT,
-- fkUsuario INT,
-- FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
-- PRIMARY KEY (fkUsuario)
-- );
drop table Instrumentos;
insert into Instrumentos values(1, 0,1 ,1 , 1, 0, 1);
select*from Usuario;
SELECT count(idUsuario) as 'qtd_usuario' FROM Usuario;
