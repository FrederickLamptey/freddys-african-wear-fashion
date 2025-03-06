import Navigation from "./_components/Navigation";

export const metadata = {
  title: "Wear Africa",
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