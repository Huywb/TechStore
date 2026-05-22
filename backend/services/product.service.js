import { prisma } from "../lib/prisma";


export const ProductService = {

    // Lấy tất cả sản phẩm
    async getAllProducts() {
        const allProducts = await prisma.product.findMany()
        if(!allProducts) {
            throw new Error("No products found")
        }
        return { data: allProducts, message: "Products retrieved successfully" }
    },

    // Lấy sản phẩm theo slug
    async getProductBySlug(slug) {
        const product = await prisma.product.findUnique({
            where: { slug }
        });
        if (!product) {
            throw new Error("Product not found");
        }
        return { data: product, message: "Product retrieved successfully" };
    },

    // Tạo sản phẩm mới
    async createProduct(productData) {
        const { name,slug, description, price,discount,stock,status,variant,isFeatured, brand,category,images,isActive,fullDescription,technicalDetails } = productData;
        const newProduct = await prisma.product.create({
            data: {
                name,
                slug,
                description,
                price,
                discount,
                stock,
                status,
                variant,
                isFeatured,
                brand,
                category,
                images,
                isActive,
                fullDescription,
                technicalDetails
            }
        });
        if (!newProduct) {
            throw new Error("Failed to create product");
        }
        return { data: newProduct, message: "Product created successfully" };
    },

    // Cập nhật sản phẩm
    async updateProduct(id, productData) {
        const product = await prisma.product.findUnique({
            where: { id }
        });
        if (!product) {
            throw new Error("Product not found");
        }
        const updatedProduct = await prisma.product.update({
            where: { id },
            data: productData
        });
        return { data: updatedProduct, message: "Product updated successfully" };
    },
    async deleteProduct(id) {
        const product = await prisma.product.findUnique({
            where: { id }
        });
        if (!product) {
            throw new Error("Product not found");
        }
        await prisma.product.delete({
            where: { id }
        });
        return { message: "Product deleted successfully" };
    }
}