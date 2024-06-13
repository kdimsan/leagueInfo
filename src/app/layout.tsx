import type { Metadata } from "next";
import { Acme, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Providers } from "@/contexts/Providers";
import Footer from "@/components/partials/footer/footer";
import Head from "next/head";

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

export default function RootLayout(props: {
  children: React.ReactNode;
  parallel: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${titleFont.variable} ${mainFontFamily.variable}`}
    >
      <meta
        name="google-adsense-account"
        content="ca-pub-6752140548955710"
      ></meta>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6752140548955710"
        crossOrigin="anonymous"
      ></script>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6752140548955710"
        crossOrigin="anonymous"
      ></script>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className="bg-[#131418] text-zinc-100 px-5 py-4 w-full font-main">
        <Providers>
          <Header />
          {props.children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
