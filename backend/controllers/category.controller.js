import { CategoryService } from "../services/category.service.js";


export const getAllCategories = async (req, res) => {
    try {
        const { data, message } = await CategoryService.getCategories();
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const { data, message } = await CategoryService.createCategory(categoryData);
        res.status(201).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const categoryData = req.body;
        const { data, message } = await CategoryService.updateCategory(id, categoryData);
        res.status(200).json({ data, message });
    }
        catch (error) { 
        res.status(404).json({ error: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, message } = await CategoryService.deleteCategory(id);
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

