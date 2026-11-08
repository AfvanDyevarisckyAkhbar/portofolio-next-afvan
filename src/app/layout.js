import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Afvan Dyevariscky Akhbar | portofolio",
    template: "%s | Afvan Dyevariscky Akhbar",
  },
  description: "portofolio Afvan Dyevariscky Akhbar, siswa SMK calon Junior Web Developer di kelas Industri UBIG",
};


export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-latar dark:bg-gray-900 text-gray-800 dark:text-gray-100 antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}