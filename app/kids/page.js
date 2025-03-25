import ItemDisplay from '../_components/ItemDisplay';
import { getItems } from '../_lib/data-service';

export const metadata = {
  title: 'Kids wardrobe',
};

export default async function Page() {
  const items = await getItems();
  const kidsItems = items.filter((item) => item.department === 'kids');
  // console.log(kidsItems);
  return (
    <div className="kid-items-container">
      <ul className="kid-items-ul">
        {kidsItems.map((kidItem) => (
          <ItemDisplay
            src={kidItem.image}
            href={`/new-arrivals/${kidItem.id}`}
            name={kidItem.name}
            key={kidItem.id}
          />
        ))}
      </ul>
    </div>
  );
}
