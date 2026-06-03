import { BrandType } from "../types/brand.type"


export const SortStringShow = (text:string)=>{
    if(!text)return
    return text.slice(0,20)
}

export const DateFormat = (date: string)=>{

    return new Date(date).toLocaleDateString("vi-VN")

}

export const Capitalize = (value: string) => {
    
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const getImageSrc = (image: ImageType) => {
  if (image instanceof File) {
    return URL.createObjectURL(image);
  }

  return image.secure_url;
};


export const ConvertOptions = (data : BrandType[]) =>{
  return data.map((item)=>({
    id: item.id,
    value: item.title
  }))
}

export const StatusOption = [
  {
    id: "NEW",
    value: "NEW"
  },
  {
    id: "HOT",
    value: "HOT"
  },
  {
    id: "SALE",
    value: "SALE"
  }
]

export const VariantOption = [
  {
    id: "GADGET",
    value: "GADGET"
  },
  {
    id: "APPLIANCES",
    value: "APPLIANCES"
  },
  {
    id: "REFRIGERATORS",
    value: "REFRIGERATORS"
  },
  {
    id: "OTHERS",
    value: "OTHERS"
  }
]