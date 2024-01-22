console.log("Jai Shree Ram");

require('dotenv').config()                              // 4>
const express = require('express')                      //1> OR--- import express from "express"
const app = express()
const port = 3000                                       //2> We can change the port

app.get('/', (req, res) => {                            //3> if you are on http://localhost:3000--- response hello world
  res.send('Hello World!')
})

app.get('/user', (req,res) => {
  res.send("User's Page");
})

app.get('/somehtml', (req,res) => {
    res.send("<h1> Hi I'm Aman </h1>");
})

app.listen(process.env.PORT, () => {                                               //5> Deafult port structure befor installing dotenv- port, () =>{}
  console.log(`Example app listening on port ${port}`)
})