
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@/stylesheets/globals.css';

import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import ClientOnly from "@/components/ui/feature/ClientOnly";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import Footer from "@/components/Footer/Footer";

import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "react-hot-toast";
import ScrollToTop from "@/components/ui/ScrollToTop";

import { WhatsAppSolid } from "@/assets/svgs/socialSvg";

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
        <NextTopLoader color="#FF5956" height={3} showSpinner={false}/>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster/>
          <ClientOnly>
            {/* <Modal title="Hello world" isOpen/> */}
            <div className=" fixed bottom-10 right-3 cursor-pointer flex flex-col gap-3 z-50">
              <ScrollToTop/>
              <a href={`https://api.whatsapp.com/send?phone=${process.env.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="">
                <WhatsAppSolid height="2.5rem" width="2.5rem" fillColor="#FF5956" strokeWidth="0" strokeColor="currentColor"/>
              </a>
            </div>
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
