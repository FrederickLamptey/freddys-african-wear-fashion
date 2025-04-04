import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";
import { auth } from "./_lib/auth";
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

export default async function RootLayout({ children }) {
  const session = await auth();
  const firstName = session?.user?.name.split(' ').at(0) ?? null;
  
  return (
    <html lang="en">
      <body className={josefin.className}>
        <header>
          <Navigation firstName={firstName} />
        </header>

        <main>{children}</main>
        <hr />
        <Footer />
      </body>
    </html>
  );
}