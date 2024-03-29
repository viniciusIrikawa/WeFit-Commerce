import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";


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
        <Header/>
        {children}
      </body>
    </html>
  );
}
