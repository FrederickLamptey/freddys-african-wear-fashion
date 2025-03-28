'use client';
import { deleteCartItem } from '../_lib/actions';
import { HiOutlineTrash } from 'react-icons/hi';
import './deleteCartItem.css';

function DeleteCartItem({ cartItemId }) {
  return (
    <button
      className="cart-item-delete-btn"
      onClick={() => deleteCartItem(cartItemId)}
    >
      <HiOutlineTrash /> <span>Remove</span>
    </button>
  );
}

export default DeleteCartItem;
