import ItemDisplay from '../_components/ItemDisplay';
import { getItems } from '../_lib/data-service';

export const metadata = {
  title: 'Females wardrobe',
};

export default async function Page() {
  const items = await getItems();
  const femaleItems = items.filter((item) => item.department === 'female');

  return (
    <div className="female-items-container">
      <ul className="female-items-ul">
        {femaleItems.map((femaleItem) => (
          <ItemDisplay
            src={femaleItem.image}
            href={`/new-arrivals/${femaleItem.id}`}
            name={femaleItem.name}
            key={femaleItem.id}
          />
        ))}
      </ul>
    </div>
  );
}
