import Image from "next/image";
import Link from "next/link";
import "./itemDisplay.css";

export default function ItemDisplay({src, href, name}) { 
    return (
      <li className="item-list">
        <Link href={href}>
          <Image src={src} height="350" width="300" alt="" />
        </Link>
        <p>{name}</p>
      </li>
    );
}
