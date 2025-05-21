
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Contexts from "./contexts";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/page";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Tu tienda online favorita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="es" className={` ${inter.className}`}>
      <Contexts>
        <body className="w-full">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </body>
      </Contexts>
    </html>
  );
}
