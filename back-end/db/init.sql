DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  name TEXT
);

INSERT INTO users (name) VALUES ('Ann'), ('Reuben'), ('Maya');
