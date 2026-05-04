create database Eventos;
use Eventos;

create table usuarios(
id_usuario int primary key auto_increment,
nome varchar(100)not null,
email varchar(100)not null unique,
senha varchar(100) not null,
telefone varchar(50)not null unique,
role varchar(50)not null
);

create table eventos(
id_evento int primary key auto_increment,
responsavelid int,
endereco varchar(50) not null,
dataini datetime not null,
datafim datetime not null,
nome varchar(100) not null,
descricao varchar(500),
capacidade int not null,
dispo int,
status varchar(50) not null,

foreign key(responsavelid) references usuarios(id_usuario)
);

create table inscricoes(
id_incricoes int primary key auto_increment,
id_usuario int,
id_evento int,
data datetime default now(),

foreign key(id_usuario) references usuarios(id_usuario),
foreign key(id_evento) references eventos(id_evento),

unique key unico_inscricao (id_usuario, id_evento)
);
