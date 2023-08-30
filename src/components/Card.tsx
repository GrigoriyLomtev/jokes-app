import { IJokes } from "../types";
import { formatDate } from "../utils/formatDate";

interface CardProps {
  item: IJokes;
}

function Card({ item }: CardProps) {
  const createdData = formatDate(item.created_at);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col p-4 m-1 shadow-[0_2px_8px_2px_rgba(0,0,0,0.1)] "
    >
      <p className="text-xl ">{item.value}</p>
      <div className="flex justify-between mt-auto text-sm font-montserrat">
        <p className="mt-6 text-gray-500 font-montserrat">{item.id}</p>
        <p className="mt-6 text-gray-500 font-montserrat">{createdData}</p>
      </div>
    </a>
  );
}

export default Card;
