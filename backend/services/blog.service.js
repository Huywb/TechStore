import { prisma } from "../lib/prisma";

export const BlogService = {
  //Lấy tất cả blog
  getBlogs: async () => {
    const allBlogs = await prisma.blog.findMany();
    if (!allBlogs) {
      throw new Error("No blogs found");
    }
    return { data: allBlogs, message: "Blogs retrieved successfully" };
  },

  //Lấy blog theo slug
  getBlogBySlug: async (slug) => {
    const blog = await prisma.blog.findUnique({
      where: { slug },
    });
    if (!blog) {
      throw new Error("Blog not found");
    }
    return { data: blog, message: "Blog retrieved successfully" };
  },

  //Tạo blog mới
  createBlog: async (blogData) => {
    const { title, slug, description, images } = blogData;
    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        description,
        images,
      },
    });
    return { data: newBlog, message: "Blog created successfully" };
  },

  // Cập nhật blog
  updateBlog: async (id, blogData) => {
    const { title, slug, description, images } = blogData;
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug,
        description,
        images,
      },
    });
    return { data: updatedBlog, message: "Blog updated successfully" };
  },

  // Xóa blog
  deleteBlog: async (id) => {
    await prisma.blog.delete({
      where: { id },
    });
    return { message: "Blog deleted successfully" };
  },
};
