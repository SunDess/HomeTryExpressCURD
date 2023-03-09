const express = require('express');
const app = express();

const connectDb = require('./config/connectToDb');


const routes = require("./routes");
const port = 3000;

connectDb();

app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello node api ')
})

app.use('/api', routes);


app.listen(3000, ()=>{
    console.log(`The node API is running on: http://localhost:${port}/`);
})

