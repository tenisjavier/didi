import React from "react";
import Btn from "./Btn";

// @desc: Pax and Driver CTA buttons.  If not type is passed it will be a normal btn.
// @props: type drv/pax/none | link (normal btn) "url" | mode light/none | children: normal btn text
const Banner = (props) => {
  const {
    title,
    desc,
    bgColor,
    textColor,
    image,
    btnText,
    btnLink,
    btnMode,
    btnType,
  } = props.data;

  return (
    <div
      className={`w-full flex justify-center items-center py-4 rounded ${
        bgColor && bgColor
      } text-${textColor}`}
    >
      <div className="text-center mb-5 max-w-6xl">{image}</div>

      <div className="container mx-auto py-4 flex flex-col text-center  max-w-6xl">
        <h3 className={`font-bold text-4xl mb-2 `}>{title}</h3>
        <p className="h-16 text-base">{desc}</p>
        <span className="flex justify-center">
          <Btn type={btnType} link={btnLink} mode={btnMode}>
            {btnText}
          </Btn>
        </span>
      </div>
    </div>
  );
};

export default Banner;
