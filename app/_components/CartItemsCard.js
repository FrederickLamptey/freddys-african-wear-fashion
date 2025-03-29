import Image from 'next/image';
import Link from 'next/link';
import { Children } from 'react';
import './cartItemsCard.css';
import DeleteCartItem from './DeleteCartItem';

function CartItemsCard({ item, onDelete }) {
  const {
    id,
    created_at,
    itemPrice,
    guestId,
    inventoryId,
    inventory: { name, image, department, description },
  } = item;
  return (
    <li className="cart-list">
      <div>
        <Image src={image} height="270" width="230" alt={`Your ${name}`} />
      </div>
      <div className="cart-item-general">
        <div className="cart-item-impo">
          <h3 className="cart-item-name">{name}</h3>
          <h4 className="cart-item-price">{`$${itemPrice}`}</h4>
        </div>
        <div className="cart-item-extra-info">
          <p className="cart-item-description">{`Color: ${description}`}</p>
          <p className="cart-item-department">{`Department: ${department}`}</p>
        </div>
      </div>
      <div>
        <DeleteCartItem cartItemId={id} onDelete={onDelete} />
      </div>
    </li>
  );
}

export default CartItemsCard;
