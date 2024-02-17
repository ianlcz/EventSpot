import PrelineScript from "@/app/components/PrelineScript";
import type { Metadata, Viewport } from "next";
import Footer from "./components/Footer.component";
import Navbar from "./components/NavBar/NavBar.component";
import { poppins } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | EventSpot",
    default: "EventSpot",
  },
  description:
    "Découvrez, partagez, vivez la culture française avec EventSpot.",
  authors: [{ name: "ianlcz", url: "https://ianlcz.io" }],
  metadataBase: new URL("https://eventspot.ianlcz.io"),
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
    <body
      className={`${poppins.className} max-w-5xl min-h-screen mx-auto px-4 xl:px-0 flex flex-col justify-between bg-white dark:bg-slate-800`}
    >
      <header className='flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm'>
        <Navbar />
      </header>

      <main id='content' role='main' className='h-fit mt-4 lg:mt-8 font-light'>
        {children}
      </main>

      <Footer />
    </body>

    <PrelineScript />
  </html>
);

export default RootLayout;
