import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { ThemeProvider } from "@/components/global/Provider";
import { Inter } from "next/font/google";
import CursorEffect from "@/components/ui/CursorEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SamCux",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased bg-sa-light-bg text-sa-light-accent dark:bg-sa-dark-bg dark:text-sa-dark-text-main">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div>{children}</div>
          <CursorEffect />
        </ThemeProvider>
      </body>
    </html>
  );
}