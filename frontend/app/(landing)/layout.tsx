import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/modules/landing/footer/Footer";
import Header from "@/components/modules/landing/header/Header";
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
          <div className="flex flex-col ">
            <Header/>
            <div >{children}</div>
            <Footer />
          </div>
        </ClerkProvider>
  );
}
