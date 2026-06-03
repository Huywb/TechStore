export interface BrandType {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: ImageType[];
  createdAt: string;
  updatedAt: string;
}

export interface BrandRequest{
  title : string,
  slug: string,
  description: string,
  images: ImageType
}