

interface ProductBySelectedRequest {
    variant?: string
}

interface ProductByCategoriesRequest {
    slug? : string
}

interface PriceFilter {
    title: string,
    value: string
}

interface ProductFilterRequest {
    filterCategories?: string[] ,
    filterBrands?: string[] ,
    filterPrices?:  "asc" | "desc",
}

interface ProductSlugRequest{
    slug: string
}

interface ProductImage {
    secure_url: string,
    secure_id: string
}

interface ProductTechnicalDetails {
    key: string,
    value: string
}


interface Product {
    _id:string;
  _createdAt: string;

  name: string;
  slug: string;
  description: string;

  price: number;
  discount: number;
  stock: number;

  status: string;
  variant: string;

  isFeatured: boolean;

  brand: string;
  category: string;

  isActive: boolean;

  fullDescription: string;

  technicalDetails: ProductTechnicalDetails[];

  images: ImageType[];
}

