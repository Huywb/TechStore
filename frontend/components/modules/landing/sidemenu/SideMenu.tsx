'use client'
import { menuData } from "@/app/contants/data";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MediaContact from "../MediaContact";

interface SideMenuProps {
  isOpen: boolean;
  onClose: (state: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname()
  const handleCloseMenu = () => {
    onClose(false);
  };
  return (
    <div
      className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 h-screen flex left-0 z-20 w-full bg-black/40 shadow-xl hoverEffect text-white`}
    >
        <div className="flex flex-col p-2 bg-black min-w-72 max-w-96 h-screen z-40">
            <div className="p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold cursor-pointer text-white hoverEffect">TECHSTORE</h1>
                <X onClick={() => handleCloseMenu()} className="cursor-pointer text-gray-300 hover:text-white hoverEffect"></X>
            </div>

            <div className="flex flex-col px-4 py-2 space-y-4">
                {
                    menuData.map((item)=>(
                        <Link href={item.href} key={item.href} className={`${pathName === item.href && 'text-shop_light_green'} hover:text-shop_light_green hoverEffect`}>
                            {item.title}
                        </Link>
                    ))
                }
            </div>

            <MediaContact />
        </div>

        <div onClick={() => handleCloseMenu()} className="flex-1 w-full h-screen">

        </div>

    </div>
  );
};

export default SideMenu;
