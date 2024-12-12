import Product from "../models/product.model.js";


const getProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const productCreat = async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products)
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const productUpdate = async (req, res) => {
    try {
        const { id } = req.params
        const products = await Product.findByIdAndUpdate(id, req.body);

        if (!products) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updateproduct = await Product.findByIdAndUpdate(id);
        res.status(200).json(updateproduct);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const productDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id, req.body);
        if (!products) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updateproduct = await Product.findByIdAndDelete(id);
        res.status(200).json(updateproduct);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export {
    getProduct,
    getSingleProduct,
    productCreat,
    productUpdate,
    productDelete
}