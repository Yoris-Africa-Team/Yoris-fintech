import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoris Application",
  description: "Yoris Application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#080604] text-white">
        {children}
      </body>
    </html>
  );
}
