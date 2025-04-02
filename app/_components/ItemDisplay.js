import Image from "next/image";
import Link from "next/link";
import "./itemDisplay.css";

export default function ItemDisplay({src, href, name, height="350", width="300", alt=""}) { 
    return (
      <li className="item-list">
        <Link href={href} className="item-pop">
          <Image src={src}  height={height} width={width} alt={alt } />
        </Link>
        <p className="what">{name}</p>
      </li>
    );
}
