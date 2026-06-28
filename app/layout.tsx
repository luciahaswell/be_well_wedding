import type { Metadata } from "next";
import { Molle, Syne, DM_Sans, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Etienne & Lucia — July 29 – August 1, 2027",
  description: "Save the date for our wedding weekend retreat.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💌</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${molle.variable} ${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
