import ItemDisplay from './_components/ItemDisplay';
import Navigation from './_components/Navigation';

export default function Page() {
  return (
    <>
      <div className="hero"></div>

      <div className="items-container">
        <p className="home-collection-instruction">
          What are you shopping today?
        </p>

        <ul className="items">
          <ItemDisplay
            src="/dinero-kaftan-8.jpg"
            href="/male"
            name="Men's Outfits"
          />
          <ItemDisplay
            src="/dinero-kaftan-10.jpg"
            href="/female"
            name="Women's Outfits"
          />
          <ItemDisplay
            src="/dinero-kaftan-11.jpg"
            href="/kids"
            name="kid's Outfits"
          />
        </ul>
      </div>
    </>
  );
}
