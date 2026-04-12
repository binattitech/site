import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Bricolage_Grotesque } from "next/font/google";
import "./design.css";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Binatti Community",
  description: "Mulheres de tecnologia em comunidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmMono.variable} ${bricolageGrotesque.variable}`}>
      <body>
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
