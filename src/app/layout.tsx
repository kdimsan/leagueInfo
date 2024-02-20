import type { Metadata } from "next";
import { Acme, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Providers } from "@/contexts/Providers";

const titleFont = Acme({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400"],
});

const mainFontFamily = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "League finder",
  description: "Find all you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${titleFont.variable} ${mainFontFamily.variable}`}
    >
      <body className="bg-neutral-900 text-zinc-100 px-5 py-4 lg:px-16 xl:px-32 font-main">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
