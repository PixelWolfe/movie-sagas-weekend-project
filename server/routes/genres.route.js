const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const axios = require('axios');

router.get('/', (req,res)=>{
    let queryString = `SELECT * FROM genres;`;

    pool.query(queryString)
        .then(response=>{
            res.send(response.rows);
        })
        .catch(error=>{
            console.log('Error with movies GET:', error);
            res.sendStatus(500);
        })
})

router.post('/', (req,res)=>{

    let queryString = `INSERT INTO "movie_genre" ("movie_id", "genre_id") VALUES ($1, $2);`;
    pool.query(queryString, [req.body.payload.description, req.body.payload.title, req.body.payload.id])
        .then(response=>{
            res.sendStatus(201);
        })
        .catch(error=>{
            console.log('error updating movie description', error);
            res.sendStatus(500);
        })
})

module.exports = router;