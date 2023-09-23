import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CreditCardBullets = {
  text: string;
  icon: IconProp;
}

export interface BulletsProps {
  bullets?: string[] | JSX.Element[];
  textDir?: string;
  margin?: string;
  customBulletIcon?: boolean;
  icon?: IconProp;
  creditCardBullets?: CreditCardBullets[];
}

const Bullets = ({
  bullets,
  customBulletIcon,
  textDir,
  margin,
  icon,
  creditCardBullets
}: BulletsProps) => {
  return (
    <ul
      className={`p-0 mt-12 mb-6 list-none ${textDir} text-xl flex flex-col gap-6`}
    >
      {creditCardBullets && creditCardBullets?.map((item, index) => (
        <li key={index} className="flex gap-4">
          {!customBulletIcon ? (
            <FontAwesomeIcon
              icon={faCarSide}
              className={`mt-1 ${margin} text-orange-primary w-6`}
              size="sm"
            />
          ) : (
            icon && (
              <FontAwesomeIcon
                icon={icon}
                className={`${margin} text-orange-primary w-6`}
                size="sm"
              />
            )
          )}
          <div className="inline-block">
            <p className="mt-0 mb-5 text-xl">{item.text}</p>
          </div>
        </li>
      ))}
      {bullets && bullets?.map((item, index) => (
        <li key={index} className="flex gap-4">
          {!customBulletIcon ? (
            <FontAwesomeIcon
              icon={faCarSide}
              className={`mt-1 ${margin} text-orange-primary w-6`}
              size="sm"
            />
          ) : (
            icon && (
              <FontAwesomeIcon
                icon={icon}
                className={`${margin} text-orange-primary w-6`}
                size="sm"
              />
            )
          )}
          <div className="inline-block">
            {typeof item === "string"
              ? item.split("\n").map((str, index) => (
                <p className="mt-0 mb-5 text-xl" key={index}>
                  {str}
                </p>
              ))
              : item}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Bullets;
