const express = require('express');
const path = require('path');
//require('dotenv').config();
const cors = require('cors')
 const port = process.env.PORT || 5678
 const app = express()

 app.use(express.json());
 app.use(cors());
 

 // include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '1fee6eb7963e4f34a6cd77f47a80b046',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(rollbar.errorHandler());


app.get('/', (req, res) =>{
    rollbar.info('HTML served!')
    res.sendFile(path.join(__dirname, '/home.html'))
})

app.use('/main', express.static(path.join(__dirname, '/main.js')))



 app.listen(port, ()=>{
     console.log("listening on port " + port)
 })
