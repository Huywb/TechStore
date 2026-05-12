"use client";
import { BlogProps } from "@/app/types/blog.type";
import { Blog } from "@/sanity.types";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import BlogCard from "./BlogCard";

const BlogGrid = ({ blog }: BlogProps) => {
  return (
    <AnimatePresence key={blog?._id}>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0.2 }}
      >
        <BlogCard blog={blog} />
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogGrid;
