import React from "react";
import Btn from "../components/Btn";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text
const Card = (props) => {
  const {
    title,
    desc,
    bgColor,
    bgTextColor,
    image,
    imageAlt,
    btnText,
    btnLink,
    btnMode,
  } = props;
  return (
    <div className={`max-w-sm rounded shadow-lg ${bgColor} ${bgTextColor}`}>
      <div>
        <img className="object-cover h-48 w-full" src={image} alt={imageAlt} />
      </div>

      <div className="px-6 py-4 h-80 flex flex-col justify-between">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="h-16 text-base">{desc}</p>
        <span className="flex justify-center">
          <Btn link={btnLink} mode={btnMode}>
            {btnText}
          </Btn>
        </span>
      </div>
    </div>
  );
};

export default Card;
