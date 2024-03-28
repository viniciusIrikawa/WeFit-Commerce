import type { Metadata } from "next";
import "./globals.css";


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
      <body>{children}</body>
    </html>
  );
}
