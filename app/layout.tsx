import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconDashboard, IconGlass, IconHandLoveYou, IconHome, IconMessage, IconRoad, IconUser } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hopterlink Waitlist",
  description:
    "Join the hopterlink waitlist and be among the first to test the alpha versions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Vision",
      link: "/#vision",
      icon: (
        <IconGlass className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },{
      name: "What we Offer",
      link: "/#carousel",
      icon: (
        <IconHandLoveYou className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },{
      name: "Our Commitment",
      link: "/#commitment",
      icon: (
        <IconDashboard className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },{
      name: "Our Journey",
      link: "/#journey",
      icon: (
        <IconRoad className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <main>      <FloatingNav navItems={navItems}/>
        {children}</main>
        <Toaster
          position="top-center"
          containerClassName="text-xs font-bold text-center"
        />
      </body>
    </html>
  );
}
