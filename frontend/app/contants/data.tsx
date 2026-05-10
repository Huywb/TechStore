import { Clock, Mail, MapPin, Phone } from "lucide-react"


export const menuData = [
    {title: "Home",href: '/'},
    {title: "Shop",href: '/shop'},
    {title: "Blog",href: '/blog'},
    {title: "Contact",href: '/contact'},
    {title: "Hot Deal",href: '/deal'},
]

export const footerTopData = [
    {title:"Visit Us",description:'Ngu Hanh Son, Da Nang',icon: <MapPin className="cursor-pointer h-6 w-6 text-gray-600 hover:text-primary transition-colors"></MapPin>},
    {title:"Phone",description:'tel - 039372727',icon: <Phone className="cursor-pointer h-6 w-6 text-gray-600 hover:text-primary transition-colors"></Phone>},
    {title:"Working Hours",description:'Mon - Sat: 10:00 AM - 7:00 PM',icon: <Clock className="cursor-pointer h-6 w-6 text-gray-600 hover:text-primary transition-colors"></Clock>},
    {title:"Email Us",description:'TechStore@gmail.com',icon: <Mail className="cursor-pointer h-6 w-6 text-gray-600 hover:text-primary transition-colors"></Mail>},
]

export const subMenuQuichAccessData = [
    {title:'About Us', url: '/about'},
    {title:'Contact us', url: '/contact'},
    {title:'Terms & Conditions', url: '/terms'},
    {title:'Privacy Policy', url: '/privacy'},
    {title:'FAQs', url: '/faqs'},
    {title:'Help', url: '/help'},
]

export const subMenuCategoriesData = [
    {title:'Mobiles', url: 'mobiles'},
    {title:'Appliances', url: 'appliances'},
    {title:'Smartphones', url: 'smartphones'},
    {title:'Air Conditioners', url: 'air-conditioners'},
    {title:'Washing Machine', url: 'washing-machine'},
    {title:'Kitchen Appliaces', url: 'kitchen-appliances'},
    {title:'Gadget Accessories', url: 'gadget-accessories'},
]


export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];