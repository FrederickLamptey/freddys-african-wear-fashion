import BlackButton from '@/app/_components/BlackButton';
import Image from 'next/image';
import './itemid.css';
import { getItem } from '@/app/_lib/data-service';

export default async function Page({ params }) {
  const item = await getItem(params.itemId)
  const { id, name, department, regularPrice, discount, description, image } =
    item;

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
          <h4 className="item-card-heading-2">${regularPrice}</h4>
          <p className="item-card-description">DESCRIPTION: {description}</p>
          <p className="item-card-department">DEPARTMENT: {department}</p>
          <p className="item-card-discount">DISCOUNT: ${discount}</p>
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
