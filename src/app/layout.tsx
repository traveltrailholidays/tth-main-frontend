
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/stylesheets/globals.css';

import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import ClientOnly from "@/components/ui/feature/ClientOnly";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";

import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: "Travel Trail Holidays",
    template: "%s",
  },
  description: "Crafting unforgettable travel experiences. We take care of the details, so you can focus on making memories.",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-custom-sbl dark:bg-custom-sbd`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster/>
          <ClientOnly>
            {/* <Modal title="Hello world" isOpen/> */}
            <Header/>
          </ClientOnly>
          {children}
          <ClientOnly>
            <Footer/>
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
