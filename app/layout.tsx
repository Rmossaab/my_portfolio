import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: "Mossaab Ratby | Cybersecurity Engineer",
  description: "Portfolio of Mossaab Ratby - Cybersecurity & Cloud Computing Engineering Student. Exploring SIEM, Network Defense, and Cloud Infrastructure.",
  keywords: ["Cybersecurity", "SOC", "SIEM", "Next.js", "Portfolio", "Cloud Computing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} relative min-h-screen selection:bg-primary selection:text-black`}>
        {/* Background Grid Elements */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-50"></div>
        <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-background to-background"></div>
        {children}
      </body>
    </html>
  );
}