import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import { Footer, Header } from "@/components";

import "@/theme/typography.css";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "باما نوبت",
  description:
    "نوبت دهی پزشکی | سامانه رزرو نوبت اینترنتی بیمارستان و پزشکان | باما نوبت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main>{children}</main>
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <Footer />
      </body>
    </html>
  );
}
