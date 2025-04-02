// import Image from "next/image";
import Link from "next/link";
import "./itemDisplayMain.css";

export default function ItemDisplay({src, href, name,  alt=""}) { 
    return (
      <li className="item-list">
        <Link href={href} className="item-pop">
          <img src={src} className="item-display" alt={alt} />
        </Link>
        <p className="what">{name}</p>
      </li>
    );
}
