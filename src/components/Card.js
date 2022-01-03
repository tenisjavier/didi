import React from "react";
import Btn from "./Btn";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text
const Card = (props) => {
  const { title, desc, bgColor, textColor, image, btnText, btnLink, btnMode } =
    props;
  return (
    <div className={`max-w-sm rounded ${bgColor} text-${textColor}`}>
      <div className="text-center mb-5">{image}</div>

      <div className="px-6 py-4 h-80 flex flex-col text-center justify-between">
        <div className="font-bold text-xl mb-2 ">{title}</div>
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
