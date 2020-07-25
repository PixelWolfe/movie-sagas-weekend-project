const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const axios = require('axios');

router.get('/', (req,res)=>{

    let queryString = `
        SELECT movies.id, title, poster, description, array_agg(name ORDER BY name ASC) 
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


module.exports = router;