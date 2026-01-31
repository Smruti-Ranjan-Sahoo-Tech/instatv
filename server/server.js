require('dotenv').config();
const mongoose=require('mongoose');
const app=require("./src/app");
const connectDB = require('./src/config/db');

const PORT=process.env.PORT || 8000;
connectDB()


app.listen(PORT, () => {
    console.log(`http:localhost:${PORT}`)
}) 