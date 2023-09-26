import React from "react";
import textHighlighter from "../../../util/textHighlighter";
import Image from "../../Image";

type CreditCardCashBackBullets = {
  text: string,
  icon?: string,
  percentCashBack?: number,
}

export interface SectionCreditCardCashBackBulletsProps {
  creditCardCashBackBullets: CreditCardCashBackBullets[],
}

const SectionCreditCardCashBackBullets: React.FC<SectionCreditCardCashBackBulletsProps> = ({
  creditCardCashBackBullets,
}) => {
  return (
    <ul className="flex flex-col gap-10">
      {creditCardCashBackBullets.map((bullet, index) => (
        <li
          className="lg:w-full flex gap-4 rounded-3xl lg:pt-10 lg:px-8 lg:pb-6 pt-8 px-4 pb-2 relative"
          style={{
            border: '1px solid #D7D7D7',
          }}
          key={index}
        >
          <p className="text-xl font-normal text-gray-median">
            {textHighlighter(bullet.text, "font-bold")}
          </p>
          {bullet.percentCashBack && (
            <span
              className="text-7xl text-orange-primary absolute -top-8 bg-white">
              {bullet.percentCashBack}
              <span className="text-3xl top-10">%</span>
            </span>
          )}
          {bullet.icon && (
            <div className="w-8 p-3 bg-white absolute -right-1 top-2/4 transform -translate-y-2/4">
              <Image
                src={`/icon/${bullet.icon}.svg`}
                imageData={{
                  title: "Icon description",
                  description: "Icon description",
                }}
                imageStyle="w-8"
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SectionCreditCardCashBackBullets;