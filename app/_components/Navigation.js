import Link from 'next/link';
import './nav.css';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlinePhone } from 'react-icons/hi2';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-list first-nav-list">
          <li>
            <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
              <HiOutlineHome />
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <HiOutlinePhone />
            </Link>
          </li>
          <li>
            <Link
              href="/inventory"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <HiOutlineShoppingBag />
            </Link>
          </li>
          <li>
            <Link
              href="/account"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <HiOutlineUserCircle />
            </Link>
          </li>
        </ul>

        <h1>WEAR AFRICA</h1>

        <ul className="nav-list second-nav-list">
          <li>
            <Link
              href="/about"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
