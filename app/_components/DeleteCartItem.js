'use client';
import { deleteCartItem } from '../_lib/actions';
import './deleteCartItem.css';

function DeleteCartItem({ cartItemId }) {
  return (
    <button
      className="cart-item-delete-btn"
      onClick={() => deleteCartItem(cartItemId)}
    >
      Remove
    </button>
  );
}

export default DeleteCartItem;
