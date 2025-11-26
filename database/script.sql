Create table autor (
	id serial primary key,
	nombre text,
	nacionalidad text
);
Create table genero (
	id serial primary key,
	nombre text,
	descripcion text
);
create table libro(
	id serial primary key,
	titulo text,
	editorial text,
	id_autor int,
	id_genero int,
	foreign key (id_autor) references autor(id),
	foreign key (id_genero) references genero(id)
);
