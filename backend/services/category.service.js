import { prisma } from "../lib/prisma";


export const CategoryService = {

    // Lấy tất cả category
  getCategories: async () => {
    const allCategories = await prisma.category.findMany();
    if (!allCategories) {
      throw new Error("No categories found");
    }
    return { data: allCategories, message: 'Categories retrieved successfully' };
  },

  // Tạo category mới
  createCategory: async (categoryData) => {
    const {title, slug, description, images} = categoryData;
    const newCategory = await prisma.category.create({
      data: {
        title,
        slug,
        description,
        images
      }
    });
    if (!newCategory) {
      throw new Error("Failed to create category");
    }
    return { data: newCategory, message: 'Category created successfully' };
  },   
    
    // Cập nhật category
    updateCategory: async (id, categoryData) => {
    const category = await prisma.category.findUnique({
      where: { id }
    });
    if (!category) {
        throw new Error("Category not found");
    }
    const categoryUpdate = await prisma.category.update({
      where: { id },
      data: categoryData
    });

    return { data: categoryUpdate, message: 'Category updated successfully' };
  }
    ,
    deleteCategory: async (id) => {
        const category = await prisma.category.findUnique({
          where: { id }
        });
        if (!category) {
            throw new Error("Category not found");
        }
        const deletedCategory = await prisma.category.delete({
          where: { id }
        });
        return { data: deletedCategory, message: 'Category deleted successfully' };
    }
}
