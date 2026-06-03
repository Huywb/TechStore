import { Box, Clock, GitCompareArrows, Headset, Home, Mail, MapPin, PanelBottomOpen, Phone, ShieldCheck, ShoppingCart, SlidersHorizontal, Tickets, Truck, User } from "lucide-react"
import { EOrderStatus, EPaymentMode, EPaymentStatus, OrderType } from "../types/order.type"
import { ERole, UserType } from "../types/user.type"


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

export const AdminUserTab = [
  {title: 'All', value: 'all'},
  {title: 'Active', value: 'active'},
  {title: 'InActive', value: 'inactive'},
  {title: 'ADMIN', value: 'admin'},
  {title: 'USER', value: 'user'},
  {title: 'Deleted', value: 'deleted'},
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
      {
        secure_url: "/images/products/speaker-1.png",
        public_id: "products/speaker-1",
      },
      {
        secure_url: "/images/products/speaker-2.png",
        public_id: "products/speaker-2",
      },
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
      {
        secure_url: "/images/products/headphone-1.png",
        public_id: "products/headphone-1",
      },
      {
        secure_url: "/images/products/headphone-2.png",
        public_id: "products/headphone-2",
      },
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
      {
        secure_url: "/images/products/iphone-1.png",
        public_id: "products/iphone-1",
      },
      {
        secure_url: "/images/products/iphone-2.png",
        public_id: "products/iphone-2",
      },
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
      {
        secure_url: "/images/products/samsung-1.png",
        public_id: "products/samsung-1",
      },
      {
        secure_url: "/images/products/samsung-2.png",
        public_id: "products/samsung-2",
      },
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
      {
        secure_url: "/images/products/laptop-1.png",
        public_id: "products/laptop-1",
      },
      {
        secure_url: "/images/products/laptop-2.png",
        public_id: "products/laptop-2",
      },
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
      {
        secure_url: "/images/products/keyboard-1.png",
        public_id: "products/keyboard-1",
      },
      {
        secure_url: "/images/products/keyboard-2.png",
        public_id: "products/keyboard-2",
      },
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
      {
        secure_url: "/images/products/watch-1.png",
        public_id: "products/watch-1",
      },
      {
        secure_url: "/images/products/watch-2.png",
        public_id: "products/watch-2",
      },
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
      {
        secure_url: "/images/products/tablet-1.png",
        public_id: "products/tablet-1",
      },
      {
        secure_url: "/images/products/tablet-2.png",
        public_id: "products/tablet-2",
      },
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
      {
        secure_url: "/images/products/mouse-1.png",
        public_id: "products/mouse-1",
      },
      {
        secure_url: "/images/products/mouse-2.png",
        public_id: "products/mouse-2",
      },
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
      {
        secure_url: "/images/products/monitor-1.png",
        public_id: "products/monitor-1",
      },
      {
        secure_url: "/images/products/monitor-2.png",
        public_id: "products/monitor-2",
      },
    ],
  },
];

