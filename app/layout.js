import "./global.css";
// import { Vazirmatn } from 'next/font/google';
import { LanguageProvider } from './contexts/LanguageContext';
import { UserProvider } from './contexts/UserContext';

// const vazirmatn = Vazirmatn({
//   subsets: ['arabic'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   display: 'swap',
// });

export const metadata = {
  title: "Golden Life",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
      <body>
        <LanguageProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
