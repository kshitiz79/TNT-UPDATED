import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/index.scss';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import WhatsAppButton from '@/components/whatsapp/Whatsapp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TNT Techies Guide',
  description: 'Provide Educational services for Students and Employees.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
<WhatsAppButton/>
        <Footer />

        {/* Elfsight Platform Script */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>

        {/* Elfsight Widgets */}
        <div
          className="elfsight-app-008044a5-0506-473c-8591-f8b12a2798c2 whatsapp-widget"
          data-elfsight-app-lazy
        ></div>

       
      </body>
    </html>
  );
}
