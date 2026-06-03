import { Blog } from "@/sanity.types";

export interface BlogProps{
    blog: Blog
}

export interface BlogSlugRequest {
    slug: string
}

export interface BlogType {
  id: string
  title: string
  slug: string
  images: ImageType[]
  url: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface BlogRequest {
    title:string,
    slug:string,
    images: ImageType,
    url: string,
    description: string
}