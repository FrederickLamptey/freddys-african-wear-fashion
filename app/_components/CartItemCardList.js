'use client';
import CartItemsCard from './CartItemsCard';
import { useOptimistic } from 'react';
import { deleteCartItem } from '../_lib/actions';

function CartItemCardList({ cartItems }) {
  const [optimisticCartItems, optimisticDelete] = useOptimistic(
    cartItems,
    (cartItems, cartItemId) => {
      return cartItems.filter((item) => item.id !== cartItemId);
    }
  );

  async function handleDelete(cartItemId) {
    optimisticDelete(cartItemId);
    await deleteCartItem(cartItemId);
  }

  return (
    <ul>
      {optimisticCartItems.map((item) => (
        <CartItemsCard item={item} key={item.id} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default CartItemCardList;
