import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HumYai",
  description: "HumYaiMak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href="/">
              <p>Home</p>
              </Link>            
            </li>
            <li>
              <Link href="/addUser">
              <p>Add User</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
              <p>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}