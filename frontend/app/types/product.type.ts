

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