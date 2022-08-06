import express from 'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userLogin, userSignup } from './../controller/user-controller.js';
import { addPaymentGateway } from './../controller/payment-controller.js';

const router = express.Router();

// Auth route
router.post("/signup", userSignup);
router.post("/login", userLogin);

// Product route
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// Payment route
router.post('/payment', addPaymentGateway);

export default router;