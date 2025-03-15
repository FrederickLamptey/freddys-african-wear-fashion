import BlackButton from '@/app/_components/BlackButton';
import Image from 'next/image';
import './itemid.css';
import { getItem } from '@/app/_lib/data-service';

//setting page title
export async function generateMetadata({params}) {
  const { name } = await getItem(params.itemId);
  return {title: `Item ${name}`}
}

export default async function Page({ params }) {
  const item = await getItem(params.itemId)
  const { id, name, department, regularPrice, discount, description, image } =
    item;
  const subTotal = regularPrice - discount;

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
              <span className="item-card-span">ORIGINAL PRICE: </span>$
              {regularPrice}
            </h4>
            <div className="item-card-des-dep-container">
              <p className="item-card-description">
                <span className="item-card-span">DESCRIPTION: </span>
                {description}
              </p>
              <p className="item-card-department">
                <span className="item-card-span">DEPARTMENT: </span>
                {department}
              </p>
            </div>
            <p className="item-card-discount">
              <span className="item-card-span">DISCOUNT: </span>${discount}
            </p>
            <p className="item-card-subtotal">
              <span className="item-card-span">SUBTOTAL: </span>${subTotal}
            </p>
          <BlackButton href="#">ADD TO SHOPPING BAG</BlackButton>
          <p className="item-card-model-description">
            MODEL SIZE: The model is 6ft tall and wears a large shirt and 36
            long pants.
          </p>
        </div>
      </div>
    </>
  );
}
