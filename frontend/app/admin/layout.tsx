import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";


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
        <ClerkProvider>
          <div className="flex flex-col w-full h-screen ">
           {children}
          </div>
        </ClerkProvider>
  );
}
