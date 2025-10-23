import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore - allow importing global CSS in Next.js app directory
import "./globals.css";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fsk",
  description: "Fsk Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        <Toaster
          position="bottom-right"
          expand={false}
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
