INSERT INTO departments (name)
VALUES
    ('Sales Lead'),
    ('Sales'),
    ('Lead Engineer'),
    ('Software Engineer'),
    ('Accountant'),
    ('Trainer');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Sales', 90000, 2),
    ('Lead Engineer', 100000, 3),
    ('Software Engineer', 120000, 4),
    ('Accountant', 80000, 5),
    ('Trainer', 60000, 6);

INSERT INTO employees (first_name, last_name, department_id, manager_id)
VALUES
    ('John', 'Marsh', 1),
    ('Annabelle', 'Warner', 2),
    ('Simon', 'Lizotte', 2),
    ('Jonathan', 'Joestar', 3),
    ('Michael', 'Mcmahon', 4),
    ('Drew', 'Figures', 4),
    ('Matthew', 'Brotha', 4),
    ('Travis', 'Jordan', 5),
    ('Melanie', 'McDaniels', 6);