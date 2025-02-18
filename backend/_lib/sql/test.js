//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success


import path from 'path';
import {mySqlConnection} from './_lib/services/ConnectDb.js'
import { createRequire } from 'module'
import { fileURLToPath } from 'url';
import { removeCharecters, removeCharectersAll } from './_lib/services/removeCharectes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createTable() {
    try {
        const db=await mySqlConnection()
        await db.connect();
        let createTableCommand=(`
            CREATE TABLE products(
    id INT PRIMARY KEY ,
    _id VARCHAR(100),
    name VARCHAR(100),
    price INT,
    date DATE,
    cetegory VARCHAR(100),
    description VARCHAR(2000)
);
       `);
        await db.query(createTableCommand ,function(error,results , feilds){
            if (error) {
                return console.error(error);
            }
            console.log(feilds);
        });
        await db.end()
    } catch (error) {
        console.error(error);
    }
}


async function showTables() {
    const db = await mySqlConnection()
    await db.connect();
    await db.query('SHOW TABLES' ,function(error,results , feilds){
        if (error) {
            return console.error(error);
        }
        console.log('------------------------- results ----------------------------');
        console.log(results);
        console.log('------------------------- Feilds ----------------------------');
        console.log(feilds);
    });

    await db.end()
}



async function alterTable() {
    try {
        const db=await mySqlConnection()
        await db.connect();
        let createTableCommand=(`
           ALTER TABLE products MODIFY id INT NOT NULL AUTO_INCREMENT PRIMARY KEY 
       `);
        await db.query(createTableCommand ,function(error,results , feilds){
            if (error) {
                return console.error(error.cause);
            }
            console.log(results);
            
        });
        await db.end()
    } catch (error) {
        console.error(error);
    }
}


async function INSERT(params) {
    try {
        const db=await mySqlConnection()
        await db.connect();
        let createTableCommand=(`
           ALTER TABLE products MODIFY id INT NOT NULL AUTO_INCREMENT PRIMARY KEY 
       `);
        const require=createRequire(import.meta.url);
        let productDatas1 =  require('./_lib/sql/fakeData1.json');
        let productDatas2 =  require('./_lib/sql/fakeData2.json');
        let productDatas3=  require('./_lib/sql/fakeData3.json');
        let productDatas4=  require('./_lib/sql/fakeData4.json');
        // for (let i = 0; i < productDatas1.length; i++) {
        //     let { name, _id, date, description, cetegory, price } = productDatas1[i];
        //     price = Math.floor(price)
        //     const Command = (`
        //         INSERT INTO products (_id , name , price , date , cetegory ,description) 
        //          VALUES ('${_id}','${name}' , ${price},'${date}','${cetegory}','${description}');
        //         `);
        //     db.query(Command , function (error , results) {
        //         if (error) {
        //             return console.error(error)
        //         } else {
        //             if (i % 70 === 0) console.log('Database create '+ i)
        //         }

        //     })
        // }
        // for (let i = 0; i < productDatas2.length; i++) {
        //     let { name, _id, date, description, cetegory, price } = productDatas1[i];
        //     price =Math.floor(price);
        //     [name, description , cetegory ] = removeCharectersAll([name, description , cetegory]);
        //     const Command = (`
        //         INSERT INTO products (_id , name , price , date , cetegory ,description) 
        //          VALUES ('${_id}','${name}' , ${price},'${date}','${cetegory}','${description}');
        //         `);
        //     db.query(Command , function (error , results) {
        //         if (error) {
        //             return console.error(error)
        //         } else {
        //             if (i % 70 === 0) console.log('Database create '+ i)
        //         }
        //     })
        // }
        // for (let i = 0; i < productDatas3.length; i++) {
        //     let { name, _id, date, description, cetegory, price } = productDatas1[i];
        //     price =Math.floor(price);
        //     [name, description , cetegory ] = removeCharectersAll([name, description , cetegory]);
        //     const Command = (`
        //         INSERT INTO products (_id , name , price , date , cetegory ,description) 
        //         VALUES ('${_id}','${name}' , ${price},'${date}','${cetegory}','${description}');
        //         `);
        //     db.query(Command , function (error , results) {
        //         if (error) {
        //             return console.error(error)
        //         } else {
        //             if (i % 70 === 0) console.log('Database create '+ i)
        //         }
        //     })
        // }
        // for (let i = 0; i < productDatas4.length; i++) {
        //     let { name, _id, date, description, cetegory, price } = productDatas1[i];
        //     price =Math.floor(price);
        //     [name, description , cetegory ] = removeCharectersAll([name, description , cetegory]);
        //     const Command = (`
        //         INSERT INTO products (_id , name , price , date , cetegory ,description) 
        //         VALUES ('${_id}','${name}',${price},'${date}','${cetegory}','${description}');
        //         `);
        //     db.query(Command , function (error , results) {
        //         if (error) {
        //             return console.error(error)
        //         } else {
        //             if (i % 70 === 0) console.log('Database create '+ i)
        //         }

        //     })
        // }
        await db.end()
    } catch (error) {
        console.error(error);
    }
}



async function dropTable() {
    const db = await mySqlConnection()
    await db.connect();
    await db.query('DROP TABLE products' ,function(error,results , feilds){
        if (error) {
            return console.error(error);
        }
        console.log('------------------------- results ----------------------------');
        console.log(results);
        console.log('------------------------- Feilds ----------------------------');
        console.log(feilds);
    });

    await db.end()
}


async function createTable2() {
    const db = await mySqlConnection()
    await db.connect();
    const Comand = (`
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    _id VARCHAR(100),
    name VARCHAR(100),
    price INT,
    date DATE,
    cetegory VARCHAR(100),
    description VARCHAR(2000),
    PRIMARY KEY(id)
);
`)
    await db.query(Comand,function(error,results , feilds){
        if (error) {
            return console.error(error);
        }
        console.log('------------------------- results ----------------------------');
        console.log(results);
        console.log('------------------------- Feilds ----------------------------');
        console.log(feilds);
    });

    await db.end()
}
// createTable2()


async function selectid() {
    const db = await mySqlConnection()
    await db.connect();
    await db.query('SELECT description FROM products' ,function(error,results , feilds){
        if (error) {
            return console.error(error);
        }
        console.log('------------------------- results ----------------------------');
        console.log(results);
        console.log('------------------------- Feilds ----------------------------');
        console.log(feilds);
    });
    await db.end()
}

async function getCetegoryCount() {
    let db = await mySqlConnection()
    db.query('SELECT count(cetegory),cetegory from products GROUP BY cetegory;', (error, rasult) => {
        rasult = rasult.map(el => el.cetegory);
        fs.writeFileSync('cetegory.json', JSON.stringify(rasult));
    });
    await db.end()
}