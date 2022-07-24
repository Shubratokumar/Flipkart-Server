import express from 'express';
import { Connection } from './database/db.js';
const app = express();
const port = process.env.PORT || 7000;
import env from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
env.config();

// middlewares
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// assigning routes
app.use('/', Router);

const userName=process.env.DB_USER;
const passWord=process.env.DB_PASS

// Connecting Database
Connection(userName, passWord);

// Listening server port
app.listen(port, ()=> {
    console.log(`Flipkart server is running successfully on port ${port}`)
});

// Inserting data 
DefaultData()