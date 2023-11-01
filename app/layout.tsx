import Category from "@/components/Category";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Taste from "@/components/Taste";
import Swiper from "@/components/Swiper";
import Share from "@/components/Share";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F0f0F0] h-screen text-[#000]">
        <Header />
        <Hero />
        <Category />
        <Taste />
        {/* <Swiper /> */}
        <Share />
        {children}
      </body>
    </html>
  );
}
