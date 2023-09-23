import React from "react";
import textHighlighter from "../../../../../util/textHighlighter";
import Image from "../../../../Image";

export interface CreditCardCashBackBulletsProps {
  text: string,
  icon?: string,
  percentCashBack?: number,
}

const CreditCardCashBackBullets: React.FC<CreditCardCashBackBulletsProps> = ({
  text,
  icon,
  percentCashBack,
}) => {
  return (
    <li
      className="lg:w-full flex gap-4 rounded-3xl lg:pt-10 lg:px-8 lg:pb-6 pt-8 px-4 pb-2 relative"
      style={{
        border: '1px solid #D7D7D7',
      }}
    >
      <p className="text-xl font-normal text-gray-median">
        {textHighlighter(text, "font-bold")}
      </p>
      {percentCashBack && (
        <span
          className="text-7xl text-orange-primary absolute -top-8 bg-white">
          {percentCashBack}
          <span className="text-3xl top-10">%</span>
        </span>
      )}
      {icon && (
        <div className="w-8 p-3 bg-white absolute -right-1 top-2/4 transform -translate-y-2/4">
          <Image
            src={`/icon/${icon}.svg`}
            imageData={{
              title: "Icon description",
              description: "Icon description",
            }}
            imageStyle="w-8"
          />
        </div>
      )}
    </li>
  );
}

export default CreditCardCashBackBullets;