'use client';
import { HiOutlineTrash } from 'react-icons/hi';
import './deleteCartItem.css';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteCartItem({ cartItemId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(() => onDelete(cartItemId));
  }
  return (
    <button className="cart-item-delete-btn" onClick={handleDelete}>
      {!isPending ? (
        <>
          <HiOutlineTrash /> <span>Remove</span>{' '}
        </>
      ) : (
        <span>
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteCartItem;
