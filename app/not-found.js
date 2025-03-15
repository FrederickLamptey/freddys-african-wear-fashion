import Link from 'next/link';

function NotFound() {
  return (
    <main className="notfound-main">
      <h1 className="notfound-heading">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        style={{ textDecoration: 'none', color: 'white', display: 'inline-block', backgroundColor: "black", padding: "1rem 2rem" }}
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
