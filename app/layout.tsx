import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SideBar from "@/components/shared/Sidebar/SideBar";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body className={cn("bg-gray-50 dark:bg-zinc-900", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="">
              <SideBar />
              <Navbar />
              <div className=" w-[calc(100% - var(--sidebar-width))] min-h-screen p-6 ml-0 lg:ml-60 relative">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
