import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

// Vercel supplies these domains; local development needs no configuration.
const deploymentDomain =
  process.env.VERCEL_ENV === "preview"
    ? process.env.VERCEL_URL
    : process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(
    deploymentDomain ? `https://${deploymentDomain}` : "http://localhost:3000",
  ),
  title: "Mossaab Ratby | Cybersecurity & Cloud Computing",
  description:
    "Cybersecurity and Cloud Computing engineering student at ENSAM Casablanca. AWS Certified Cloud Practitioner, building cloud security and SOC automation tools. Seeking a PFE internship in January 2027.",
  keywords: [
    "Mossaab Ratby",
    "Cybersecurity",
    "Cloud Security",
    "SOC",
    "AWS",
    "ENSAM Casablanca",
    "PFE Internship",
  ],
  openGraph: {
    title: "Mossaab Ratby | Cybersecurity & Cloud Computing",
    description:
      "Cloud security, threat detection, and SOC automation. ENSAM Casablanca · PFE internship from January 2027.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
