import Navigation from "./_components/Navigation";
import "./_styles/styles.css";

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
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}