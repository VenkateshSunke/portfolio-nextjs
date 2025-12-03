import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProbatProvider } from "@probat/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Your Name",
  description: "Personal portfolio website showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProbatProvider>
          {children}
        </ProbatProvider>
      </body>
    </html>
  );
}