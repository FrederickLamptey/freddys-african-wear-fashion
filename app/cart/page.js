import Link from 'next/link';
import { auth } from '../_lib/auth';
import { getPurchases } from '../_lib/data-service';
import CartItemCardList from '../_components/CartItemCardList';

export const metadata = {
  title: 'Cart',
};

export default async function Page() {
  const session = await auth();
  const cartItems = await getPurchases(session?.user?.guestId);

  return (
    <>
      <div className="cart-page-container">
        <h2 className="cart-heading">Your Shopping Bag</h2>
        {cartItems.length === 0 ? (
          <p className="cart-content-empty">
            Your cart is empty. Check out{' '}
            <Link href="/" style={{ color: '#1864ab' }}>
              items
            </Link>
          </p>
        ) : (
          <CartItemCardList cartItems={cartItems} />
        )}
      </div>
    </>
  );
}
