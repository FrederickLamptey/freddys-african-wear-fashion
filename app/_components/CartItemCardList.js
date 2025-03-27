"use client"
import CartItemsCard from './CartItemsCard';
function CartItemCardList({ cartItems }) {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItemsCard item={ item} key={item.id}/>
      ))}
    </ul>
  );
}

export default CartItemCardList;
