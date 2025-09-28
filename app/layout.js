import "./globals.css";
import { Vazirmatn } from 'next/font/google';
import { LanguageProvider } from './contexts/LanguageContext';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata = {
  title: "گلدن لایف - خدمات VIP",
  description: "تجربه‌ای منحصر به فرد از خدمات VIP",
  icons: {
    icon: '/SiteLogo.png.png',
    shortcut: '/SiteLogo.png.png',
    apple: '/SiteLogo.png.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css" 
        />
        <script 
          src="https://unpkg.com/swiper@8/swiper-bundle.min.js" 
          defer
        ></script>
        <link rel="preload" href="/authentication" as="document" />
      </head>
      <body className={vazirmatn.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
