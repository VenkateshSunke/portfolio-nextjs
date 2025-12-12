import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProbatProviderClient } from "@probat/react";

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
        <ProbatProviderClient 
          apiBaseUrl="https://gushi.onrender.com"
          clientKey="" 
          environment="prod"
          repoFullName="VenkateshSunke/portfolio-nextjs"
        >
          {children}
        </ProbatProviderClient>
      </body>
    </html>
  );
}