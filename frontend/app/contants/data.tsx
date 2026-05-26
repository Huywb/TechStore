import { Box, Clock, GitCompareArrows, Headset, Home, Mail, MapPin, PanelBottomOpen, Phone, ShieldCheck, ShoppingCart, SlidersHorizontal, Tickets, Truck, User } from "lucide-react"


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

export const extraData = [
    {title: 'Free Delivery',description:'Free ship over $100',icon: <Truck size={35}/>},
    {title: 'Free Return',description:'Free ship over $100',icon: <GitCompareArrows size={35} />},
    {title: 'Customer Support',description:'Friendly 24/7 customer support',icon: <Headset size={35} />},
    {title: 'Money Back guarantee',description:'Quality checked by our team',icon: <ShieldCheck size={35} />},
]

export const PriceFilter = [
    {title:'High to Low',value:'asc'},
    {title:'Low to High',value:'desc'},
]


export const ModeProductInformation = [
    {title: "Description",value: 'description'},
    {title: "Additional Information",value: 'additional Information'},
    {title: "Reviews",value: 'reviews'},
]

export const ReviewDemo = [
    {name: 'Huy Pham' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",vote: 2},
    {name: 'Hang Pham' , description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",vote: 4},
]

export const AdminSidebarMenu = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon: <Home />
    },
{
        title: 'Products',
        href: '/admin/products',
        icon: <ShoppingCart />
    },{
        title: 'Categories',
        href: '/admin/categories',
        icon: <Box />
    },{
        title: 'Brands',
        href: '/admin/brands',
        icon: <PanelBottomOpen />
    },{
        title: 'Blogs',
        href: '/admin/blogs',
        icon: <SlidersHorizontal />
    },{
        title: 'Accounts',
        href: '/admin/accounts',
        icon: <User />
    },{
        title: 'Orders',
        href: '/admin/orders',
        icon: <Tickets />
    },
]

export const AdminProductTab = [
    {title: 'All ', value: 'all'},
    {title: 'Active ', value: 'active'},
    {title: 'InActive ', value: 'inactive'},
    {title: 'Deleted ', value: 'deleted'},
]


export enum ProductStatus {
  NEW = "NEW",
  HOT = "HOT",
  SALE = "SALE"
}

export enum VariantProduct {
  GADGET = "GADGET",
  APPLIANCES = "APPLIANCES",
  REFRIGERATORS = "REFRIGERATORS",
  OTHERS = "OTHERS"
}

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  PAID = "PAID",
  SHIPPED = "SHIPPED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED"
}

