import Link from 'next/link';
import './loginMessage.css';

function LoginMessage() {
  return (
    <div className="login-container">
      <p>You forgot to login first to add to bag.</p>
      <Link href="/account" style={{ color: 'black' }}>
        login 
      </Link>
    </div>
  );
}

export default LoginMessage;
