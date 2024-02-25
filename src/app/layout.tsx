import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer | Sachin",
  description:
    "With 1 year and 9 months of experience, I specialize in crafting engaging front-end experiences, I excel in JavaScript, React, and Next.js, optimizing user journeys and resolving complex UI challenges. Experienced in agile methodologies and various UI frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
