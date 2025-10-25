import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Thomas",
  description: "Portfólio desenvolvido com Next.js, Material UI e TailwindCSS",
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
