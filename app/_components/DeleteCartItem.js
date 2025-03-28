'use client';
import { deleteCartItem } from '../_lib/actions';
import { HiOutlineTrash } from 'react-icons/hi';
import './deleteCartItem.css';
import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteCartItem({ cartItemId }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(() => deleteCartItem(cartItemId));
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
