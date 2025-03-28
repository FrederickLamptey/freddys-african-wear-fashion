import BlackButton from '@/app/_components/BlackButton';
import Image from 'next/image';
import { getItem, getItems } from '@/app/_lib/data-service';
import { auth } from '@/app/_lib/auth';
import LoginMessage from '@/app/_components/LoginMessage';
import { createCartItem } from '@/app/_lib/actions';

//setting page title
export async function generateMetadata({ params }) {
  const { name } = await getItem(params.itemId);
  return { title: `Item ${name}` };
}

export default async function Page({ params }) {
  const item = await getItem(params.itemId);
  const { id, name, department, regularPrice, discount, description, image } =
    item;
  const subTotal = regularPrice - discount;

  const status = 'unreceived';
  const isPaid = false;

  const selectedItemData = {
    itemPrice: subTotal,
    status,
    isPaid,
    inventoryId: id,
  };

  const createCartItemWithData = createCartItem.bind(null, selectedItemData);

  const session = await auth();

  return (
    <>
      <div className="item-review-container">
        <ul className="item-review-ul">
          <li className="item-review-li">
            <Image src={`${image}`} width="500" height="600" alt="" />
          </li>
        </ul>
        <div className="item-card-details">
          <h3 className="item-card-heading-1">{name}</h3>
          <h4 className="item-card-heading-2">
            <span className="item-card-span">ORIGINAL PRICE: </span>
            <span className="item-card-span-h4">{`$${regularPrice}`}</span>
          </h4>
          <div className="item-card-des-dep-container">
            <p className="item-card-description">
              <span className="item-card-span">DESCRIPTION: </span>
              <span className="item-card-span-2">{description}</span>
            </p>
            <p className="item-card-department">
              <span className="item-card-span">DEPARTMENT: </span>
              <span className="item-card-span-2">{department}</span>
            </p>
          </div>
          <p className="item-card-discount">
            <span className="item-card-span">DISCOUNT: </span>
            {`$${discount}`}
          </p>
          <p className="item-card-subtotal">
            <span className="item-card-span">SUBTOTAL: </span>
            {`$${subTotal}`}
          </p>
          {session?.user ? (
            <form action={createCartItemWithData}>
              <BlackButton>ADD TO SHOPPING BAG</BlackButton>
            </form>
          ) : (
            <LoginMessage />
          )}
          {/* <p className="item-card-model-description">
            MODEL SIZE: The model is 6ft tall.
          </p> */}
        </div>
      </div>
    </>
  );
}
