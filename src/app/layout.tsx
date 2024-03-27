import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "WeFit Commerce",
  description: "E-commerce",
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
