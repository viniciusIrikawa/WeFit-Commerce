import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { ProductsProvider } from "@/Context/ContextProducts";

export const metadata: Metadata = {
  title: "WeMovies",
  description: "Movie E-commerce by WeFit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProductsProvider>
          <Header/>
          {children}
        </ProductsProvider>
      </body>
    </html>
  );
}
