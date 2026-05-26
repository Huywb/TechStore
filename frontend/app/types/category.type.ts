export interface ImageType {
  secure_url: string;
  secure_id: string;
}

export interface CategoryType {
  id: string;
  title: string;
  slug: string;
  description: string;

  images: ImageType[];

  createdAt: Date;
  updatedAt: Date;

  products: Product[]; // hoặc any[] nếu chưa có ProductType
}