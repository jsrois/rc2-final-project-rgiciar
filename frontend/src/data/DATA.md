### Visualizar una tabla
SELECT * FROM cats 

### Crear una tabla cats en PostgreSQL
CREATE TABLE cats (
	id_cat SERIAL PRIMARY KEY,
	name VARCHAR(255),
	chip_id VARCHAR(255),
	birth DATE,
	gender VARCHAR(255),
	breed VARCHAR(255),
	color VARCHAR(255),
	features VARCHAR(255),
	sterilized VARCHAR(255),
	allergies VARCHAR(255),
	health VARCHAR(255)
);

### Insertar datos en la tabla
INSERT INTO cats (name, chip_id, birth, gender, breed, color, features, sterilized, allergies, health)
VALUES ('Briski', '8728723642874268', '2022-03-25', 'Male', 'American exotic', 'Tabby cream', 'He is very small. His jaw is crooked, showing a fang. His tail tip is also twisted.', 'Yes', 'All poultries', 'No');


### Crear tabla usuario
CREATE TABLE user (
    id_user SERIAL PRIMARY KEY
)