export const mockCategories = [
  {
    _id: "clxk1a001category001",
    title: "Kitchen Appliances",
    slug: "kitchen-appliances",
    description:
      "High-quality kitchen appliances designed to make cooking easier and more efficient.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/kitchen-appliances.jpg",
        public_id: "categories/kitchen-appliances",
      },
    ],

    createdAt: new Date("2026-01-12T08:30:00Z"),
    updatedAt: new Date("2026-05-10T06:32:08Z"),

    products: [],
  },

  {
    _id: "clxk1a002category002",
    title: "Smartphones",
    slug: "smartphones",
    description:
      "Latest smartphones with powerful performance and long battery life.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/smartphones.jpg",
        public_id: "categories/smartphones",
      },
    ],

    createdAt: new Date("2026-01-15T10:12:00Z"),
    updatedAt: new Date("2026-05-12T09:11:00Z"),

    products: [],
  },

  {
    _id: "clxk1a003category003",
    title: "Gaming Laptops",
    slug: "gaming-laptops",
    description:
      "Powerful gaming laptops built for high FPS gaming and multitasking.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/gaming-laptops.jpg",
        public_id: "categories/gaming-laptops",
      },
    ],

    createdAt: new Date("2026-01-18T07:45:00Z"),
    updatedAt: new Date("2026-05-14T02:15:00Z"),

    products: [],
  },

  {
    _id: "clxk1a004category004",
    title: "Wireless Earbuds",
    slug: "wireless-earbuds",
    description:
      "Comfortable wireless earbuds with immersive audio quality.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/wireless-earbuds.jpg",
        public_id: "categories/wireless-earbuds",
      },
    ],

    createdAt: new Date("2026-02-01T05:20:00Z"),
    updatedAt: new Date("2026-05-16T01:40:00Z"),

    products: [],
  },

  {
    _id: "clxk1a005category005",
    title: "Smart Watches",
    slug: "smart-watches",
    description:
      "Stylish smart watches with fitness tracking and notifications.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/smart-watches.jpg",
        public_id: "categories/smart-watches",
      },
    ],

    createdAt: new Date("2026-02-08T11:00:00Z"),
    updatedAt: new Date("2026-05-18T08:22:00Z"),

    products: [],
  },

  {
    _id: "clxk1a006category006",
    title: "Home Speakers",
    slug: "home-speakers",
    description:
      "Premium home speakers delivering deep bass and crystal-clear sound.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/home-speakers.jpg",
        public_id: "categories/home-speakers",
      },
    ],

    createdAt: new Date("2026-02-15T09:10:00Z"),
    updatedAt: new Date("2026-05-20T06:55:00Z"),

    products: [],
  },

  {
    _id: "clxk1a007category007",
    title: "Office Accessories",
    slug: "office-accessories",
    description:
      "Modern office accessories to improve productivity and workspace setup.",

    images: [
      {
        secure_url:
          "https://res.cloudinary.com/demo/image/upload/office-accessories.jpg",
        public_id: "categories/office-accessories",
      },
    ],

    createdAt: new Date("2026-02-20T04:25:00Z"),
    updatedAt: new Date("2026-05-22T03:18:00Z"),

    products: [],
  },
];

export const mockBrands = [
  {
    _id: "brand_1",
    title: "Apple",
    slug: "apple",
    description:
      "Apple is a global technology brand known for premium smartphones, laptops, and accessories.",
    images: [
      {
        public_id: "brands/apple-logo",
        secure_url:
          "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
      },
    ],
    createdAt: "2026-05-27T08:00:00.000Z",
    updatedAt: "2026-05-27T08:00:00.000Z",
  },

  {
    _id: "brand_2",
    title: "Samsung",
    slug: "samsung",
    description:
      "Samsung produces a wide range of electronics including smartphones, TVs, and home appliances.",
    images: [
      {
        public_id: "brands/samsung-logo",
        secure_url:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
    ],
    createdAt: "2026-05-27T08:00:00.000Z",
    updatedAt: "2026-05-27T08:00:00.000Z",
  },

  {
    _id: "brand_3",
    title: "Sony",
    slug: "sony",
    description:
      "Sony is a Japanese brand famous for entertainment, cameras, gaming, and audio devices.",
    images: [
      {
        public_id: "brands/sony-logo",
        secure_url:
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      },
    ],
    createdAt: "2026-05-27T08:00:00.000Z",
    updatedAt: "2026-05-27T08:00:00.000Z",
  },

  {
    _id: "brand_4",
    title: "Xiaomi",
    slug: "xiaomi",
    description:
      "Xiaomi offers affordable smartphones and smart home ecosystem products.",
    images: [
      {
        public_id: "brands/xiaomi-logo",
        secure_url:
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      },
    ],
    createdAt: "2026-05-27T08:00:00.000Z",
    updatedAt: "2026-05-27T08:00:00.000Z",
  },

  {
    _id: "brand_5",
    title: "JBL",
    slug: "jbl",
    description:
      "JBL specializes in portable speakers, headphones, and professional audio equipment.",
    images: [
      {
        public_id: "brands/jbl-logo",
        secure_url:
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      },
    ],
    createdAt: "2026-05-27T08:00:00.000Z",
    updatedAt: "2026-05-27T08:00:00.000Z",
  },
];


export const mockBlogs = [
  {
    _id: "blog_1",
    title: "Top 10 Mechanical Keyboards for Developers",
    slug: "top-10-mechanical-keyboards-for-developers",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
        public_id: "keyboard_blog_1",
      },
    ],
    url: "https://example.com/blog/mechanical-keyboards",
    description:
      "Discover the best mechanical keyboards for coding, gaming, and productivity in 2026.",
    createdAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-20T08:00:00Z",
  },

  {
    _id: "blog_2",
    title: "Why React Developers Love Next.js",
    slug: "why-react-developers-love-nextjs",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        public_id: "nextjs_blog_2",
      },
    ],
    url: "https://example.com/blog/react-nextjs",
    description:
      "Learn why Next.js has become one of the most popular frameworks for React developers.",
    createdAt: "2026-05-18T10:30:00Z",
    updatedAt: "2026-05-18T10:30:00Z",
  },

  {
    _id: "blog_3",
    title: "Best Setup for Front-end Developers",
    slug: "best-setup-for-frontend-developers",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        public_id: "setup_blog_3",
      },
    ],
    url: "https://example.com/blog/frontend-setup",
    description:
      "A complete guide to building a productive workspace for front-end development.",
    createdAt: "2026-05-15T12:00:00Z",
    updatedAt: "2026-05-15T12:00:00Z",
  },

  {
    _id: "blog_4",
    title: "Understanding TypeScript in 2026",
    slug: "understanding-typescript-in-2026",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        public_id: "typescript_blog_4",
      },
    ],
    url: "https://example.com/blog/typescript-guide",
    description:
      "Everything you need to know about TypeScript, from basics to advanced patterns.",
    createdAt: "2026-05-10T09:45:00Z",
    updatedAt: "2026-05-10T09:45:00Z",
  },

  {
    _id: "blog_5",
    title: "How to Optimize Website Performance",
    slug: "how-to-optimize-website-performance",
    images: [
      {
        secure_url:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        public_id: "performance_blog_5",
      },
    ],
    url: "https://example.com/blog/website-performance",
    description:
      "Improve loading speed, SEO, and user experience with these performance optimization techniques.",
    createdAt: "2026-05-05T14:20:00Z",
    updatedAt: "2026-05-05T14:20:00Z",
  },
]

