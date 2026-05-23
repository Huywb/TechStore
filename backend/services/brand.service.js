import { prisma } from "../lib/prisma";


export const BrandService = {

    // Lấy tất cả brand
    getBrands: async () => {
        try {
            const brands = await prisma.brand.findMany();
            if (!brands) {
                throw new Error("No brands found");
            }

            return { data: brands, message: "Brands retrieved successfully" };
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Tạo brand mới
    createBrand: async (brandData) => {
        try {
            const { title, slug, description, images } = brandData;
            const newBrand = await prisma.brand.create({
                data: {
                    title,
                    slug,
                    description,
                    images,
                },
            });
            return { data: newBrand, message: "Brand created successfully" };
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Cập nhật brand
    updateBrand: async (id, brandData) => {
        try {
            const brand = await prisma.brand.findUnique({
                where: { id },
            });
            if (!brand) {
                throw new Error("Brand not found");
            }
            const updatedBrand = await prisma.brand.update({
                where: { id },
                data: brandData,
            });
            return { data: updatedBrand, message: "Brand updated successfully" };
        } catch (error) {
            throw new Error(error.message);
        }
    },

    // Xóa brand    
    deleteBrand: async (id) => {    
        try {
            const brand = await prisma.brand.findUnique({
                where: { id },
            });
            if (!brand) {
                throw new Error("Brand not found");
            }
            const deletedBrand = await prisma.brand.delete({
                where: { id },
            });
            return { data: deletedBrand, message: "Brand deleted successfully" };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}