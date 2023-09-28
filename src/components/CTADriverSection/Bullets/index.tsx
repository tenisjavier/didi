import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface BulletsProps {
  data?: string[]
}

const Bullets: React.FC<BulletsProps> = ({ data }) => {
  return (
    <>
      {data && (
        <ul className="mb-4 grid whitespace-nowrap grid-cols-3 font-bold list-none p-0 m-0">
          {data?.map((item, index) => (
            <li key={index} className="flex gap-4">
              <FontAwesomeIcon icon={faCheckCircle} className='text-orange-primary' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Bullets;