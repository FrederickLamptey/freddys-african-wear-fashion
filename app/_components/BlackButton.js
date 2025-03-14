import Link from 'next/link';
import './blackButton.css';

function BlackButton({ children, href = '' }) {
  return (
    <Link href={href} className="button">
      {children}
    </Link>
  );
}

export default BlackButton;
