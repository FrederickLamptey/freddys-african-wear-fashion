import Image from "next/image";
import ItemDisplay from "../_components/ItemDisplay";
import { getItems } from "../_lib/data-service";

export const metadata = {
  title: "New arrivals"
}

export default async function Page() {

  const newArrivals = await getItems();
  
  if (!newArrivals.length) return null;

    return (
      <>
        <div className="new-arrivals-first-container">
          <div className="new-arrivals-content-container">
            <h1 className="new-arrivals-first-container-h">
              NEW ARRIVALS FOR YOU
            </h1>
            <p className="new-arrivals-first-container-p">
              All departments new arrivals for you and loved ones.
            </p>
          </div>
        </div>

        <div className="new-arrivals-second-container">
          <ul className="new-arrivals-second-container-ul">
            {newArrivals.length > 0 &&
              newArrivals.map((newItem) => (
                <ItemDisplay
                src={`${newItem.image}`}
                  href={`/new-arrivals/${newItem.id}`}
                      name={newItem.name}
                      key={newItem.id}
                />
              ))}
          </ul>
        </div>
      </>
    );
}
