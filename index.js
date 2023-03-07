
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//routes
app.get('/', (req, res) => {
    res.send('Hello node api ')
})

mongoose.connect( 'mongodb://127.0.0.1:27017/test').then(()=>{
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error);
})

app.listen(3000, ()=>{
    console.log('The node API is running on: http://localhost:3000/');
})

