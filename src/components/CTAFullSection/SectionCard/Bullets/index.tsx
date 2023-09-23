import { faCarSide, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import textHighlighter from "../../../../util/textHighlighter";
import CreditCardCashBackBullets, { CreditCardCashBackBulletsProps } from "./CreditCardCashBackBullets";


export interface BulletsProps {
  bullets?: string[] | JSX.Element[];
  textDir?: string;
  margin?: string;
  customBulletIcon?: boolean;
  creditCardCashBackBullets?: CreditCardCashBackBulletsProps[];
  icon?: 'faCarSide' | 'faArrowRight' | 'faCheck'
}

const Bullets = ({
  bullets,
  customBulletIcon,
  textDir,
  margin,
  icon,
  creditCardCashBackBullets
}: BulletsProps) => {

  const icons = {
    faCarSide,
    faArrowRight,
    faCheck
  }

  return (
    <ul
      className={`w-full lg:max-w-none p-0 mt-12 mb-6 list-none ${textDir} text-xl flex flex-col gap-12`}
    >
      {creditCardCashBackBullets && creditCardCashBackBullets?.map((item, index) => (
        <CreditCardCashBackBullets
          key={index}
          text={item.text}
          icon={item.icon}
          percentCashBack={item.percentCashBack} />
      ))}
      {bullets && bullets?.map((item, index) => (
        <li key={index} className="flex gap-4">
          {!customBulletIcon && !icon ? (
            <FontAwesomeIcon
              icon={faCarSide}
              className={`mt-1 ${margin} text-orange-primary w-6`}
              size="sm"
            />
          ) : (
            icon && (
              <FontAwesomeIcon
                icon={icons[icon]}
                className={`${margin} text-orange-primary w-6`}
                size="sm"
              />
            )
          )}
          <div className="inline-block">
            {typeof item === "string"
              ? item.split("\n").map((str, index) => (
                <p className="mt-0 mb-5 text-xl" key={index}>
                  {textHighlighter(str)}
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
