CREATE TABLE products(
    id INT NOT NULL DEFAULT SERIAL,
    _id VARCHAR(100),
    name VARCHAR(100),
    price INT,
    date DATE,
    cetegory VARCHAR(100),
    description VARCHAR(2000),
    PRIMARY KEY(id)
);

INSERT INTO products (_id , name , price , date , cetegory ,description)  
VALUES ('5b2dc908-f305-4e60-9ba3-1522a2018548','Small Concrete Shirt' , 329.00,'23-04-05','Games','Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals');