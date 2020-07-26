const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const axios = require('axios');

router.get('/', (req,res)=>{
    let queryString = `
    SELECT movies.id, title, poster, description, 
           array_agg(name ORDER BY name ASC) as genre_name_agg, 
           array_agg(genre_id ORDER BY genre_id ASC) as genre_id_agg 
    FROM movies
    JOIN movie_genre ON movie_genre.movie_id = movies.id
    JOIN genres ON genres.id = movie_genre.genre_id
    GROUP BY movies.id
    ORDER BY movies.title ASC;`;

    pool.query(queryString)
        .then(response=>{
            res.send(response.rows);
        })
        .catch(error=>{
            console.log('Error with movies GET:', error);
            res.sendStatus(500);
        })
})

router.put('/', (req,res)=>{

    let queryString = `UPDATE movies SET description=$1, title=$2 WHERE id=$3;`;

    pool.query(queryString, [req.body.payload.description, req.body.payload.title, req.body.payload.id])
        .then(response=>{
            res.sendStatus(201);
        })
        .catch(error=>{
            console.log('error updating movie description', error);
            res.sendStatus(500);
        })
})

router.delete('/', (req,res)=>{
    let queryString = `DELETE FROM movie_genre WHERE movie_id=$1 AND genre_id=$2;	`;

    console.log('req.body', req.body);

    pool.query(queryString,[req.body.payload.movie_id, req.body.payload.genre_id])
        .then(response=>{
            console.log('success deleting genre', response);
            res.sendStatus(200);
        })
        .catch(error=>{
            console.log('error deleting genre', error);
            res.sendStatus(500);
        })
})

module.exports = router;