import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hopterlink Waitlist",
  description: "Join the hopterlink waitlist and be among the first to test the alpha versions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-center" containerClassName="text-xs font-bold text-center"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
