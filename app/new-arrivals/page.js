import Image from "next/image";
import ItemDisplay from "../_components/ItemDisplay";
import "./new-arrivals.css";

export default function Page() {

    const newArrivals = [];
    
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
            <ItemDisplay src="/dinero-kaftan-2.jpg" href="#" height="400" width="352" name="Item 1" />
          </ul>
        </div>
      </>
    );
}
