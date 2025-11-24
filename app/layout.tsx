import type { Metadata } from "next";
import React from "react";
import { withExperiment } from "../probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "../probat/index";
import { Inter } from "next/font/google";
import "./globals.css";

const __PROBAT_KEY__ = "app/layout.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Your Name",
  description: "Personal portfolio website showcasing projects and skills",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

// Probat Generate Lines.
export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(RootLayout as any, { proposalId: meta.proposalId, registry: reg })
    : RootLayout;
})();
