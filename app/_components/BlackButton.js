import Link from 'next/link';
import './blackButton.css';

function BlackButton({ children, href = '' }) {
  return (
    <Link href={href} className="btn">
      {children}
    </Link>
  );
}

export default BlackButton;
