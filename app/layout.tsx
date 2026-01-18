import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const plus_jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sniff - Köpeğinle Sosyalleş",
  description: "Köpek sahipleri için harita tabanlı sosyalleşme uygulaması.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={plus_jakarta.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
