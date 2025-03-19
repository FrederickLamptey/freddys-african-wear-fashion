import ItemDisplay from "../_components/ItemDisplay";
import { getItems } from "../_lib/data-service";
import "./maleItems.css"

export const metadata = {
  title: "Male wardrobe",
}

export default async function Page() {
  const items = await getItems()
  const maleItems = items.filter(item => item.department === 'male');
 
  return (
    <div className="male-items-container">
      <ul className="male-items-ul">
        {maleItems.map((maleItem) => (
          <ItemDisplay
            src={maleItem.image}
            href="#"
            name={maleItem.name}
            key={maleItem.id}
          />
        ))}
      </ul>
    </div>
  );
}