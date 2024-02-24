import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/Sidebar/SideBar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Manrope({ subsets: ["latin"], weight: ["400", "700", "800"] });

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
          <main className=" w-[calc(100% - 15rem)] h-screen p-6 ml-60">
            {children}
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
