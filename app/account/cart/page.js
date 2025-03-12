import Link from "next/link";
import "./cart.css";

export const metadata = {
  title: 'Cart',
};

export default function Page() {
  return (
    <>
      <div className="cart-page-container">
        <h2 className="cart-heading">Your Purchases</h2>
        <p className="cart-content-empty">
          Your cart is empty. Check out{' '}
          <Link href="/" style={{ color: '#1864ab' }}>
            items
          </Link>
        </p>
      </div>
    </>
  );
}
