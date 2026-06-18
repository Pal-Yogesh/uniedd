import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uniedd — Learn Guitar & Music",
  description:
    "Master the art of guitar and music with interactive lessons, expert instructors, and a community of passionate musicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen">{children}
         <div className="fixed z-40 bottom-4 right-2 md:right-6 flex flex-col gap-4">
          <div className="relative w-14 h-14">
            {/* Ripple Background */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ripple"></span>

            {/* WhatsApp Button */}
            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-[#25D366] hover:scale-110 duration-300">
              <Link href="https://wa.me/917042209741">
                <FaWhatsapp className="text-2xl text-white" />
              </Link>
            </span>
          </div>
        </div>
      </body>
    </html>
  );
}
