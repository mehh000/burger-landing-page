import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import RespnsiveNav from "@/Components/Navigation/RespnsiveNav";

const barlow_Condensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burger Landing page",
  description: "burger landing page by himal hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <RespnsiveNav />
        {children}</body>
    </html>
  );
}