export enum PaymentMode {
  STRIPE = "STRIPE",
  PAYPAL = "PAYPAL",
  VNPAY = "VNPAY",
  MOMO = "MOMO"
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED"
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}
export const mockProducts = [
  {
    _id: "product-1",
    _createdAt: "2026-01-12T08:30:00Z",
    name: "Speak 710 Portable Speaker",
    slug: "speak-710-portable-speaker",
    description: "Portable bluetooth speaker with premium sound quality.",
    price: 150,
    discount: 10,
    stock: 10,
    status: "hot",
    variant: "gadget",
    isFeatured: true,
    brand: "JBL",
    category: "speaker",
    isActive: true,
    fullDescription:
      "High quality portable speaker with deep bass and crystal clear sound.",
    technicalDetails: [
      { key: "Battery", value: "12 Hours" },
      { key: "Bluetooth", value: "5.0" },
    ],
    images: [
      "/images/products/speaker-1.png",
      "/images/products/speaker-2.png",
    ],
  },

  {
    _id: "product-2",
    _createdAt: "2026-01-14T10:00:00Z",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    description: "Noise cancelling wireless headphones.",
    price: 399,
    discount: 15,
    stock: 25,
    status: "new",
    variant: "audio",
    isFeatured: true,
    brand: "Sony",
    category: "headphone",
    isActive: true,
    fullDescription:
      "Industry leading active noise cancelling headphones with premium comfort.",
    technicalDetails: [
      { key: "Battery", value: "30 Hours" },
      { key: "Weight", value: "250g" },
    ],
    images: [
      "/images/products/headphone-1.png",
      "/images/products/headphone-2.png",
    ],
  },

  {
    _id: "product-3",
    _createdAt: "2026-01-16T07:20:00Z",
    name: "iPhone 15 Pro Max",
    slug: "iphone-15-pro-max",
    description: "Apple flagship smartphone with A17 Pro chip.",
    price: 1299,
    discount: 5,
    stock: 8,
    status: "hot",
    variant: "phone",
    isFeatured: true,
    brand: "Apple",
    category: "smartphone",
    isActive: true,
    fullDescription:
      "Titanium design, powerful camera system, and exceptional performance.",
    technicalDetails: [
      { key: "Chip", value: "A17 Pro" },
      { key: "Storage", value: "256GB" },
    ],
    images: [
      "/images/products/iphone-1.png",
      "/images/products/iphone-2.png",
    ],
  },

  {
    _id: "product-4",
    _createdAt: "2026-01-18T12:10:00Z",
    name: "Samsung Galaxy S25 Ultra",
    slug: "samsung-galaxy-s25-ultra",
    description: "Premium Android flagship smartphone.",
    price: 1199,
    discount: 12,
    stock: 15,
    status: "sale",
    variant: "phone",
    isFeatured: false,
    brand: "Samsung",
    category: "smartphone",
    isActive: true,
    fullDescription:
      "Advanced camera system and high refresh rate AMOLED display.",
    technicalDetails: [
      { key: "Display", value: "120Hz AMOLED" },
      { key: "RAM", value: "12GB" },
    ],
    images: [
      "/images/products/samsung-1.png",
      "/images/products/samsung-2.png",
    ],
  },

  {
    _id: "product-5",
    _createdAt: "2026-01-20T09:45:00Z",
    name: "Asus ROG Strix G16",
    slug: "asus-rog-strix-g16",
    description: "Gaming laptop with RTX graphics.",
    price: 1799,
    discount: 20,
    stock: 5,
    status: "hot",
    variant: "laptop",
    isFeatured: true,
    brand: "Asus",
    category: "gaming-laptop",
    isActive: true,
    fullDescription:
      "Powerful gaming laptop designed for high performance gaming.",
    technicalDetails: [
      { key: "GPU", value: "RTX 4070" },
      { key: "CPU", value: "Intel i9" },
    ],
    images: [
      "/images/products/laptop-1.png",
      "/images/products/laptop-2.png",
    ],
  },

  {
    _id: "product-6",
    _createdAt: "2026-01-22T11:15:00Z",
    name: "Logitech G Pro X",
    slug: "logitech-g-pro-x",
    description: "Mechanical gaming keyboard.",
    price: 129,
    discount: 18,
    stock: 30,
    status: "sale",
    variant: "accessory",
    isFeatured: false,
    brand: "Logitech",
    category: "keyboard",
    isActive: true,
    fullDescription:
      "Professional gaming keyboard with customizable RGB lighting.",
    technicalDetails: [
      { key: "Switch", value: "GX Blue" },
      { key: "RGB", value: "Yes" },
    ],
    images: [
      "/images/products/keyboard-1.png",
      "/images/products/keyboard-2.png",
    ],
  },

  {
    _id: "product-7",
    _createdAt: "2026-01-24T13:00:00Z",
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    description: "Smartwatch with health tracking features.",
    price: 499,
    discount: 7,
    stock: 20,
    status: "new",
    variant: "watch",
    isFeatured: true,
    brand: "Apple",
    category: "smartwatch",
    isActive: false,
    fullDescription:
      "Advanced smartwatch with fitness and health monitoring.",
    technicalDetails: [
      { key: "Display", value: "OLED" },
      { key: "Water Resistant", value: "Yes" },
    ],
    images: [
      "/images/products/watch-1.png",
      "/images/products/watch-2.png",
    ],
  },

  {
    _id: "product-8",
    _createdAt: "2026-01-25T16:40:00Z",
    name: "Xiaomi Pad 7 Pro",
    slug: "xiaomi-pad-7-pro",
    description: "High performance Android tablet.",
    price: 599,
    discount: 10,
    stock: 12,
    status: "featured",
    variant: "tablet",
    isFeatured: false,
    brand: "Xiaomi",
    category: "tablet",
    isActive: false,
    fullDescription:
      "Slim design tablet perfect for entertainment and productivity.",
    technicalDetails: [
      { key: "Screen", value: "11 inch" },
      { key: "Battery", value: "10000mAh" },
    ],
    images: [
      "/images/products/tablet-1.png",
      "/images/products/tablet-2.png",
    ],
  },

  {
    _id: "product-9",
    _createdAt: "2026-01-27T08:00:00Z",
    name: "Razer DeathAdder V3",
    slug: "razer-deathadder-v3",
    description: "Ergonomic gaming mouse.",
    price: 89,
    discount: 5,
    stock: 40,
    status: "hot",
    variant: "accessory",
    isFeatured: false,
    brand: "Razer",
    category: "mouse",
    isActive: true,
    fullDescription:
      "Ultra lightweight gaming mouse with precision sensor.",
    technicalDetails: [
      { key: "DPI", value: "30000" },
      { key: "Weight", value: "59g" },
    ],
    images: [
      "/images/products/mouse-1.png",
      "/images/products/mouse-2.png",
    ],
  },

  {
    _id: "product-10",
    _createdAt: "2026-01-30T15:25:00Z",
    name: "Dell UltraSharp U2724D",
    slug: "dell-ultrasharp-u2724d",
    description: "Professional 27-inch monitor.",
    price: 699,
    discount: 14,
    stock: 9,
    status: "featured",
    variant: "monitor",
    isFeatured: true,
    brand: "Dell",
    category: "monitor",
    isActive: true,
    fullDescription:
      "High resolution IPS monitor designed for creators and professionals.",
    technicalDetails: [
      { key: "Resolution", value: "2K" },
      { key: "Refresh Rate", value: "120Hz" },
    ],
    images: [
      "/images/products/monitor-1.png",
      "/images/products/monitor-2.png",
    ],
  },
];

