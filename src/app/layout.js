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
        className={`${poppins.variable} antialiased font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
