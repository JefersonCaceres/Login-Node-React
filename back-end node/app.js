require('dotenv').config();
const {dbConnect} = require('./config/mongo');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;


app.use(cors());
app.use(express.json());
app.use('/api',require('./app/router/index'));
dbConnect();
app.listen(PORT,()=>{
    console.log("API lista por el puerto", PORT);
});