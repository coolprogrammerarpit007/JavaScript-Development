`use strict`;

// const express = require('express');
const jokes = [
    {
      id: 1,
      joke: "Why don't skeletons fight each other? They don't have the guts."
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
      id: 3,
      joke: "Why don't eggs tell jokes? They might crack up."
    },
    {
      id: 4,
      joke: "What do you call fake spaghetti? An impasta!"
    },
    {
      id: 5,
      joke: "Why did the math book look sad? Because it had too many problems."
    }
  ];
  
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


app.get('/home',(req,res)=>{
    res.send('Welcome to this home page!');
});

app.get('/test',(req,res)=>{
    res.send(`This is a testing site! `);
});

app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
});

app.listen(port,(req,res)=>{
    console.log(`app is listening at ${port}`);
});

// 1. when serving api write api before the route -> /api/jokes
// CORS error is occoured when your frontend url and backend url is on different url so you need to whitelist the IP
// to resolve cors error we set proxy from frontend site.