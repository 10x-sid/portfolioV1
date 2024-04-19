import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudhanshu Shekhar",
  description: "Sudhanshu Shekhar's Portfolio",
  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn.vectorstock.com/i/1000v/55/51/letter-s-ss-logo-vector-39425551.avif"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
