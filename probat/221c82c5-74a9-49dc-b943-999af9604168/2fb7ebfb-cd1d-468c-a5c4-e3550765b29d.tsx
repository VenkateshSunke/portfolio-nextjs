import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Your Name",
  description: "Personal portfolio website showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", minHeight: "100vh", padding: "0 20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}