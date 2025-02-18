SELECT *
FROM products 
WHERE price > 1 AND price < 10
AND name REGEXP '[Nn]ame|[Ww]ord';
LIMIT 8 ; 
