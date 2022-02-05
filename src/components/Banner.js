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
      className={`flex w-full items-center justify-center rounded py-4 ${
        bgColor && bgColor
      } text-${textColor}`}
    >
      <div className="mb-5 max-w-6xl text-center">{image}</div>

      <div className="container mx-auto flex max-w-6xl flex-col py-4  text-center">
        <h3 className={`mb-2 text-4xl font-bold `}>{title}</h3>
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
