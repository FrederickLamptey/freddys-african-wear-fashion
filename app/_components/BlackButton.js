import Link from 'next/link';
import './blackButton.css';

function BlackButton({ children}) {
  return (
    <button className="btn">
      {children}
    </button>
  );
}

export default BlackButton;
