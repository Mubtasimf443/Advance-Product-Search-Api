/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
Insha Allah,  By his marcy I will Gain Success 
*/


import MySQL from 'mysql'
import { DB_DATABASE_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_URI, DB_USER } from './env.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));



export function mySqlConnection() {
    return MySQL.createConnection({
        host:DB_HOST,
        port:DB_PORT,
        user:DB_USER,
        password:DB_PASSWORD,
        database : DB_DATABASE_NAME
    })
}
// await con.connect(function(error){
//     if (error) {
//         console.error(error);
//     }
// })




