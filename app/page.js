import Button from './_components/Button';
import ItemDisplay from './_components/ItemDisplay';

export default function Page() {
  return (
    <>
      <div className="hero">
        <div className="hero-block-container">
          <p className="hero-para">New Arrivals</p>
          <Button href="/new-arrivals">Shop New Arrivals</Button>
        </div>
      </div>

      <div className="items-container">
        <p className="home-collection-instruction">
          What are you shopping today?
        </p>

        <ul className="items">
          <ItemDisplay
            src="/dinero-kaftan-8.jpg"
            href="/male"
            name="Men's Outfits"
            height="450"
            width="400"
          />
          <ItemDisplay
            src="/dinero-kaftan-10.jpg"
            href="/female"
            name="Women's Outfits"
            height="450"
            width="400"
          />
          <ItemDisplay
            src="/dinero-kaftan-11.jpg"
            href="/kids"
            name="kid's Outfits"
            height="450"
            width="400"
          />
        </ul>
      </div>
      <div className="advert"></div>

      <div className="services-conatiner">
        <p className="services-heading home-collection-instruction">
          Wear Africa Services
        </p>
        <ul className="services-list">
          <ItemDisplay
            src="/eric-rothermel.jpg"
            href="#"
            name="Book an Appointment"
            height="450"
            width="400"
          />
          <ItemDisplay
            src="/austin-kehmeier.jpg"
            href="/contact"
            name="Contact Us"
            height="450"
            width="400"
          />
        </ul>
      </div>
    </>
  );
}
