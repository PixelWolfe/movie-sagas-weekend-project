const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const axios = require('axios');

router.get('/', (req,res)=>{
    res.sendStatus(201);
})


module.exports = router;