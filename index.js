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
import { v4 as uuid } from 'uuid';

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

// Paytm payment
export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEB;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE'] = process.env.PAYTM_INDUSTRY_TYPE;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:7000/calback';
paytmParams['EMAIL'] = 'shuvo@gmail.com';
paytmParams['MOBILE_NO'] = '0123456789';
