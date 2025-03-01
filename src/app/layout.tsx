import Header from './components/Header';
import Footer from './components/Footer';
import { Geist } from 'next/font/google';
import './styles/globals.css'; 

const geistSans = Geist({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata = {
  title: 'Gourmet Palace',
  description: 'A Restaurant Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={geistSans.variable}>
        <div className="layoutContainer">
          <Header /> 
          <main>{children}</main> 
        </div>
        <Footer /> 
      </body>
    </html>
  );
}