export const mockCategories = [
  {
    id: "clxk1a001category001",
    title: "Kitchen Appliances",
    slug: "kitchen-appliances",
    description:
      "High-quality kitchen appliances designed to make cooking easier and more efficient.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/kitchen-appliances.jpg",
        secure_id: "categories/kitchen-appliances",
      },
    ],

    createdAt: new Date("2026-01-12T08:30:00Z"),
    updatedAt: new Date("2026-05-10T06:32:08Z"),

    products: [],
  },

  {
    id: "clxk1a002category002",
    title: "Smartphones",
    slug: "smartphones",
    description:
      "Latest smartphones with powerful performance and long battery life.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/smartphones.jpg",
        secure_id: "categories/smartphones",
      },
    ],

    createdAt: new Date("2026-01-15T10:12:00Z"),
    updatedAt: new Date("2026-05-12T09:11:00Z"),

    products: [],
  },

  {
    id: "clxk1a003category003",
    title: "Gaming Laptops",
    slug: "gaming-laptops",
    description:
      "Powerful gaming laptops built for high FPS gaming and multitasking.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/gaming-laptops.jpg",
        secure_id: "categories/gaming-laptops",
      },
    ],

    createdAt: new Date("2026-01-18T07:45:00Z"),
    updatedAt: new Date("2026-05-14T02:15:00Z"),

    products: [],
  },

  {
    id: "clxk1a004category004",
    title: "Wireless Earbuds",
    slug: "wireless-earbuds",
    description:
      "Comfortable wireless earbuds with immersive audio quality.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/wireless-earbuds.jpg",
        secure_id: "categories/wireless-earbuds",
      },
    ],

    createdAt: new Date("2026-02-01T05:20:00Z"),
    updatedAt: new Date("2026-05-16T01:40:00Z"),

    products: [],
  },

  {
    id: "clxk1a005category005",
    title: "Smart Watches",
    slug: "smart-watches",
    description:
      "Stylish smart watches with fitness tracking and notifications.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/smart-watches.jpg",
        secure_id: "categories/smart-watches",
      },
    ],

    createdAt: new Date("2026-02-08T11:00:00Z"),
    updatedAt: new Date("2026-05-18T08:22:00Z"),

    products: [],
  },

  {
    id: "clxk1a006category006",
    title: "Home Speakers",
    slug: "home-speakers",
    description:
      "Premium home speakers delivering deep bass and crystal-clear sound.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/home-speakers.jpg",
        secure_id: "categories/home-speakers",
      },
    ],

    createdAt: new Date("2026-02-15T09:10:00Z"),
    updatedAt: new Date("2026-05-20T06:55:00Z"),

    products: [],
  },

  {
    id: "clxk1a007category007",
    title: "Office Accessories",
    slug: "office-accessories",
    description:
      "Modern office accessories to improve productivity and workspace setup.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/office-accessories.jpg",
        secure_id: "categories/office-accessories",
      },
    ],

    createdAt: new Date("2026-02-20T04:25:00Z"),
    updatedAt: new Date("2026-05-22T03:18:00Z"),

    products: [],
  },
];