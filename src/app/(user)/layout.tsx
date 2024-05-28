'use client';
import 'swiper/swiper.min.css';
import { Navbar } from '@/components/Navbar/NavBar';
import { theme } from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import AppContextProvider from '@src/context/AppContext';
import { Footer } from '@src/components/Footer/Footer';
import { ThemeProvider } from '@/ThemeContext';
import Testimonial from '@src/features/home/TestimonSlider';
import ContactUs from '@src/components/Contact/Contact';
import CountryDropdown from '@src/components/Contact/CountryDropdown';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <head>
        <title>All Shop</title>
        <meta title="description" content="Buy anything online" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="shopping_cart.png"
        />
        <link rel="stylesheet" href="./index.css" />
      </head>
      <body>
        <ThemeProvider>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <AppContextProvider>
                <Navbar />
                {children}
                <ContactUs />
                {/* <CountryDropdown /> */}
                <Testimonial />
                <Footer />
              </AppContextProvider>
            </ChakraProvider>
          </CacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}