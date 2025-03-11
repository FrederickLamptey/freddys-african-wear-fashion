import Link from 'next/link';
import './button.css';

function Button({ children, href='' }) {
  return <Link href={href}  className='button'>{children}</Link>;
}

export default Button;
