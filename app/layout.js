import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import "./_styles/styles.css";


import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: "%s | WEAR AFRICA",
    default: " WELCOME | WEAR AFRICA"
  },
  description: "Welcome to the motherland"
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <header>
          <Navigation />
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}