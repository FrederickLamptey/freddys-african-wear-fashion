import BlackButton from '@/app/_components/blackButton';
import Image from 'next/image';
import './itemid.css';

const item = {
  id: 70,
  name: 'DINERO DEEP BLUE KAFTAN',
  department: 'male',
  regularPrice: 200,
  discount: 0,
  description: 'blue',
  image: '/dinero-kaftan-6.jpg',
};

export default function Page() {
  return (
    <>
      <div className="item-review-container">
        <ul className="item-review-ul">
          <li className="item-review-li">
            <Image src={`${item.image}`} width="500" height="600" alt="" />
          </li>
        </ul>

        <div className="item-card-details">
          <h3 className="item-card-heading-1">{item.name}</h3>
          <h4 className="item-card-heading-2">${item.regularPrice}</h4>
          <p className="item-card-description">
            DESCRIPTION: {item.description}
          </p>
          <BlackButton href="#">ADD TO SHOPPING BAG</BlackButton>
          <p className='item-card-model-description'>
            MODEL SIZE: The model is 6ft tall and wears a large shirt and 36
            long pants.
          </p>
        </div>
      </div>
    </>
  );
}
