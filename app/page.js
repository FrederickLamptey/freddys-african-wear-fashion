import Button from './_components/Button';
import ItemDisplayMain from './_components/ItemDisplayMain';

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
          <ItemDisplayMain
            src="/dinero-kaftan-8.jpg"
            href="/male"
            name="Men's Outfits"
        
          />
          <ItemDisplayMain
            src="/dinero-kaftan-10.jpg"
            href="/female"
            name="Women's Outfits"
          />
          <ItemDisplayMain
            src="/dinero-kaftan-11.jpg"
            href="/kids"
            name="kid's Outfits"
          />
        </ul>
      </div>
      <div className="advert"></div>

      <div className="services-container">
        <p className="services-heading home-collection-instruction">
          Wear Africa Services
        </p>
        <ul className="services-list">
          <ItemDisplayMain
            src="/eric-rothermel.jpg"
            href="#"
            name="Book an Appointment"
            // height="450"
            // width="400"
          />
          <ItemDisplayMain
            src="/austin-kehmeier.jpg"
            href="/contact"
            name="Contact Us"
            // height="450"
            // width="400"
          />
        </ul>
      </div>
    </>
  );
}
