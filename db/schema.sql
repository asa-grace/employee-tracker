DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    id: INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id: INTEGER,
    manager_id: INTEGER
    CONSTRAINT fk_party FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

