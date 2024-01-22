import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { UserContextProvider } from "@/contexts/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League finder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-100 px-5 py-4 lg:px-16 xl:px-32">
        <UserContextProvider>
          <Header />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
