import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Zamyatin | Full-Stack Engineer",
  description: "Independent Full-Stack Engineer specializing in Next.js, Shopify, AI (Gemini/OpenAI), n8n Automation, Docker/DigitalOcean",
  keywords: ["Full-Stack Developer", "Next.js", "Shopify", "AI", "Gemini", "OpenAI", "Docker", "DigitalOcean"],
  authors: [{ name: "Daniel Zamyatin" }],
  openGraph: {
    title: "Daniel Zamyatin | Full-Stack Engineer",
    description: "Independent Full-Stack Engineer | Next.js, Shopify, AI (Gemini/OpenAI), n8n Automation, Docker/DigitalOcean",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
