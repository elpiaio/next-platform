import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Content } from "@/components/ui/internal/content";
import { HeaderSimple } from "@/components/ui/internal/header-simple";
import { SideNav } from "@/components/ui/internal/side-nav/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen from-blue-500/60 to-slate-300/60 bg-gradient-to-tr flex justify-center`}>
        <div className="h-full w-full backdrop-blur-4 flex md:max-w-[1400px]">
          <SideNav />
          <div className="flex flex-col gap-7 flex-1 px-3">
            <HeaderSimple />
            <Content>
              {children}
            </Content>
          </div>
        </div>
      </body>
    </html>
  );
}
