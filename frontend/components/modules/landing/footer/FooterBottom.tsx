import Link from "next/link"
import MediaContact from "../MediaContact"
import SubMenuFooter from "./SubMenuFooter"
import { subMenuCategoriesData, subMenuQuichAccessData } from "@/app/contants/data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const FooterBottom = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-4 gap-2 py-6 px-4'>

        <div className='p-4 flex flex-col gap-2'>
            <h1 className="text-2xl font-bold text-shop_light_green">TECHSTORE</h1>
            <p className="text-sm text-gray-500">TechStore — nơi mang đến các sản phẩm điện tử, gaming gear và phụ kiện chính hãng hiệu năng mạnh mẽ và mức giá phù hợp cho mọi tín đồ công nghệ.</p>
            <MediaContact/>
        </div>

        <SubMenuFooter title="Quick Links" items={subMenuQuichAccessData}/>
        <SubMenuFooter title="Categories" items={subMenuCategoriesData}/>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Newsletter</h1>
          <p className="text-sm text-gray-500">Đăng ký ngay để trở thành người đầu tiên cập nhật những sản phẩm công nghệ mới nhất, ưu đãi hấp dẫn và xu hướng hiện đại cùng TechStore.</p>
          <Input required type="email" placeholder="Enter your email" className="h-10 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none outline-none"/>
          <Button className='h-10 cursor-pointer'>Subcribe</Button>
        </div>

    </section>
  )
}

export default FooterBottom
