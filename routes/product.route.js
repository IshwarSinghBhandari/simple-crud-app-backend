import express from 'express';
import { getProduct, getSingleProduct, productCreat,  productDelete,  productUpdate } from '../controller/product.controller.js';



 const allroute= express.Router();

allroute
.get('/api/products/', getProduct)
.get('/api/products/:id', getSingleProduct)
.post('/api/products', productCreat)
.put('/api/products/:id', productUpdate)
.delete('/api/products/:id', productDelete)

export default allroute