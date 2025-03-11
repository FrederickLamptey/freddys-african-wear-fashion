import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <p>Help</p>
          <ul>
            <li>
              You can contact our available client serices at +1 (908) 346 0365
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>The Company</p>
        <ul>
          <li>
            <Link href="#">About Wear Africa</Link>
          </li>
          <li>
            <Link href="#">Corporate Information</Link>
          </li>
        </ul>
      </div>

      <div>
        <p>Wear Africa Services</p>
        <ul>
          <li>
            <Link href="#">Book an Appointment</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
