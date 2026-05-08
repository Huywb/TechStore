import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/modules/landing/Footer";
import Header from "@/components/modules/landing/Header";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template: "$s - TechStore online store",
    default: "TechStore online store"
  },
  description: "TechStore online, Tất cả các thứ bạn cần ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" 
      suppressHydrationWarning={true} 
      data-lt-installed="true" className={cn("font-sans", geist.variable)}
    >
      <body className="font-popins antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
