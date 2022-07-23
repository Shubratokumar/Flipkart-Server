import express from 'express';
import { Connection } from './database/db.js';
const app = express();
const port = process.env.PORT || 7000;
import env from 'dotenv';
env.config();

const userName=process.env.DB_USER;
const passWord=process.env.DB_PASS

// Connecting Database
Connection(userName, passWord);


app.listen(port, ()=> {
    console.log(`Flipkart server is running successfully on port ${port}`)
})