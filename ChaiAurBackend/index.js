`use strict`;

require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('Hello Backend!');
})

app.get('/twitter',(req,res)=>{
    res.send(`This is my twiter profile.`)
})

app.get('/login',(req,res)=>{
    res.send('Welcome to login page');
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

console.log(`PORT from env: ${port}`);