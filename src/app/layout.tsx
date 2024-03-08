import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import FullNavbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SessionProvider from "@/Hoc/SessionProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Motion",
  description: "Social Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider>
        <Providers>
          <FullNavbar />
          {children}
          <Footer />
          </Providers>
          </SessionProvider>
      </body>
    </html>
  );
}
