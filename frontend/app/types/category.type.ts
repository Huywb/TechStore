

export interface CategoryType {
  id: string;
  title: string;
  slug: string;
  description: string;

  images: ImageType[];

  createdAt: Date;
  updatedAt: Date;

  products: Product[]; }

  export interface CategoryRequest {
    title: string,
    slug: string,
    description: string,
    images: ImageType
  }