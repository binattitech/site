import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
