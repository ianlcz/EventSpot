import PrelineScript from "@/app/components/PrelineScript";
import type { Metadata, Viewport } from "next";
import Footer from "./components/Footer.component";
import Navbar from "./components/NavBar/NavBar.component";
import { montserrat } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "EventSpot",
  description:
    "Découvrez, partagez, vivez la culture française avec EventSpot.",
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='fr'>
    <body className={`${montserrat.className} bg-white dark:bg-gray-800`}>
      <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm dark:bg-gray-800'>
        <Navbar />
      </header>

      <main
        id='content'
        role='main'
        className='max-w-3xl min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8 dark:bg-gray-800'
      >
        {children}
      </main>

      <Footer />
    </body>

    <PrelineScript />
  </html>
);

export default RootLayout;
