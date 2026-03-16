import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binatti UI",
  description: "Binatti Community Design System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
