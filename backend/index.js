//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import express from 'express'
import cors from './_lib/services/cors.js';
import {mySqlConnection} from './_lib/services/ConnectDb.js'
import productsRouter from './_lib/router/products.js'
import morgan from 'morgan';

const app=express();


app.use(cors);
app.use(morgan('dev'));
app.use('/products',productsRouter);

app.listen(4000 , function () {
    console.log('server listening SuccessFully');
})