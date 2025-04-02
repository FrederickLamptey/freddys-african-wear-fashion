import Link from 'next/link';
import './footer.css';
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <p className="footer-help">HELP</p>
          <ul className="footer-help-list-container">
            <li className="footer-help-list">
              Available client services at +1 (908) 346 0365
            </li>
            <li className="footer-help-list">
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-help">THE COMPANY</p>
          <ul className="footer-help-list-container">
            <li className="footer-help-list">
              <Link href="/about" style={{ textDecoration: 'none', color: 'black' }}>
                About Wear Africa
              </Link>
            </li>
            <li className="footer-help-list">
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>
                Corporate Information
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-help">WEAR AFRICA SERVICES</p>
          <ul className="footer-help-list-container">
            <li className="footer-help-list">
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>
                Book an Appointment
              </Link>
            </li>
            <li className="footer-help-list">
              <Link href="#" style={{ textDecoration: 'none', color: 'black' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='footer-hr' />
      <div className='footer-heading-container'>
        <p className='footer-heading'>WEAR AFRICA</p>
      </div>
    </footer>
  );
}
