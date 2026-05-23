import { BlogService } from "../services/blog.service.js";


export const getAllBlogs = async (req, res) => {
    try {
        const { data, message } = await BlogService.getBlogs();
        res.status(200).json({ data, message });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const getBlogBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const { data, message } = await BlogService.getBlogBySlug(slug);
        res.status(200).json({ data, message });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const createBlog = async (req, res) => {
    try {
        const blogData = req.body;
        const { data, message } = await BlogService.createBlog(blogData);
        res.status(201).json({ data, message });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blogData = req.body;
        const { data, message } = await BlogService.updateBlog(id, blogData);
        res.status(200).json({ data, message });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }   
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, message } = await BlogService.deleteBlog(id);
        res.status(200).json({ data, message });
    }
    catch (error) {
        res.status(404).json({ error: error.message });
    }
}