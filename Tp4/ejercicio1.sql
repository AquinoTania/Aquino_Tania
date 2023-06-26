use ejercicio1;
Create table alumnos
(
cod_matricula int primary key not null,
nombre   varchar(45) not null,
dni  int not null,
fecha_nac  datetime ,
email  varchar(25)
);