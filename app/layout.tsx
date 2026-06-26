import type { Metadata } from "next";
import { Molle, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const molle = Molle({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-display",
});

const syne = Syne({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Etienne & Lucia — July 29 – August 1, 2027",
  description: "Save the date for our wedding weekend retreat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${molle.variable} ${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
