import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAROS",
  description:
    "Investir de forma mais inteligente passa por aqui. Descomplicamos o mercado financeiro para uma análise completa e segura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={redHat.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
