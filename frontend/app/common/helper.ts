

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