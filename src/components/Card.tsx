import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgSrc,
  imgAlt,
  cardTitle,
  cardBody,
  href,
}: {
  imgSrc: string;
  imgAlt: string;
  cardTitle: string;
  cardBody: string;
  href: string;
}) {
  return (
    <div className="shadow-xl card w-80 bg-base-100 ">
      <figure className="h-[8rem] relative">
        <Image src={imgSrc} alt={imgAlt} className="p-4 bg-cover" fill />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardBody}</p>
        <div className="justify-end card-actions">
          <Link href={href} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
