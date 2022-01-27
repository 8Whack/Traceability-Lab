const express = require('express');
const path = require('path');
 require('dotenv').config();
 const port = process.env.PORT || process.env.SERVER_PORT
 const app = express()

 app.get('/', (req, res) =>{
     res.sendFile(path.join(__dirname, '/home.html'))
 })

 app.use(express.json());

 app.listen(port, ()=>{
     console.log("listening on port " + port)
 })
