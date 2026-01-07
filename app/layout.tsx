import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Order Confirmation - MedCart",
  description: "Your medicine order has been placed successfully. Track your order and view order details.",
  keywords: ["MedCart", "Order Confirmation", "Medicine Order", "Pharmacy"],
  authors: [{ name: "MedCart" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Order Confirmation - MedCart",
    description: "Your medicine order has been placed successfully",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}