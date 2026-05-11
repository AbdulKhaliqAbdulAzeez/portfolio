import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abdul Khaliq Abdul Azeez | Cloud Engineering Portfolio",
  description:
    "Cloud engineering portfolio for Abdul Khaliq Abdul Azeez, a junior Information Technology student focused on Linux, networking, automation, Terraform, infrastructure as code, and secure systems.",
  openGraph: {
    title: "Abdul Khaliq Abdul Azeez | Cloud Engineering Portfolio",
    description:
      "Junior IT student pursuing cloud engineering through Linux, networking, automation, Terraform, and infrastructure projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full text-slate-100 font-sans">{children}</body>
    </html>
  );
}
