import { Poppins } from "next/font/google";
import "./globals.css";


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
            <h1 className="md:text-3xl text-2xl font-bold text-green-700 tracking-tight">MdBlogs</h1>
            <span className="text-xs text-gray-400 font-mono">by Maruf H.</span>
          </div>
        </header>
        <main className="flex-1 w-full flex flex-col items-center justify-start">
          <div className="w-full max-w-7xl px-2 md:px-0 py-2">{children}</div>
        </main>
      </body>
    </html>
  );
}
