import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Best Hand-Picked Deals from AliExpress - Best Finds VIP",
  description: "The Best Hand-Picked Deals from AliExpress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <header className="relatve z-10">
          <nav>
            <div className="bg-gray-900">
              <div className="mx-auto flex py-8 h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-white">
                <a href="/">
                  <h1 className="font-bold flex gap-1 text-xl">
                    <span>BestFinds</span>
                    <span className="px-1 rounded-sm bg-fuchsia-800">VIP</span>
                  </h1>
                </a>
                <nav className="flex gap-5">
                  <a href="/p" className="hover:underline underline-offset-2">
                    {" "}
                    All the finds
                  </a>
                </nav>
              </div>
            </div>
          </nav>
        </header>
        <main className="bg-gray-300 min-h-screen">{children}</main>
        <footer className="bg-gray-900">
          <div className="mx-auto py-5 max-w-7xl px-4 sm:px-6 lg:px-8 text-white text-center md:text-right text-md">
            <span>Copyright © {new Date().getFullYear()} bestfinds.vip</span>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
