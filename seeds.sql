INSERT INTO deparments ( id, dep_name ) VALUES(
     (001, 'Bread'),
     (002, 'Dairy'),
);

INSERT INTO role ( id, role_title, salary, deparment_id ) VALUES(
     (001, 'Dairy assosiate', 0.01, 13),
     (002, 'Bakery assosiate', 0.02, 12)
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES(
     (001, 'Alex', 'Lara', 12, 01233)
     (002, 'Jake', 'Staefarm', 32, 91478)
);