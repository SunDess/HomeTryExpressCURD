
const express = require('express');
const app = express();

const mongoose = require('mongoose');

const Product = require('./models/productModels')

const routes = require("./routes");

const port = 3000;

(async() => {
    await mongoose.connect( 'mongodb://127.0.0.1:27017/test').then(()=>{
        console.log('connected to MongoDB')
    }).catch((error) => {
        console.log(error);
    })
})


app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello node api ')
})

app.use('/api', routes);


app.listen(3000, ()=>{
    console.log(`The node API is running on: http://localhost:${port}/`);
})

