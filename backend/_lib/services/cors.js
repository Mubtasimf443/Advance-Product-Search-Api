/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  Insha Allah 
By his marcy,  I will gain success
*/

import { request, response } from "express";
import catchError from "./catchError.js";


export default function cors(req=request , res=response, next ) {
    try {
        res.setHeader('Cross-Origin-Resource-Policy'  , 'cross-origin' );
        res.setHeader('Access-Control-Allow-Origin'  , ' http://localhost:5173' );
        res.setHeader('Access-Control-Allow-Methods'  , '*' );
        res.setHeader('Access-Control-Allow-Headers'  , '*' );
        res.setHeader('Access-Control-Allow-Credentials'  , 'true' );
        if (req.method.toLowerCase() === 'options') {
            return res.sendStatus(200)
        }
        next()
    } catch (error) {
        catchError(res, error)
    }
}