export const mockOrderItems = [
  {
    _id: "order_item_1",
    quantity: 1,
    price: 250,

    productId: "product_1",
    product: {
      _id: "product_1",
      name: "Mechanical Keyboard",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      price: 250,
    },

    orderId: "order_1",

    createdAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-20T08:00:00Z",
  },

  {
    _id: "order_item_2",
    quantity: 2,
    price: 100,

    productId: "product_2",
    product: {
      _id: "product_2",
      name: "Gaming Mouse",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
      price: 100,
    },

    orderId: "order_1",

    createdAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-20T08:00:00Z",
  },

  {
    _id: "order_item_3",
    quantity: 1,
    price: 120,

    productId: "product_3",
    product: {
      _id: "product_3",
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      price: 120,
    },

    orderId: "order_2",

    createdAt: "2026-05-22T10:30:00Z",
    updatedAt: "2026-05-22T10:30:00Z",
  },

  {
    _id: "order_item_4",
    quantity: 3,
    price: 80,

    productId: "product_4",
    product: {
      _id: "product_4",
      name: "RGB Mouse Pad",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
      price: 80,
    },

    orderId: "order_3",

    createdAt: "2026-05-25T09:15:00Z",
    updatedAt: "2026-05-25T09:15:00Z",
  },
]

export const mockUsers : UserType[]  = [
  {
    _id: "user_1",
    clerkUserId: "clerk_123456",
    name: "Nguyen Van A",
    email: "nguyenvana@example.com",
    role: ERole.ADMIN,
    isActive: true,
    password: '123456',
    createdAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-20T08:00:00Z",
    orders: [
      {
       _id: "order_1",
    orderNumber: "ORD-2026-001",
    clerkUserId: "clerk_123456",
    customerName: "Nguyen Van A",
    email: "nguyenvana@example.com",
    userId: "user_1",

    paymentMode: EPaymentMode.PAYPAL,
    paymentStatus: EPaymentStatus.PAID,
    totalPrice: 450,
    amountDiscount: 20,
    currency: "USD",
    orderStatus: EOrderStatus.DELIVERED,

    addressShippingId: "address_1",
    addressShipping: {
      id: "address_1",
      customerName: "Nguyen Van A",
      address: "12 Nguyen Trai",
    },

    createdAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-20T08:00:00Z",

    orderItems: [
      {
        _id: "order_item_1",
        quantity: 1,
        price: 250,

        productId: "product_1",
        product: {
          _id: "product_1",
          name: "Mechanical Keyboard",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
              public_id: "product_1",
            },
          ],
        },

        orderId: "order_1",
        createdAt: "2026-05-20T08:00:00Z",
        updatedAt: "2026-05-20T08:00:00Z",
      },

      {
        _id: "order_item_2",
        quantity: 2,
        price: 100,

        productId: "product_2",
        product: {
          _id: "product_2",
          name: "Gaming Mouse",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1527814050087-3793815479db",
              public_id: "product_2",
            },
          ],
        },

        orderId: "order_1",
        createdAt: "2026-05-20T08:00:00Z",
        updatedAt: "2026-05-20T08:00:00Z",
      },
    ],
      },
    ],
  },

  {
    _id: "user_2",
    clerkUserId: "clerk_654321",
    name: "Tran Thi B",
    email: "tranthib@example.com",
    role: ERole.USER,
    isActive: true,
    createdAt: "2026-05-18T10:30:00Z",
    updatedAt: "2026-05-18T10:30:00Z",
    orders: [
      {
        _id: "order_3",
    orderNumber: "ORD-2026-003",
    clerkUserId: "clerk_333333",
    customerName: "Le Van C",
    email: "levanc@example.com",
    userId: "user_3",

    paymentMode: EPaymentMode.CASH,
    paymentStatus: EPaymentStatus.PENDING,
    totalPrice: 150,
    amountDiscount: 10,
    currency: "USD",
    orderStatus: EOrderStatus.PENDING,

    addressShippingId: "address_3",
    addressShipping: {
      id: "address_3",
      customerName: "Le Van C",
      address: "78 Tran Hung Dao",
    },

    createdAt: "2026-05-17T09:00:00Z",
    updatedAt: "2026-05-17T09:00:00Z",

    orderItems: [
      {
        _id: "order_item_4",
        quantity: 3,
        price: 50,

        productId: "product_4",
        product: {
          _id: "product_4",
          name: "RGB Mouse Pad",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
              public_id: "product_4",
            },
          ],
        },

        orderId: "order_3",
        createdAt: "2026-05-17T09:00:00Z",
        updatedAt: "2026-05-17T09:00:00Z",
      },
    ],
      },
    ],
  },

  {
    _id: "user_3",
    clerkUserId: "clerk_789456",
    name: "Le Minh C",
    email: "leminhc@example.com",
    role: ERole.USER,
    isActive: true,
    createdAt: "2026-05-15T12:00:00Z",
    updatedAt: "2026-05-15T12:00:00Z",
    orders: [
      {
        _id: "order_3",
    orderNumber: "ORD-2026-003",
    clerkUserId: "clerk_333333",
    customerName: "Le Van C",
    email: "levanc@example.com",
    userId: "user_3",

    paymentMode: EPaymentMode.CASH,
    paymentStatus: EPaymentStatus.PENDING,
    totalPrice: 150,
    amountDiscount: 10,
    currency: "USD",
    orderStatus: EOrderStatus.PENDING,

    addressShippingId: "address_3",
    addressShipping: {
      id: "address_3",
      customerName: "Le Van C",
      address: "78 Tran Hung Dao",
    },

    createdAt: "2026-05-17T09:00:00Z",
    updatedAt: "2026-05-17T09:00:00Z",

    orderItems: [
      {
        _id: "order_item_4",
        quantity: 3,
        price: 50,

        productId: "product_4",
        product: {
          _id: "product_4",
          name: "RGB Mouse Pad",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
              public_id: "product_4",
            },
          ],
        },

        orderId: "order_3",
        createdAt: "2026-05-17T09:00:00Z",
        updatedAt: "2026-05-17T09:00:00Z",
      },
    ],
      }
    ],
  },

  {
    _id: "user_4",
    clerkUserId: "clerk_456789",
    name: "Pham Hoang D",
    email: "phamhoangd@example.com",
    role: ERole.USER,
    isActive: true,
    createdAt: "2026-05-10T09:45:00Z",
    updatedAt: "2026-05-10T09:45:00Z",
    orders: [
      {
    _id: "order_4",
    orderNumber: "ORD-2026-004",
    clerkUserId: "clerk_444444",
    customerName: "Pham Thi D",
    email: "phamthid@example.com",
    userId: "user_4",

    paymentMode: EPaymentMode.PAYPAL,
    paymentStatus: EPaymentStatus.FAILED,
    totalPrice: 500,
    amountDiscount: 50,
    currency: "USD",
    orderStatus: EOrderStatus.CANCELLED,

    addressShippingId: "address_4",
    addressShipping: {
      id: "address_4",
      customerName: "Pham Thi D",
      address: "99 Hai Ba Trung",
    },

    createdAt: "2026-05-16T08:00:00Z",
    updatedAt: "2026-05-16T08:00:00Z",

    orderItems: [
      {
        _id: "order_item_5",
        quantity: 1,
        price: 500,

        productId: "product_5",
        product: {
          _id: "product_5",
          name: "UltraWide Monitor",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
              public_id: "product_5",
            },
          ],
        },

        orderId: "order_4",
        createdAt: "2026-05-16T08:00:00Z",
        updatedAt: "2026-05-16T08:00:00Z",
      },
    ],
  },
    ],
  },

  {
    _id: "user_5",
    name: "Hoang Huy",
    email: "hoanghuy@example.com",
    role: ERole.USER,
    isActive: false,
    createdAt: "2026-05-05T14:20:00Z",
    updatedAt: "2026-05-05T14:20:00Z",
    orders: [{
    _id: "order_5",
    orderNumber: "ORD-2026-005",
    clerkUserId: "clerk_555555",
    customerName: "Hoang Van E",
    email: "hoangvane@example.com",
    userId: "user_5",

    paymentMode: EPaymentMode.CARD,
    paymentStatus: EPaymentStatus.PAID,
    totalPrice: 220,
    amountDiscount: 15,
    currency: "USD",
    orderStatus: EOrderStatus.PROCESSING,

    addressShippingId: "address_5",
    addressShipping: {
      id: "address_5",
      customerName: "Hoang Van E",
      address: "15 Nguyen Hue",
    },

    createdAt: "2026-05-15T07:00:00Z",
    updatedAt: "2026-05-15T07:00:00Z",

    orderItems: [
      {
        _id: "order_item_6",
        quantity: 2,
        price: 110,

        productId: "product_6",
        product: {
          _id: "product_6",
          name: "Bluetooth Speaker",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1545454675-3531b543be5d",
              public_id: "product_6",
            },
          ],
        },

        orderId: "order_5",
        createdAt: "2026-05-15T07:00:00Z",
        updatedAt: "2026-05-15T07:00:00Z",
      },
    ],
  },],
  },
]
export const mockOrders = [
  {
    _id: "order_1",
    orderNumber: "ORD-2026-001",
    clerkUserId: "clerk_123456",
    customerName: "Nguyen Van A",
    email: "nguyenvana@example.com",
    userId: "user_1",

    paymentMode: EPaymentMode.PAYPAL,
    paymentStatus: EPaymentStatus.PAID,
    totalPrice: 450,
    amountDiscount: 20,
    currency: "USD",
    orderStatus: EOrderStatus.DELIVERED,

    addressShippingId: "address_1",
    addressShipping: {
      id: "address_1",
      customerName: "Nguyen Van A",
      address: "12 Nguyen Trai",
    },

    createdAt: "2026-05-20T08:00:00Z",
    updatedAt: "2026-05-20T08:00:00Z",

    orderItems: [
      {
        _id: "order_item_1",
        quantity: 1,
        price: 250,

        productId: "product_1",
        product: {
          _id: "product_1",
          name: "Mechanical Keyboard",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
              public_id: "product_1",
            },
          ],
        },

        orderId: "order_1",
        createdAt: "2026-05-20T08:00:00Z",
        updatedAt: "2026-05-20T08:00:00Z",
      },

      {
        _id: "order_item_2",
        quantity: 2,
        price: 100,

        productId: "product_2",
        product: {
          _id: "product_2",
          name: "Gaming Mouse",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1527814050087-3793815479db",
              public_id: "product_2",
            },
          ],
        },

        orderId: "order_1",
        createdAt: "2026-05-20T08:00:00Z",
        updatedAt: "2026-05-20T08:00:00Z",
      },
    ],
  },

  {
    _id: "order_2",
    orderNumber: "ORD-2026-002",
    clerkUserId: "clerk_222222",
    customerName: "Tran Thi B",
    email: "tranthib@example.com",
    userId: "user_2",

    paymentMode: EPaymentMode.CARD,
    paymentStatus: EPaymentStatus.PAID,
    totalPrice: 320,
    amountDiscount: 0,
    currency: "USD",
    orderStatus: EOrderStatus.SHIPPING,

    addressShippingId: "address_2",
    addressShipping: {
      id: "address_2",
      customerName: "Tran Thi B",
      address: "45 Le Loi",
    },

    createdAt: "2026-05-18T10:00:00Z",
    updatedAt: "2026-05-18T10:00:00Z",

    orderItems: [
      {
        _id: "order_item_3",
        quantity: 1,
        price: 120,

        productId: "product_3",
        product: {
          _id: "product_3",
          name: "Wireless Headphones",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
              public_id: "product_3",
            },
          ],
        },

        orderId: "order_2",
        createdAt: "2026-05-18T10:00:00Z",
        updatedAt: "2026-05-18T10:00:00Z",
      },
    ],
  },

  {
    _id: "order_3",
    orderNumber: "ORD-2026-003",
    clerkUserId: "clerk_333333",
    customerName: "Le Van C",
    email: "levanc@example.com",
    userId: "user_3",

    paymentMode: EPaymentMode.CASH,
    paymentStatus: EPaymentStatus.PENDING,
    totalPrice: 150,
    amountDiscount: 10,
    currency: "USD",
    orderStatus: EOrderStatus.PENDING,

    addressShippingId: "address_3",
    addressShipping: {
      id: "address_3",
      customerName: "Le Van C",
      address: "78 Tran Hung Dao",
    },

    createdAt: "2026-05-17T09:00:00Z",
    updatedAt: "2026-05-17T09:00:00Z",

    orderItems: [
      {
        _id: "order_item_4",
        quantity: 3,
        price: 50,

        productId: "product_4",
        product: {
          _id: "product_4",
          name: "RGB Mouse Pad",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
              public_id: "product_4",
            },
          ],
        },

        orderId: "order_3",
        createdAt: "2026-05-17T09:00:00Z",
        updatedAt: "2026-05-17T09:00:00Z",
      },
    ],
  },

  {
    _id: "order_4",
    orderNumber: "ORD-2026-004",
    clerkUserId: "clerk_444444",
    customerName: "Pham Thi D",
    email: "phamthid@example.com",
    userId: "user_4",

    paymentMode: EPaymentMode.PAYPAL,
    paymentStatus: EPaymentStatus.FAILED,
    totalPrice: 500,
    amountDiscount: 50,
    currency: "USD",
    orderStatus: EOrderStatus.CANCELLED,

    addressShippingId: "address_4",
    addressShipping: {
      id: "address_4",
      customerName: "Pham Thi D",
      address: "99 Hai Ba Trung",
    },

    createdAt: "2026-05-16T08:00:00Z",
    updatedAt: "2026-05-16T08:00:00Z",

    orderItems: [
      {
        _id: "order_item_5",
        quantity: 1,
        price: 500,

        productId: "product_5",
        product: {
          _id: "product_5",
          name: "UltraWide Monitor",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
              public_id: "product_5",
            },
          ],
        },

        orderId: "order_4",
        createdAt: "2026-05-16T08:00:00Z",
        updatedAt: "2026-05-16T08:00:00Z",
      },
    ],
  },

  {
    _id: "order_5",
    orderNumber: "ORD-2026-005",
    clerkUserId: "clerk_555555",
    customerName: "Hoang Van E",
    email: "hoangvane@example.com",
    userId: "user_5",

    paymentMode: EPaymentMode.CARD,
    paymentStatus: EPaymentStatus.PAID,
    totalPrice: 220,
    amountDiscount: 15,
    currency: "USD",
    orderStatus: EOrderStatus.PROCESSING,

    addressShippingId: "address_5",
    addressShipping: {
      id: "address_5",
      customerName: "Hoang Van E",
      address: "15 Nguyen Hue",
    },

    createdAt: "2026-05-15T07:00:00Z",
    updatedAt: "2026-05-15T07:00:00Z",

    orderItems: [
      {
        _id: "order_item_6",
        quantity: 2,
        price: 110,

        productId: "product_6",
        product: {
          _id: "product_6",
          name: "Bluetooth Speaker",
          images: [
            {
              secure_url:
                "https://images.unsplash.com/photo-1545454675-3531b543be5d",
              public_id: "product_6",
            },
          ],
        },

        orderId: "order_5",
        createdAt: "2026-05-15T07:00:00Z",
        updatedAt: "2026-05-15T07:00:00Z",
      },
    ],
  },
]