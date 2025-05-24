import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Home",
  description: "This is an app where you can list or delete your daily task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-background text-textDark`} >
        <Navbar/>
        <main className="pt-20 lg:pt-24">

        {children}
        </main>
      </body>
    </html>
  );
}
