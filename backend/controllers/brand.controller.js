import { BrandService } from "../services/brand.service.js";


export const getAllBrands = async (req, res) => {
    try {
        const { data, message } = await BrandService.getBrands();
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createBrand = async (req, res) => {
    try {
        const brandData = req.body;
        const { data, message } = await BrandService.createBrand(brandData);
        res.status(201).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const updateBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const brandData = req.body;
        const { data, message } = await BrandService.updateBrand(id, brandData);
        res.status(200).json({ data, message });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, message } = await BrandService.deleteBrand(id);
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}