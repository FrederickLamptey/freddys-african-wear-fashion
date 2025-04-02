import Link from "next/link";
import "./itemDisplay.css";

export default function ItemDisplay({src, href, name, alt=""}) { 
    return (
      <li className="item-list">
        <Link href={href} className="item-pop">
          <img src={src} className="item-display-other" alt={alt } />
        </Link>
        <p className="what">{name}</p>
      </li>
    );
}
