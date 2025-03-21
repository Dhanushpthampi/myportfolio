import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dhanush P -Portfolio",
  description: "Portfolio of Dhanush P Thampi", 
  icons: {
    icon: "/favicon.ico", // Default favicon 
    shortcut: "/favicon-32x32.png", // Alternative favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
