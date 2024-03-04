import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/Sidebar/SideBar";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/shared/Navbar/Navbar";

const inter = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Managify",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <SideBar />
          <Navbar />
          <main className=" w-[calc(100% - var(--sidebar-width))] h-screen p-6 ml-0 lg:ml-60 relative bg-gray-50 dark:bg-zinc-500">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
