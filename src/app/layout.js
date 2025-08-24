import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Next.js Markdown Blog",
  description: "A simple blog built with Next.js and Markdown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-poppins overflow-hidden h-screen bg-gradient-to-br from-gray-100 via-white to-green-100 flex flex-col`}
      >
        <header className="w-full shadow-sm bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-green-700 tracking-tight">
              {/* <h1 className="md:text-3xl mb-0 leading-tight text-2xl font-bold text-green-700 tracking-tight">MD.Blogs</h1> */}
              <Image src={"/logo.png"} alt="Logo" width={40} height={40} className="inline-block mr-2 w-40 h-auto" unoptimized/>
              <span className="text-xs text-gray-300 font-mono inline-block">by Maruf H.</span>
            </Link>
            {/* upload button */}
            <Link href="/upload" className="bg-green-700 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-lg transition">
              Upload
            </Link>
          </div>
        </header>
        <main className="flex-1 w-full flex flex-col items-center justify-start">
          <div className="w-full max-w-7xl px-2 md:px-0 py-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
