import type { Metadata } from "next";
import SidebarAdmin from "@/components/modules/admin/SidebarAdmin";
import AdminHeader from "@/components/modules/admin/AdminHeader";


export const metadata: Metadata = {
  title: {
    template: "$s - TechStore online store",
    default: "TechStore online store",
  },
  description: "TechStore online, Tất cả các thứ bạn cần ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <div className="flex gap-6 text-black bg-gray-200">
        <div className="flex flex-col p-4 py-6 gap-4 bg min-w-64 bg-white fixed top-0">
            <h1 className="font-bold text-2xl text-shop_light_green">TECTSTORE Admin</h1>
            <SidebarAdmin/>
        </div>
        <div className="flex flex-col gap-2 w-full ml-64 p-4 px-6 min-h-screen">
            <AdminHeader />
            {children}
        </div>
    </div>
  );
}
