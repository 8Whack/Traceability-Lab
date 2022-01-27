const express = require('express');
const path = require('path');
//require('dotenv').config();
const cors = require('cors')
 const port = process.env.PORT || 5678
 const app = express()

 app.use(express.json());
 app.use(cors());
 app.use(rollbar.errorHandler(0));

 // include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8db0cb5e59d14d309370c75d73bf0c38',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './Site/home.html'))
})

 app.listen(port, ()=>{
     console.log("listening on port " + port)
 })
