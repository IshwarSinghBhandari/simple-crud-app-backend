
import express from 'express';
import mongoose from 'mongoose';
import route from './routes/product.route.js';
import Product from './models/product.model.js';


const app = express()



mongoose.connect("mongodb+srv://admin:admin123@mycrud.g4pnc.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(() => {
        console.log("Connected Failed")
    })


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.json({
        getProduct:"/api/products/",
        getSingleProduct:"/api/products/:id",
        productCreat:"/api/products/:id",
        productUpdate:"/api/products/:id",
        productDelete:"/api/products/:id"

    })
})

app.use('/', route)



app.listen(9000, () => {
    console.log('Server is running at http://localhost:9000');
});