import { Roboto_Slab } from 'next/font/google';

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-slab',
  display: 'swap',
})

export const metadata = {
  title: 'Devlogy',
  description: 'Portfolio and Blogs is called Devlogy',
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true} className={robotoslab.className} >
        {children}
      </body>
    </html>
  );
}
