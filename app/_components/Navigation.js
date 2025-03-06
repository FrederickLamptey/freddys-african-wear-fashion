import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/inventory">Inventory</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
