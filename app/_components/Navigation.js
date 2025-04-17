'use client';

import Link from 'next/link';
import './nav.css';
import { useState } from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlinePhone } from 'react-icons/hi2';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { FiMenu, FiX } from 'react-icons/fi';
// import { auth } from '../_lib/auth';

export default function Navigation({ firstName }) {
  const [isOpen, setIsOpen] = useState(false);

  // const session = await auth()

  // const firstName = session?.user?.name.split(" ").at(0) ?? null;
  // console.log(firstName)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <nav>
    //   <div className="nav-container">
    //     <button className="menu-toggle" onClick={toggleMenu}>
    //       {isOpen ? <FiX /> : <FiMenu />}
    //     </button>

    //     <ul className={`nav-list first-nav-list ${isOpen ? 'open' : ''}`}>
    //       <li>
    //         <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
    //           <HiOutlineHome />
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href="/contact"
    //           style={{ textDecoration: 'none', color: 'black' }}
    //         >
    //           <HiOutlinePhone />
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href="/cart"
    //           style={{ textDecoration: 'none', color: 'black' }}
    //         >
    //           <HiOutlineShoppingBag />
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href="/account/profile"
    //           style={{ textDecoration: 'none', color: 'black' }}
    //         >
    //           <HiOutlineUserCircle />
    //         </Link>
    //       </li>
    //     </ul>

    //     <h1 className="store-name">
    //       <Link
    //         href="/"
    //         className="nav-storeName-link"
    //         // style={{ textDecoration: 'none', color: 'black', display: 'block', width: 'auto' }}
    //       >
    //         WEAR AFRICA
    //       </Link>
    //     </h1>

    //     <ul className={`nav-list second-nav-list ${isOpen ? 'open' : ''}`}>
    //       {firstName ? (
    //         <li className="welcome-guest">Welcome, {firstName}</li>
    //       ) : (
    //         ' '
    //       )}
    //       <li>
    //         <Link
    //           href="/about"
    //           style={{ textDecoration: 'none', color: 'black' }}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href="/male"
    //           style={{ textDecoration: 'none', color: 'black' }}
    //         >
    //           Male
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           href="/female"
    //           style={{ textDecoration: 'none', color: 'black' }}
    //         >
    //           Female
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav>
      <div className="nav-container">
        <h1 className="store-name">
          <Link href="/" className="nav-storeName-link">
            WEAR AFRICA
          </Link>
        </h1>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li>
            <Link href="/" className="navlink">
              <div className="it-is-container">
                <HiOutlineHome /> <span className="it-is">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="navlink">
              <div className="it-is-container">
                <HiOutlinePhone /> <span className="it-is">Contact</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/cart" className="navlink">
              <div className="it-is-container">
                <HiOutlineShoppingBag /> <span className="it-is">Bag</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/account/profile" className="navlink">
              <div className="it-is-container">
                <HiOutlineUserCircle /> <span className="it-is">Profile</span>
              </div>
            </Link>
          </li>
          {firstName && <li className="welcome-guest">Welcome, {firstName}</li>}
          <li>
            <Link href="/about" className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link href="/male" className="navlink">
              Male
            </Link>
          </li>
          <li>
            <Link href="/female" className="navlink">
              Female
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
