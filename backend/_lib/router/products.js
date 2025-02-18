//  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
//  InshaAllah, By his marcy I will Gain Success

import { Router } from "express";
import { mySqlConnection } from "../services/ConnectDb.js";
import catchError from "../services/catchError.js";
import { log as print, replaceMultySpace } from 'string-player'
import { giveRegexWord, removeCharecters } from "../services/removeCharectes.js";

const router = Router();

router.get('/', async function (req, res) {
   try {
      let pages = (isNaN(req.query.pages) === false ? req.query.pages : 0);
      let min = (isNaN(req.query.min) === false ? (req.query.min >= 1 ? req.query.min : 1) : 1);
      let max = (isNaN(req.query.max) === false ? (req.query.max >= 100 ? req.query.max : 100) : 100);
      let searchQuery = (req.query.query ? (req.query.query?.trim()?.length > 2 ? req.query.query : '*') : '*');
      let sortingQuery = req.query.sorting;
      let searchQueries = undefined;
      let cetegoryQuery = req.query.cetegories?.trim() ? replaceMultySpace(removeCharecters(req.query.cetegories)) : 'All';
      if (searchQuery !== '*') {
         searchQuery = replaceMultySpace(searchQuery);
         searchQuery = removeCharecters(searchQuery);
         searchQueries = searchQuery
            .split(' ')
            .filter(el => el.length > 2)
            .filter((el, index) => index <= 9)
            .map(el => giveRegexWord(el))
            .join('|');
      }
      let queries = [];
      let countCommnad = 'SELECT COUNT(id) FROM products';
      let productCommand = `SELECT * FROM products`;
      queries.push(`price >= ${min}`); // minimum price
      queries.push(`price <= ${max}`); // maximum price
      if (searchQuery !== '*') queries.push(`name REGEXP '${searchQueries}'`);
      if (cetegoryQuery !== 'All') queries.push(`cetegory = '${cetegoryQuery}'`);
      let limit = ' LIMIT 8'; //limit query
      let skip = '',sorting='';
      if (!isNaN(req.query.pages) && req.query.pages != '0') skip = ' OFFSET ' + req.query.pages * 8;
      if (sortingQuery === 'DESC') sorting =' ORDER BY date DESC';
      let db = await mySqlConnection();
      let products = await new Promise((resolve, reject) => {
         let command = productCommand + ' WHERE ' + queries.join(` AND `)+ sorting + limit  + skip + ';';
         print({productCommand :command})
         db.query(command, function (error, results, feilds) {
            if (error) return reject(error);
            resolve(results);
            return;
         })
      });
      let counts = await new Promise((resolve, reject) => {
         let command = countCommnad + ' WHERE ' + queries.join(` AND `) + ' ;';
         // print({countsCommand :command})
         db.query(command, function (error, results, feilds) {
            if (error) return reject(error);
            resolve(results[0]['COUNT(id)']);
            return;
         })
      });
      await db.end();
      return res.status(200).json({ products, counts })
   } catch (error) {
      catchError(res, error)
   }
});
export default router;