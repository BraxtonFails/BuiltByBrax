import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuiltByBrax | Web Development Services",
  description: "Professional web development services by Braxton Fails. Creating modern, responsive websites for businesses and individuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
