import { Blog } from "@/sanity.types";

export interface BlogProps{
    blog: Blog
}

export interface BlogSlugRequest {
    slug: string
}

export interface BlogType {
  _id: string
  title: string
  slug: string
  images: ImageType[]
  url: string
  description: string
  createdAt: string
  updatedAt: string
}