

//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import { mySqlConnection } from "./_lib/services/ConnectDb.js";
import {log as print} from 'string-player'
import fs from 'fs';

async function updateTable() {
    let db=await mySqlConnection();
    await db.query(`UPDATE products SET cetegory = 'Any' WHERE cetegory='undefined';`, (error, rasult) => {
        if (error) return console.error(error);
        console.log(rasult)
    });
    await db.end();
}
updateTable()