import { ProductService } from "../services/product.service.js";


export const getAllProducts = async (req, res) => {
    try {
        const { data, message } = await ProductService.getAllProducts();
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const getProductBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const { data, message } = await ProductService.getProductBySlug(slug);
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const { data, message } = await ProductService.createProduct(productData);
        res.status(201).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const { data, message } = await ProductService.updateProduct(id, productData);
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, message } = await ProductService.deleteProduct(id);
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};