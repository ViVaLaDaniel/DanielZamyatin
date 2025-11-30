import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
